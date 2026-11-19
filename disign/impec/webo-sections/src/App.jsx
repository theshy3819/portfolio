import { useEffect, useMemo, useRef, useState } from 'react';
import { BLUEPRINTS } from './blueprints.js';
import { SAMPLES } from './samples/index.js';
import { SECTIONS } from './schema/sections.js';
import { validateSite } from './schema/site.js';
import { THEMES } from './themes.js';
import { buildPrompt } from './ai/prompt.js';
import { SiteRenderer } from './renderer/SiteRenderer.jsx';

/* 카탈로그 미리보기: 업종·레이아웃·기기를 바꿔 가며 같은 부품이 어떻게 조립되는지 본다.
   사이트 JSON 칸을 고치면(또는 AI 출력을 붙여 넣으면) 검사 후 바로 다시 그린다. */

const DEV = { pc: { w: 1440, h: 900, n: 'PC' }, tablet: { w: 820, h: 1180, n: '태블릿' }, phone: { w: 390, h: 844, n: '휴대폰' } };
const TABS = [['preview', '미리보기'], ['outline', '구성도'], ['json', '사이트 JSON'], ['prompt', 'AI 지시문'], ['catalog', '전체 카탈로그']];

function load() { try { return JSON.parse(localStorage.getItem('webo-sections') || '{}'); } catch { return {}; } }

export default function App() {
  const saved = load();
  const [ind, setInd] = useState(BLUEPRINTS[saved.ind] ? saved.ind : 'dermatology');
  const bp = BLUEPRINTS[ind];
  const [lay, setLay] = useState(saved.lay && bp.layouts.some((l) => l.id === saved.lay) ? saved.lay : bp.layouts[0].id);
  const [dev, setDev] = useState(DEV[saved.dev] ? saved.dev : 'pc');
  const [tab, setTab] = useState('preview');
  const [drafts, setDrafts] = useState({});
  useEffect(() => { try { localStorage.setItem('webo-sections', JSON.stringify({ ind, lay, dev })); } catch { /* 기억만 못 함 */ } }, [ind, lay, dev]);

  const key = `${ind}/${lay}`;
  const sample = SAMPLES[ind][lay];
  const text = drafts[key] ?? JSON.stringify(sample, null, 2);
  const result = useMemo(() => {
    try { return validateSite(JSON.parse(text), bp); }
    catch (e) { return { ok: false, data: null, errors: ['JSON 을 읽을 수 없습니다: ' + e.message], warnings: [] }; }
  }, [text, bp]);
  const [last, setLast] = useState(null);
  const shown = result.ok ? result.data : (last?.key === key ? last.data : validateSite(sample, bp).data);
  useEffect(() => { if (result.ok) setLast({ key, data: result.data }); }, [result, key]);

  const pickInd = (id) => { setInd(id); setLay(BLUEPRINTS[id].layouts[0].id); };

  return (
    <div className="hub">
      <header className="hub-top">
        <p className="logo">Web<b>O</b> <span>섹션 카탈로그</span></p>
        <p className="meta">업종별 사이트 구성도 · 시연용 가상 매장</p>
      </header>

      <div className="hub-body">
        <aside className="panel side" aria-label="보기 설정">
          <div className="grp">
            <p className="k" id="k-ind">업종</p>
            <div className="seg col" role="group" aria-labelledby="k-ind">
              {Object.values(BLUEPRINTS).map((b) => (
                <button key={b.id} type="button" aria-pressed={b.id === ind} onClick={() => pickInd(b.id)}>{b.label}</button>
              ))}
            </div>
            <p className="note">{bp.mode}</p>
          </div>
          <div className="grp">
            <p className="k" id="k-lay">추천 레이아웃</p>
            <div className="lays" role="group" aria-labelledby="k-lay">
              {bp.layouts.map((l) => (
                <button key={l.id} type="button" className="lay" aria-pressed={l.id === lay} onClick={() => setLay(l.id)}>
                  <span className="sw" aria-hidden="true">{['bg', 'accent', 'hi', 'panel'].map((t) => <i key={t} style={{ background: THEMES[l.theme].tokens[t] }} />)}</span>
                  <strong>{l.name}</strong>
                  <small>{l.pitch}</small>
                </button>
              ))}
            </div>
          </div>
          <div className="grp">
            <p className="k" id="k-dev">기기 폭</p>
            <div className="seg" role="group" aria-labelledby="k-dev">
              {Object.entries(DEV).map(([k, d]) => <button key={k} type="button" aria-pressed={k === dev} onClick={() => setDev(k)}>{d.n}</button>)}
            </div>
          </div>
          <Check result={result} />
        </aside>

        <main className="main">
          <nav className="tabs" aria-label="보기">
            {TABS.map(([k, n]) => <button key={k} type="button" aria-pressed={k === tab} onClick={() => setTab(k)}>{n}</button>)}
          </nav>
          {tab === 'preview' && <Stage dev={dev} site={shown} stale={!result.ok} />}
          {tab === 'outline' && <Outline site={shown} bp={bp} />}
          {tab === 'json' && (
            <div className="panel pad">
              <div className="row">
                <p className="note">AI 가 내놓을 결과와 같은 모양입니다. 고치거나 AI 출력을 붙여 넣으면 검사 뒤 미리보기에 반영됩니다.</p>
                <button type="button" className="btn-s" onClick={() => setDrafts({ ...drafts, [key]: undefined })}>예시로 되돌리기</button>
              </div>
              <textarea className="code" spellCheck="false" value={text} aria-label="사이트 JSON"
                onChange={(e) => setDrafts({ ...drafts, [key]: e.target.value })} />
            </div>
          )}
          {tab === 'prompt' && (
            <div className="panel pad">
              <p className="note">출력 모양은 <code>schema/site.schema.json</code> 을 structured output 으로 강제하고, 이 글은 고를 수 있는 것과 금지 표현만 알려 줍니다.</p>
              <pre className="code">{buildPrompt(ind, lay)}</pre>
            </div>
          )}
          {tab === 'catalog' && <Catalog />}
        </main>
      </div>
    </div>
  );
}

function Check({ result }) {
  return (
    <div className="grp check" aria-live="polite">
      <p className="k">검사</p>
      {result.ok
        ? <p className="ok">통과 · 경고 {result.warnings.length}건</p>
        : <p className="bad">게시 불가 · 오류 {result.errors.length}건</p>}
      {(result.errors.length > 0 || result.warnings.length > 0) && (
        <ul className="issues">
          {result.errors.map((e, i) => <li key={'e' + i} className="e">{e}</li>)}
          {result.warnings.map((w, i) => <li key={'w' + i} className="w">{w}</li>)}
        </ul>
      )}
    </div>
  );
}

function Stage({ dev, site, stale }) {
  const stage = useRef(null);
  const [sc, setSc] = useState(1);
  const d = DEV[dev];
  useEffect(() => {
    const fit = () => stage.current && setSc(Math.min(1, (stage.current.clientWidth - 48) / d.w));
    fit();
    const ro = new ResizeObserver(fit); ro.observe(stage.current);
    return () => ro.disconnect();
  }, [d.w]);
  return (
    <div className="stage" ref={stage} style={{ height: d.h * sc + 48 + (dev === 'pc' ? 36 * sc : 0) }}>
      {stale && <p className="stale">JSON 에 오류가 있어 마지막으로 통과한 화면을 보여 줍니다</p>}
      <div className={`device dev-${dev}`} style={{ width: d.w, transform: `translateX(-50%) scale(${sc})` }}>
        {dev === 'pc' && <div className="chrome" aria-hidden="true"><i /><i /><i /><span>{site.business.name} · webo.kr</span></div>}
        <div className="screen" style={{ height: d.h, '--view-h': d.h + 'px' }}>
          <SiteRenderer key={JSON.stringify(site).length + site.layout} site={site} />
        </div>
      </div>
    </div>
  );
}

function Outline({ site, bp }) {
  return (
    <div className="panel pad">
      <p className="note">{bp.label} · {site.layout} · 테마 {THEMES[site.theme].label}({site.theme}). 위에서 아래로 페이지 순서입니다. 회색 글은 그 섹션이 business 에서 읽는 값입니다.</p>
      <ol className="outline">
        {site.sections.map((n, i) => {
          const def = SECTIONS[n.type];
          return (
            <li key={n.id}>
              <span className="no">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <p><strong>{def.label}</strong> <code>{n.type}.{n.variant}</code> {bp.required.includes(n.type) && <span className="req">필수</span>}</p>
                <p className="note">{def.variants[n.variant]}</p>
                <p className="reads">{READS[n.type]}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
const READS = {
  notice: '', header: 'name · 오늘 상태 · phone · address', hero: 'name · kind · hours · lunch · phone',
  about: '', offerings: 'offerings', people: 'people', gallery: '', steps: '', faq: '',
  hours: 'hours · lunch · closedDates', location: 'address · addressNote · phone', inquiry: 'offerings · hours · closedDates · phone', footer: 'name · address · phone · email · registration'
};

function Catalog() {
  const inds = Object.values(BLUEPRINTS);
  return (
    <div className="panel pad">
      <p className="note">섹션 {Object.keys(SECTIONS).length}종 · 변형 {Object.values(SECTIONS).reduce((a, s) => a + Object.keys(s.variants).length, 0)}개. 칸의 표시는 그 업종에서 쓸 수 있는 변형입니다.</p>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead><tr><th>섹션</th><th>변형</th>{inds.map((b) => <th key={b.id}>{b.label}</th>)}</tr></thead>
          <tbody>
            {Object.entries(SECTIONS).flatMap(([type, def]) => Object.entries(def.variants).map(([v, desc], i) => (
              <tr key={type + v} className={i === 0 ? 'first' : ''}>
                {i === 0 && <th rowSpan={Object.keys(def.variants).length} scope="rowgroup"><strong>{def.label}</strong><code>{type}</code></th>}
                <td><code>{v}</code><span className="note">{desc}</span></td>
                {inds.map((b) => (
                  <td key={b.id} className="mk">{b.allow[type]?.includes(v) ? (b.layouts.some((l) => l.sections.some(([t, x]) => t === type && x === v)) ? '● 추천' : '○ 허용') : '—'}</td>
                ))}
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

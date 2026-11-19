import { useEffect, useMemo, useRef, useState } from 'react';
import { BLUEPRINTS } from '../blueprints.js';
import { SAMPLES } from '../samples/index.js';
import { SECTIONS } from '../schema/sections.js';
import { validateSite } from '../schema/site.js';
import { SiteRenderer } from '../renderer/SiteRenderer.jsx';
import './select.css';

/* 사장님 온보딩 '레이아웃 고르기' 단계 시뮬레이션.
   받은 매장 정보로 만든 레이아웃 후보를 실제 렌더러로 나란히 보여 주고, 고르면 확인 화면에서 크게 보고 확정한다.
   확정은 시연이라 사이트 JSON 을 보여 줄 뿐 어디로도 보내지 않는다. */

const DEV = { phone: { w: 390, h: 780, n: '휴대폰' }, pc: { w: 1440, h: 900, n: 'PC' } };

function industryFromUrl() {
  try { const q = new URLSearchParams(location.search).get('industry'); return BLUEPRINTS[q] ? q : 'dermatology'; } catch { return 'dermatology'; }
}

/** 실제 폭으로 그린 사이트를 틀 폭에 맞춰 줄인다 */
function Frame({ site, dev, height, live = false }) {
  const box = useRef(null);
  const [sc, setSc] = useState(0.3);
  const d = DEV[dev];
  useEffect(() => {
    const fit = () => box.current && setSc(box.current.clientWidth / d.w);
    fit();
    const ro = new ResizeObserver(fit); ro.observe(box.current);
    return () => ro.disconnect();
  }, [d.w]);
  const h = height ?? d.h;
  return (
    <div className={`frame frame-${dev}`} ref={box} style={{ height: h * sc }}>
      <div className="frame-in" style={{ width: d.w, height: h, transform: `scale(${sc})` }} inert={live ? undefined : ''}>
        <div className="frame-screen" style={{ height: h, '--view-h': h + 'px' }}><SiteRenderer site={site} /></div>
      </div>
    </div>
  );
}

const Star = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" /></svg>
);
const Check = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);

function DevSeg({ dev, setDev, label }) {
  return (
    <div className="seg" role="group" aria-label={label}>
      {Object.entries(DEV).map(([k, d]) => <button key={k} type="button" aria-pressed={k === dev} onClick={() => setDev(k)}>{d.n}</button>)}
    </div>
  );
}

export default function SelectApp() {
  const ind = industryFromUrl();
  const bp = BLUEPRINTS[ind];
  const options = bp.layouts.filter((l) => SAMPLES[ind][l.id]).map((l) => ({ ...l, site: SAMPLES[ind][l.id] }));
  const biz = options[0].site.business;
  const [dev, setDev] = useState('phone');
  const [pick, setPick] = useState(null);
  const [step, setStep] = useState('choose'); // choose → confirm → done
  const chosen = options.find((o) => o.id === pick);

  useEffect(() => { window.scrollTo({ top: 0 }); }, [step]);

  return (
    <div className="ob">
      <header className="ob-top">
        <p className="logo">Web<b>O</b></p>
        <ol className="steps" aria-label="만들기 단계">
          {['매장 정보', '사진', '레이아웃', '확인'].map((s, i) => (
            <li key={s} aria-current={i === (step === 'choose' ? 2 : 3) ? 'step' : undefined} className={i < (step === 'choose' ? 2 : 3) ? 'past' : ''}>{s}</li>
          ))}
        </ol>
        <p className="sim">시연 화면</p>
      </header>

      {step === 'choose' && (
        <main className="ob-main">
          <div className="ob-head">
            <p className="ai-chip"><Star />받은 정보로 만든 {options.length}가지</p>
            <h1>{biz.name}의 첫 화면을 골라 주세요</h1>
            <p className="lead">손님이 사이트에 들어와 가장 먼저 보는 화면입니다. 내용은 같고 앞세우는 것만 다릅니다. 고른 뒤에도 말로 고칠 수 있어요.</p>
          </div>
          <div className="ob-bar">
            <DevSeg dev={dev} setDev={setDev} label="미리보기 기기" />
            <p className="hint">손님은 대부분 휴대폰으로 봅니다</p>
          </div>

          <div className="opts" role="radiogroup" aria-label="레이아웃">
            {options.map((o) => {
              const on = o.id === pick;
              return (
                <div key={o.id} className={`opt${on ? ' on' : ''}`}>
                  <button type="button" role="radio" aria-checked={on} className="opt-hit" onClick={() => setPick(o.id)}>
                    <span className="sr">{o.name} 고르기</span>
                  </button>
                  <Frame site={o.site} dev={dev} height={dev === 'phone' ? 720 : 900} />
                  <div className="opt-body">
                    <div className="opt-name">
                      <span className="radio" aria-hidden="true">{on && <Check />}</span>
                      <h2>{o.name.replace(/^[A-Z]\d\s*/, '')}</h2>
                    </div>
                    <p>{o.pitch}</p>
                    <ul className="opt-leads">
                      {o.site.sections.filter((n) => !['notice', 'header', 'footer'].includes(n.type)).slice(0, 3).map((n) => (
                        <li key={n.id}>{SECTIONS[n.type].label}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={`dock-bar${chosen ? ' show' : ''}`} aria-live="polite">
            <p>{chosen ? <><strong>{chosen.name.replace(/^[A-Z]\d\s*/, '')}</strong>을 골랐어요</> : '하나를 골라 주세요'}</p>
            <button type="button" className="btn-p" disabled={!chosen} onClick={() => setStep('confirm')}>이 화면으로 보기</button>
          </div>
        </main>
      )}

      {step !== 'choose' && chosen && <Confirm o={chosen} bp={bp} done={step === 'done'} onBack={() => setStep('choose')} onDone={() => setStep('done')} />}
    </div>
  );
}

function Confirm({ o, bp, done, onBack, onDone }) {
  const [dev, setDev] = useState('phone');
  const [json, setJson] = useState(false);
  const r = useMemo(() => validateSite(o.site, bp), [o, bp]);
  const name = o.name.replace(/^[A-Z]\d\s*/, '');
  return (
    <main className="ob-main confirm">
      <div className="cf-view">
        <div className="ob-bar">
          <DevSeg dev={dev} setDev={setDev} label="미리보기 기기" />
          <p className="hint">눌러 보고 스크롤해 보세요. 손님이 보는 그대로입니다</p>
        </div>
        <div className={`cf-stage stage-${dev}`}>
          <Frame key={dev} site={o.site} dev={dev} live />
        </div>
      </div>

      <aside className="cf-side">
        {done ? (
          <div className="cf-done" role="status">
            <span className="done-ic"><Check /></span>
            <h1>사이트 초안을 만들었어요</h1>
            <p>{name} 화면으로 {o.site.business.name} 사이트를 만들었습니다. 이제 편집 화면에서 말로 고칠 수 있어요.</p>
            <p className="note">시연 화면이라 실제로 만들거나 보내지는 않았습니다.</p>
            <button type="button" className="btn-l" onClick={onBack}>다른 화면도 보기</button>
          </div>
        ) : (
          <>
            <p className="ai-chip"><Star />{o.name.match(/^[A-Z]\d/)?.[0]} · {name}</p>
            <h1>이 화면으로 만들까요?</h1>
            <p className="lead">{o.pitch}</p>
            <h2 className="cf-h">위에서부터 이렇게 놓여요</h2>
            <ol className="cf-outline">
              {o.site.sections.map((n) => <li key={n.id}>{SECTIONS[n.type].label}</li>)}
            </ol>
            <p className={`cf-check ${r.ok ? 'ok' : 'bad'}`}>
              {r.ok ? `게시 전 검사 통과${r.warnings.length ? ` · 확인할 것 ${r.warnings.length}건` : ''}` : `고칠 것 ${r.errors.length}건`}
            </p>
            {r.warnings.map((w) => <p key={w} className="note">{w}</p>)}
            <div className="cf-acts">
              <button type="button" className="btn-p" disabled={!r.ok} onClick={onDone}>이 화면으로 만들기</button>
              <button type="button" className="btn-l" onClick={onBack}>다시 고르기</button>
            </div>
            <button type="button" className="link" aria-expanded={json} onClick={() => setJson(!json)}>{json ? '사이트 JSON 접기' : 'AI가 만든 사이트 JSON 보기'}</button>
            {json && <pre className="code">{JSON.stringify(o.site, null, 2)}</pre>}
          </>
        )}
      </aside>
    </main>
  );
}

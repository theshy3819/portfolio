import { useState, useEffect, useRef } from 'react';
import { useSite, cx, weekRows, todayState, upcomingClosed, WD } from './lib.js';
import { Icon, Photo, Actions, ActionBtn, SecHead } from './ui.jsx';
import { Inquiry } from './Inquiry.jsx';

/* 섹션 컴포넌트. 각 컴포넌트는 { id, variant, props } 를 받고 사실 값은 useSite().business 에서 읽는다.
   변형은 같은 데이터를 다른 배치로 그릴 뿐, 받는 값은 같다. */

function useNow() {
  const [now, set] = useState(() => new Date());
  useEffect(() => { const t = setInterval(() => set(new Date()), 60000); return () => clearInterval(t); }, []);
  return now;
}

function StatePill() {
  const { business, word } = useSite();
  const st = todayState(business, useNow(), word);
  const ic = { on: 'check', lunch: 'clock', before: 'clock', done: 'lock', off: 'cal' }[st.s];
  return <span className="pill" data-s={st.s}><Icon name={ic} size={14} />{st.label}</span>;
}

/* ── 공지 띠 ── */
function Notice({ props }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <aside className="notice" data-tone={props.tone} aria-label="공지">
      <div className="in notice-in">
        <Icon name={props.tone === 'closed' ? 'cal' : 'info'} size={18} />
        <p>{props.text}</p>
        <button type="button" className="icon-btn" aria-label="공지 닫기" onClick={() => setOpen(false)}><Icon name="x" size={18} /></button>
      </div>
    </aside>
  );
}

/* ── 머리줄: top / rail ── */
function Header({ variant, props }) {
  const { business, go, word } = useSite();
  const [menu, setMenu] = useState(false);
  const st = todayState(business, useNow(), word);
  const nav = (
    <nav aria-label="사이트 메뉴" className="nav">
      {props.links.map((l) => (
        <a key={l.to} href={`#${l.to}`} onClick={(e) => { e.preventDefault(); setMenu(false); go({ action: 'section', to: l.to }); }}>{l.label}</a>
      ))}
    </nav>
  );
  if (variant === 'rail') {
    return (
      <header className="rail">
        <div className="rail-top">
          <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); go({ action: 'section', to: 'top' }); }}>{business.name}</a>
          <button type="button" className="icon-btn menu-btn" aria-expanded={menu} aria-label="메뉴" onClick={() => setMenu(!menu)}><Icon name={menu ? 'x' : 'menu'} size={22} /></button>
        </div>
        <div className="rail-state">
          <StatePill />
          <p className="rail-hours"><span>오늘</span> {st.hoursText}</p>
          {st.next && <p className="rail-next">{st.next}</p>}
        </div>
        <div className={cx('rail-nav', menu && 'open')}>{nav}</div>
        <div className="rail-foot">
          <a className="rail-phone" href={`tel:${business.phone}`}><Icon name="phone" size={16} />{business.phone}</a>
          <p className="rail-addr">{business.address}</p>
          {props.cta && <ActionBtn a={props.cta} className="rail-cta" />}
        </div>
      </header>
    );
  }
  return (
    <header className="s-head">
      <div className="in s-head-in">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); go({ action: 'section', to: 'top' }); }}>{business.name}</a>
        <div className={cx('head-nav', menu && 'open')}>{nav}</div>
        <div className="head-end">
          {word === '진료' && <StatePill />}
          {props.cta && <ActionBtn a={props.cta} className="head-cta" />}
          <button type="button" className="icon-btn menu-btn" aria-expanded={menu} aria-label="메뉴" onClick={() => setMenu(!menu)}><Icon name={menu ? 'x' : 'menu'} size={22} /></button>
        </div>
      </div>
    </header>
  );
}

/* ── 첫 화면: split / mosaic / sign / cover / statement ── */
function Hero({ id, variant, props }) {
  const { business, word } = useSite();
  const now = useNow();
  const title = props.title || business.name;
  const [a, b, c] = props.images;
  const tid = `${id}-t`;
  if (variant === 'sign') {
    const st = todayState(business, now, word);
    const ic = { on: 'check', lunch: 'clock', before: 'clock', done: 'lock', off: 'cal' }[st.s];
    return (
      <section className="hero hero-sign" aria-labelledby={tid}>
        <div className="in hero-in">
          <div className="hero-text">
            <h1 id={tid}>{title}</h1>
            {props.sub && <p className="hero-dept">{props.sub}</p>}
            <p className="sign-state" data-s={st.s}><Icon name={ic} size={32} />{st.label}</p>
            {st.next && <p className="sign-next">{st.next}</p>}
            <dl className="sign-facts">
              <div><dt>오늘 {word}</dt><dd>{st.hoursText}</dd></div>
              {business.lunch && <div><dt>점심시간</dt><dd>{business.lunch.join('~')}</dd></div>}
              <div><dt>전화</dt><dd><a href={`tel:${business.phone}`}>{business.phone}</a></dd></div>
            </dl>
            <Actions list={props.cta} className="hero-cta" />
          </div>
          {a && <Photo slot={a} className="hero-media" />}
        </div>
      </section>
    );
  }
  if (variant === 'cover') {
    return (
      <section className="hero hero-cover" aria-labelledby={tid}>
        <Photo slot={a} className="hero-media" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="in hero-in">
          <h1 id={tid}>{title}</h1>
          {props.sub && <p className="hero-line">{props.sub}</p>}
          <p className="hero-line hero-now"><StatePill /> 오늘 {todayState(business, now, word).hoursText}</p>
          <Actions list={props.cta} className="hero-cta" />
        </div>
      </section>
    );
  }
  if (variant === 'statement') {
    return (
      <section className="hero hero-statement" aria-labelledby={tid}>
        <div className="in">
          <p className="eyebrow">{business.name}</p>
          <h1 id={tid}>{title}</h1>
          {props.sub && <p className="hero-sub">{props.sub}</p>}
          <Actions list={props.cta} className="hero-cta" />
          {props.facts?.length > 0 && (
            <dl className="st-facts">{props.facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}</dl>
          )}
        </div>
      </section>
    );
  }
  if (variant === 'track') return <HeroTrack id={id} props={props} title={title} />;
  if (variant === 'mosaic') {
    return (
      <section className="hero hero-mosaic" aria-labelledby={tid}>
        <div className="in mosaic">
          <div className="hero-text">
            <p className="eyebrow">{business.kind}</p>
            <h1 id={tid}>{title}</h1>
            {props.sub && <p className="hero-sub">{props.sub}</p>}
            <Actions list={props.cta} className="hero-cta" />
          </div>
          <Photo slot={a} className="m-main" />
          <Photo slot={b ?? a} className="m-s1" />
          <Photo slot={c ?? a} className="m-s2" />
        </div>
      </section>
    );
  }
  return (
    <section className="hero hero-split" aria-labelledby={tid}>
      <div className="in split">
        <Photo slot={a} className="hero-media" />
        <div className="hero-text">
          <h1 id={tid}>{title}</h1>
          {props.sub && <p className="hero-sub">{props.sub}</p>}
          <Actions list={props.cta} className="hero-cta" />
        </div>
      </div>
    </section>
  );
}

/* 스크롤 부모(미리보기 틀 안에서도 맞게 관찰하려고) */
function scrollParent(el) {
  for (let p = el?.parentElement; p; p = p.parentElement) {
    const o = getComputedStyle(p).overflowY;
    if ((o === 'auto' || o === 'scroll') && p.scrollHeight > p.clientHeight) return p;
  }
  return null;
}

/* 첫 화면 track: 같은 사이트의 첫 steps 섹션을 가로 동선 띠로 그린다 */
function HeroTrack({ id, props, title }) {
  const { business, sections, word, go } = useSite();
  const st = todayState(business, useNow(), word);
  const steps = sections.find((n) => n.type === 'steps');
  const items = steps?.props.items ?? [];
  const tid = `${id}-t`;
  const jump = (e, i) => {
    const el = e.currentTarget.closest('.ws-site')?.querySelector(`[data-step="${steps.id}-${i}"]`);
    if (el) el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    else go({ action: 'section', to: steps.id });
  };
  return (
    <section className="hero hero-track" aria-labelledby={tid}>
      <div className="in">
        <div className="tr-top">
          <div className="tr-text">
            <h1 id={tid}>{title}</h1>
            {props.sub && <p className="hero-sub">{props.sub}</p>}
            <Actions list={props.cta} className="hero-cta" />
          </div>
          <dl className="tr-today">
            <div className="tr-state"><dt className="sr">지금</dt><dd><StatePill /></dd></div>
            <div><dt>오늘 {word}</dt><dd className="num">{st.hoursText}</dd></div>
            {st.next && <div><dt>안내</dt><dd>{st.next}</dd></div>}
            <div><dt>전화</dt><dd><a className="num" href={`tel:${business.phone}`}>{business.phone}</a></dd></div>
          </dl>
        </div>
        {items.length > 0 && (
          <nav className="track" aria-label="처음 오시는 순서">
            <ol style={{ '--n': items.length }}>
              {items.map((s, i) => (
                <li key={i}>
                  <button type="button" onClick={(e) => jump(e, i)} aria-label={`${i + 1}단계 ${s.short ?? s.title}${s.place ? `, ${s.place}` : ''} 자세히 보기`}>
                    <span className="tk-no num" aria-hidden="true">{i + 1}</span>
                    <span className="tk-name">{s.short ?? s.title}</span>
                    {s.place && <span className="tk-place">{s.place}</span>}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
    </section>
  );
}

/* steps path: 세로 동선. 내려가면 지나온 만큼 선이 차오르고 현재 정거장이 켜진다 */
function StepsPath({ id, props }) {
  const [cur, setCur] = useState(0);
  const list = useRef(null);
  const rows = useRef([]);
  const [fill, setFill] = useState(0);
  useEffect(() => {
    const els = rows.current.filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((en) => {
      en.forEach((e) => { if (e.isIntersecting) setCur(+e.target.dataset.i); });
    }, { root: scrollParent(list.current), rootMargin: '-40% 0px -55% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [props.items.length]);
  useEffect(() => {
    const el = rows.current[cur];
    if (el) setFill(el.offsetTop + 22);
  }, [cur]);
  const it = props.items[cur];
  return (
    <section className="sec path" aria-labelledby={`${id}-t`}>
      <div className="in path-in">
        <div className="path-side">
          <h2 id={`${id}-t`}>{props.title}</h2>
          {props.desc && <p className="sec-desc">{props.desc}</p>}
          <p className="path-now" aria-live="polite">
            <span className="num"><b>{cur + 1}</b> / {props.items.length}</span>
            <strong>{it?.short ?? it?.title}</strong>
            {it?.place && <span>{it.place}</span>}
          </p>
        </div>
        <ol className="path-list" ref={list} style={{ '--fill': fill + 'px' }}>
          {props.items.map((s, i) => (
            <li key={i} data-i={i} data-step={`${id}-${i}`} ref={(el) => (rows.current[i] = el)} className={i <= cur ? 'on' : ''} aria-current={i === cur ? 'step' : undefined}>
              <span className="pn num" aria-hidden="true">{i + 1}</span>
              <div className="pb">
                <h3>{s.title}</h3>
                {s.place && <p className="pl"><Icon name="pin" size={16} />{s.place}</p>}
                <p className="pd">{s.body}</p>
                {s.bring?.length > 0 && (
                  <div className="bring">
                    <p>챙겨 오세요</p>
                    <ul>{s.bring.map((b) => <li key={b}><Icon name="check" size={18} />{b}</li>)}</ul>
                  </div>
                )}
              </div>
              {s.image && <Photo slot={s.image} className="pp-ph" />}
            </li>
          ))}
        </ol>
      </div>
      {props.note && <div className="in"><p className="st-note"><Icon name="info" size={18} />{props.note}</p></div>}
    </section>
  );
}

/* ── 소개: facts / split ── */
function About({ id, variant, props }) {
  return (
    <section className={cx('sec about', `about-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in about-in">
        <div className="about-text">
          <h2 id={`${id}-t`}>{props.title}</h2>
          <p className="lead">{props.body}</p>
          {props.facts.length > 0 && (
            <ul className="facts">{props.facts.map((f) => <li key={f}><Icon name="check" size={18} />{f}</li>)}</ul>
          )}
        </div>
        {variant === 'split' && props.image && <Photo slot={props.image} className="about-media" />}
      </div>
    </section>
  );
}

/* ── 제공 항목: list / board / chips / cards ── */
function Offerings({ id, variant, props }) {
  const { business, pick, picks } = useSite();
  const all = business.offerings;
  const items = props.ids ? props.ids.map((i) => all.find((o) => o.id === i)).filter(Boolean) : all;
  const head = <SecHead id={`${id}-t`} title={props.title} desc={props.desc} />;
  let body;
  if (variant === 'board') {
    const groups = props.groups ?? [{ name: '', ids: items.map((o) => o.id) }];
    body = (
      <div className="board">
        {groups.map((g) => (
          <div className="bd-group" key={g.name}>
            {g.name && <h3>{g.name}</h3>}
            <ul className="bd-list">
              {g.ids.map((i) => all.find((o) => o.id === i)).filter(Boolean).map((o) => (
                <li className="bd-row" key={o.id}>
                  <div className="bd-line"><span className="bd-name">{o.name}{o.badge && <span className="tag">{o.badge}</span>}</span><span className="bd-dots" aria-hidden="true" /><span className="num">{o.price}</span></div>
                  <div className="bd-sub"><span>{o.desc}</span><span className="num">{o.time}</span></div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  } else if (variant === 'chips') {
    body = (
      <ul className="chips">
        {items.map((o) => {
          const on = picks.includes(o.id);
          return (
            <li key={o.id}>
              <button type="button" className="chip" aria-pressed={on} onClick={() => pick(o.id)}>
                <span>{o.name}</span><span className="chip-add"><Icon name={on ? 'check' : 'plus'} size={16} />{on ? '담음' : '문의에 담기'}</span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  } else if (variant === 'cards') {
    body = (
      <ul className="cards">
        {items.map((o, i) => (
          <li key={o.id}>
            <button type="button" className="card" aria-pressed={picks.includes(o.id)} onClick={() => pick(o.id, true)}>
              <span className="card-no num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{o.name}</h3>
              {o.desc && <p>{o.desc}</p>}
              <span className="card-go">상담 신청에 담기 <Icon name="right" size={16} /></span>
            </button>
          </li>
        ))}
      </ul>
    );
  } else {
    body = (
      <ul className="menu-list">
        {items.map((o) => (
          <li className="mr" key={o.id}>
            <h3 className="mr-name">{o.name}{o.badge && <span className="tag">{o.badge}</span>}</h3>
            <p className="mr-meta num">{[o.time, o.price].filter(Boolean).join(' · ')}</p>
            {o.desc && <p className="mr-desc">{o.desc}</p>}
            <button type="button" className="go-link" onClick={() => pick(o.id, true)}>이 관리로 상담 요청 <Icon name="right" size={16} /></button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <section className={cx('sec offerings', `off-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in">{head}{body}{props.note && <p className="price-note">{props.note}</p>}</div>
    </section>
  );
}

/* ── 사람: text / profiles ── */
function People({ id, variant, props }) {
  const { business } = useSite();
  return (
    <section className={cx('sec people', `people-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in">
        <SecHead id={`${id}-t`} title={props.title} desc={props.desc} />
        <ul className="ppl">
          {business.people.map((p) => (
            <li className="pp" key={p.id}>
              {variant === 'profiles' && <Photo slot={p.photo ?? { hint: '인물 사진' }} className="pp-photo" />}
              <div className="pp-body">
                <p className="pp-role">{p.role}</p>
                <h3>{p.name}</h3>
                <ul className="pp-lines">{p.lines.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── 공간: mosaic / walk ── */
function Gallery({ id, variant, props }) {
  const [cur, setCur] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    if (variant !== 'walk' || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((en) => en.forEach((e) => e.isIntersecting && setCur(+e.target.dataset.i)), { rootMargin: '-45% 0px -45% 0px' });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [variant, props.items.length]);
  if (variant === 'walk') {
    return (
      <section className="sec walk" aria-labelledby={`${id}-t`}>
        <div className="in walk-in">
          <div className="walk-side">
            <h2 id={`${id}-t`}>{props.title}</h2>
            {props.desc && <p className="sec-desc">{props.desc}</p>}
            <p className="walk-now" aria-live="polite"><span className="num">{String(cur + 1).padStart(2, '0')}</span> / {String(props.items.length).padStart(2, '0')}<br /><strong>{props.items[cur]?.caption}</strong></p>
          </div>
          <ol className="walk-list">
            {props.items.map((it, i) => (
              <li key={i} data-i={i} ref={(el) => (refs.current[i] = el)}>
                <Photo slot={it.image} className="walk-ph" />
                <p className="cap"><span className="num">{String(i + 1).padStart(2, '0')}</span> {it.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
  const [big, ...rest] = props.items;
  const wide = rest.length >= 3 ? rest.pop() : null;
  return (
    <section className="sec gallery" aria-labelledby={`${id}-t`}>
      <div className="in">
        <SecHead id={`${id}-t`} title={props.title} desc={props.desc} />
        <div className="gal">
          <div className="g g-tall"><Photo slot={big.image} /><p className="cap">{big.caption}</p></div>
          {rest.map((it, i) => <div className="g" key={i}><Photo slot={it.image} /><p className="cap">{it.caption}</p></div>)}
        </div>
        {wide && <div className="wide"><Photo slot={wide.image} /><p className="cap">{wide.caption}</p></div>}
      </div>
    </section>
  );
}

/* ── 이용 순서: list / columns ── */
function Steps({ id, variant, props }) {
  if (variant === 'path') return <StepsPath id={id} props={props} />;
  return (
    <section className={cx('sec steps', `steps-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in">
        <SecHead id={`${id}-t`} title={props.title} />
        <ol className="st-list">
          {props.items.map((s, i) => (
            <li key={i}><span className="st-no num">{i + 1}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></li>
          ))}
        </ol>
        {props.note && <p className="st-note"><Icon name="info" size={18} />{props.note}</p>}
      </div>
    </section>
  );
}

/* ── 자주 묻는 질문 ── */
function Faq({ id, props }) {
  return (
    <section className="sec faq" aria-labelledby={`${id}-t`}>
      <div className="in">
        <SecHead id={`${id}-t`} title={props.title} />
        <div className="faq-list">
          {props.items.map((q, i) => (
            <details className="qa" key={i}><summary>{q.q}<Icon name="down" size={20} /></summary><p>{q.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 영업·진료 시간: table / board ── */
function Hours({ id, variant, props }) {
  const { business, word } = useSite();
  const now = useNow();
  const today = now.getDay();
  const closed = upcomingClosed(business, 3, now);
  return (
    <section className={cx('sec hours', `hours-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in hours-in">
        <div>
          <SecHead id={`${id}-t`} title={props.title}><StatePill /></SecHead>
          <ul className="hrs">
            {weekRows(business).map((h) => (
              <li key={h.wd} className={cx('hr', h.wd === today && 'today', !h.open && 'off')}>
                <span className="hr-d">{WD[h.wd]}요일</span>
                <span className="hr-t num">{h.open ? `${h.open} ~ ${h.close}` : `휴${word === '진료' ? '진' : '무'}`}</span>
                <span className="hr-x">{h.wd === today ? '오늘' : h.lunch && business.lunch ? `점심 ${business.lunch.join('~')}` : ''}</span>
              </li>
            ))}
          </ul>
          {props.note && <p className="price-note">{props.note}</p>}
        </div>
        {variant === 'board' && (
          <div className="closed-box">
            <h3>다가오는 휴{word === '진료' ? '진' : '무'}일</h3>
            <ul>{closed.length ? closed.map((c) => <li key={c.date}><span>{c.text} <span className="muted">{c.label}</span></span><span className="pill" data-s="off">휴{word === '진료' ? '진' : '무'}</span></li>)
              : <li className="muted">예정된 휴무가 없습니다</li>}</ul>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── 오시는 길: split / stack ── */
function Location({ id, variant, props }) {
  const { business } = useSite();
  const [copied, setCopied] = useState(false);
  const copy = () => { try { navigator.clipboard?.writeText(business.address); } catch { /* 복사가 막혀도 안내만 */ } setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <section className={cx('sec visit', `visit-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in visit-in">
        <Photo slot={{ hint: '지도 자리 · 게시할 때 지도 서비스가 들어옵니다' }} className="map" />
        <div className="visit-info">
          <h2 id={`${id}-t`}>{props.title}</h2>
          <p className="addr">{business.address}</p>
          {business.addressNote && <p className="muted">{business.addressNote}</p>}
          <div className="acts">
            <button type="button" className="btn b-line" onClick={copy}>{copied ? '주소를 복사했어요' : '주소 복사'}</button>
            <a className="btn b-line" href={`tel:${business.phone}`}><Icon name="phone" size={18} />{business.phone}</a>
          </div>
          {props.directions.length > 0 && (
            <dl className="dirs">{props.directions.map((d) => <div key={d.label}><dt>{d.label}</dt><dd>{d.text}</dd></div>)}</dl>
          )}
        </div>
      </div>
    </section>
  );
}

/* ── 바닥글 ── */
function Footer({ props }) {
  const { business } = useSite();
  const [open, setOpen] = useState(false);
  return (
    <footer className="s-foot">
      <div className="in">
        <p className="brand">{business.name}</p>
        <p>{business.address} · 전화 {business.phone}{business.email ? ` · ${business.email}` : ''}</p>
        {business.registration && <p>{business.registration}</p>}
        {props.lines.map((l) => <p key={l}>{l}</p>)}
        <button type="button" className="go-link" onClick={() => setOpen(!open)} aria-expanded={open}>개인정보처리방침</button>
        {open && <p className="policy">문의 폼으로 받은 이름·연락처는 연락 목적으로만 쓰고, 상담이 끝나면 지웁니다. (시연용 요약문)</p>}
        <p className="made">WebO로 만든 사이트</p>
      </div>
    </footer>
  );
}

export const REGISTRY = {
  notice: Notice, header: Header, hero: Hero, about: About, offerings: Offerings, people: People,
  gallery: Gallery, steps: Steps, faq: Faq, hours: Hours, location: Location, inquiry: Inquiry, footer: Footer
};

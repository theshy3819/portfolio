import { useSite, cx } from './lib.js';

/* 선 아이콘 한 벌(24 격자, 1.75 선). 섹션은 이름만 넘긴다. */
const PATHS = {
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  pin: 'M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  lock: 'M6 11h12v10H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  cal: 'M4 6h16v15H4zM4 10h16M8 3v4M16 3v4',
  down: 'M6 9l6 6 6-6',
  right: 'M5 12h14M13 6l6 6-6 6',
  plus: 'M12 5v14M5 12h14',
  menu: 'M4 7h16M4 12h16M4 17h16',
  x: 'M6 6l12 12M18 6L6 18',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.5v.5',
  image: 'M4 5h16v14H4zM4 16l5-5 4 4 3-3 4 4M15.5 9.5a1 1 0 1 0 0-.01',
  chat: 'M4 5h16v11H9l-5 4z'
};
export const Icon = ({ name, size = 18, className }) => (
  <svg className={cx('ic', className)} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={PATHS[name]} /></svg>
);

/** 사진 칸. src 가 없으면 어떤 사진이 들어갈지 적은 빈 칸으로 그린다. */
export function Photo({ slot, className, ratio }) {
  const style = ratio ? { aspectRatio: ratio } : undefined;
  if (slot?.src) return <figure className={cx('ph', className)} style={style}><img src={slot.src} alt={slot.alt ?? slot.hint} /></figure>;
  return (
    <figure className={cx('ph ph-empty', className)} style={style} role="img" aria-label={`사진 자리: ${slot?.hint ?? ''}`}>
      <span className="ph-hint"><Icon name="image" size={20} />{slot?.hint ?? '사진'}</span>
    </figure>
  );
}

/** 버튼 한 개. action 은 SiteRenderer 가 푼다(문의로 가기·전화·지도·섹션 이동). */
export function ActionBtn({ a, className }) {
  const { go, business } = useSite();
  const icon = a.action === 'call' ? 'phone' : a.action === 'map' ? 'pin' : null;
  const href = a.action === 'call' ? `tel:${business.phone}` : undefined;
  const El = href ? 'a' : 'button';
  return (
    <El className={cx('btn', a.style === 'line' ? 'b-line' : 'b-fill', className)} href={href}
      type={href ? undefined : 'button'} onClick={(e) => { e.preventDefault(); go(a); }}>
      {icon && <Icon name={icon} size={18} />}{a.label}
    </El>
  );
}

export const Actions = ({ list, className }) => (
  <div className={cx('acts', className)}>{list.map((a, i) => <ActionBtn key={i} a={a} />)}</div>
);

export const SecHead = ({ title, desc, id, children }) => (
  <div className="sec-head">
    <div><h2 id={id}>{title}</h2>{desc && <p className="sec-desc">{desc}</p>}</div>
    {children}
  </div>
);

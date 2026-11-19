import { useMemo, useRef, useState } from 'react';
import { SiteCtx } from './lib.js';
import { REGISTRY } from './sections.jsx';
import { Icon } from './ui.jsx';
import { themeStyle } from '../themes.js';
import './site.css';

const WORD = { dermatology: '진료', lawFirm: '상담' };

/**
 * 사이트 JSON 한 벌을 그린다. 검사는 부르는 쪽(validateSite)에서 끝낸 값을 받는다.
 * 모르는 type 은 그리지 않고 건너뛴다(카탈로그 밖 값이 화면을 깨지 않게).
 */
export function SiteRenderer({ site }) {
  const root = useRef(null);
  const [picks, setPicks] = useState([]);
  const inquiryId = site.sections.find((n) => n.type === 'inquiry')?.id;
  const visitId = site.sections.find((n) => n.type === 'location')?.id;
  const rail = site.sections.some((n) => n.type === 'header' && n.variant === 'rail');

  const ctx = useMemo(() => {
    const scrollTo = (id) => {
      const el = id === 'top' ? root.current : root.current?.querySelector(`[data-sec="${id}"]`);
      el?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    };
    return {
      business: site.business,
      sections: site.sections,
      word: WORD[site.industry] ?? '영업',
      picks,
      pick: (id, only) => setPicks((p) => (only ? (p.includes(id) ? p : [...p, id]) : p.includes(id) ? p.filter((x) => x !== id) : [...p, id])),
      go: (a) => {
        if (a.action === 'call') { window.location.href = `tel:${site.business.phone}`; return; }
        if (a.action === 'inquiry') return scrollTo(inquiryId);
        if (a.action === 'map') return scrollTo(visitId);
        scrollTo(a.to);
      }
    };
  }, [site, picks, inquiryId, visitId]);

  const nodes = site.sections.map((n) => {
    const C = REGISTRY[n.type];
    if (!C) return null;
    return <div key={n.id} data-sec={n.id} data-type={n.type} className={`sec-wrap t-${n.type}`}><C {...n} /></div>;
  });
  /* 옆 레일형: 공지 띠는 위에 가로로, 머리줄은 왼쪽 칸, 나머지는 오른쪽 칸 */
  const of = (types) => nodes.filter((_, i) => types.includes(site.sections[i].type));
  const body = rail ? nodes.filter((_, i) => !['notice', 'header'].includes(site.sections[i].type)) : null;

  return (
    <SiteCtx.Provider value={ctx}>
      <div className={`ws-site${rail ? ' has-rail' : ''}`} style={themeStyle(site.theme)} ref={root} data-theme={site.theme}>
        {rail ? <>{of(['notice'])}<div className="rail-grid">{of(['header'])}<main className="rail-main">{body}</main></div></> : nodes}
        {site.dock && (
          <div className="dock">
            <a className="btn b-line" href={`tel:${site.business.phone}`} onClick={(e) => { e.preventDefault(); ctx.go({ action: 'call' }); }}><Icon name="phone" size={18} />전화</a>
            <button type="button" className="btn b-fill" onClick={() => ctx.go({ action: 'inquiry' })}><Icon name="chat" size={18} />{WORD[site.industry] === '진료' ? '예약 문의' : '상담 신청'}</button>
          </div>
        )}
      </div>
    </SiteCtx.Provider>
  );
}

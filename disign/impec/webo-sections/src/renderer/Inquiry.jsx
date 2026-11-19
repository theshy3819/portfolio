import { useState } from 'react';
import { useSite, cx, isClosed, closedOn, fmtDate, dateKey } from './lib.js';
import { Icon } from './ui.jsx';

/* 문의·예약 요청 폼. 확정 예약·결제는 하지 않는다. 보내기는 시연용이라 어디로도 보내지 않는다.
   민감정보 동의는 청사진이 켰을 때만, 희망 항목이나 내용이 들어가면 펼쳐져 필수가 된다. */
export function Inquiry({ id, variant, props }) {
  const { business, picks, pick, word } = useSite();
  const [f, setF] = useState({ name: '', phone: '', date: '', msg: '', agree: false, sensitive: false });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const d = f.date ? new Date(f.date + 'T00:00') : null;
  const dateWarn = d && isClosed(business, d) ? `${fmtDate(d)}은 ${closedOn(business, d)?.label ?? '정기 휴' + (word === '진료' ? '진' : '무')}입니다. 다른 날을 골라 주세요.` : '';
  const needSensitive = props.sensitiveConsent && (picks.length > 0 || f.msg.trim().length > 0);

  const submit = (e) => {
    e.preventDefault();
    const x = {};
    if (!f.name.trim()) x.name = '이름을 적어 주세요';
    if (!/^0\d{1,2}-?\d{3,4}-?\d{4}$/.test(f.phone.trim())) x.phone = '연락받을 번호를 010-0000-0000 처럼 적어 주세요';
    if (dateWarn) x.date = dateWarn;
    if (!f.agree) x.agree = '개인정보 수집·이용에 동의해 주세요';
    if (needSensitive && !f.sensitive) x.sensitive = '민감정보 처리에 따로 동의해 주세요';
    setErr(x);
    if (!Object.keys(x).length) setDone(true);
  };

  const intro = (
    <div className="r-intro">
      <h2 id={`${id}-t`}>{props.title}</h2>
      {props.desc && <p className="sec-desc">{props.desc}</p>}
      <p className="r-call"><Icon name="phone" size={18} />급하시면 <a href={`tel:${business.phone}`}>{business.phone}</a></p>
    </div>
  );

  if (done) {
    return (
      <section className="sec reserve" aria-labelledby={`${id}-t`}>
        <div className="in">
          <div className="done" role="status">
            <span className="done-ic"><Icon name="check" size={28} /></span>
            <h2 id={`${id}-t`}>보냈습니다</h2>
            <p>{props.doneMessage}</p>
            <button type="button" className="btn b-line" onClick={() => { setDone(false); setF({ ...f, msg: '' }); }}>하나 더 남기기</button>
          </div>
        </div>
      </section>
    );
  }

  const today = dateKey(new Date());
  const Err = ({ k }) => err[k] ? <p className="f-err" id={`${id}-${k}-e`}><Icon name="info" size={16} />{err[k]}</p> : null;
  return (
    <section className={cx('sec reserve', `reserve-${variant}`)} aria-labelledby={`${id}-t`}>
      <div className="in r-grid">
        {intro}
        <form className="r-form" onSubmit={submit} noValidate>
          <div className="f-row2">
            <label className="f"><span>이름</span>
              <input value={f.name} onChange={set('name')} autoComplete="name" aria-invalid={!!err.name} aria-describedby={err.name ? `${id}-name-e` : undefined} />
              <Err k="name" /></label>
            <label className="f"><span>연락처</span>
              <input value={f.phone} onChange={set('phone')} inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" aria-invalid={!!err.phone} aria-describedby={err.phone ? `${id}-phone-e` : undefined} />
              <Err k="phone" /></label>
          </div>
          {props.fields.date && (
            <label className="f"><span>희망 날짜 <em>선택</em></span>
              <input type="date" min={today} value={f.date} onChange={set('date')} aria-invalid={!!dateWarn} />
              {dateWarn ? <p className="f-err"><Icon name="cal" size={16} />{dateWarn}</p> : null}</label>
          )}
          {props.fields.picks && business.offerings.length > 0 && (
            <fieldset className="f"><legend>희망 항목 <em>선택</em></legend>
              <div className="picks">
                {business.offerings.map((o) => (
                  <button key={o.id} type="button" className="pick" aria-pressed={picks.includes(o.id)} onClick={() => pick(o.id)}>
                    {picks.includes(o.id) && <Icon name="check" size={16} />}{o.name}
                  </button>
                ))}
              </div>
            </fieldset>
          )}
          {props.fields.message && (
            <label className="f"><span>{props.fields.message.label} <em>선택</em></span>
              <textarea rows={4} value={f.msg} onChange={set('msg')} placeholder={props.fields.message.placeholder} /></label>
          )}
          <div className="consents">
            <label className="ck"><input type="checkbox" checked={f.agree} onChange={set('agree')} />
              <span><strong>[필수]</strong> 개인정보 수집·이용 동의 — 이름·연락처를 연락 목적으로만 쓰고 상담 뒤 지웁니다</span></label>
            <Err k="agree" />
            {needSensitive && (
              <>
                <label className="ck"><input type="checkbox" checked={f.sensitive} onChange={set('sensitive')} />
                  <span><strong>[필수]</strong> 민감정보 처리 동의 — 고르신 항목과 적은 내용에 {word === '진료' ? '건강' : '사건'} 정보가 담길 수 있어 따로 여쭙니다</span></label>
                <Err k="sensitive" />
              </>
            )}
          </div>
          <button type="submit" className="btn b-fill f-submit">{props.submitLabel}</button>
        </form>
      </div>
    </section>
  );
}

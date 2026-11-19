import { createContext, useContext } from 'react';

/* 섹션들이 함께 쓰는 값: 매장 정보, 버튼 동작, 문의 폼에 담긴 항목. */
export const SiteCtx = createContext(null);
export const useSite = () => useContext(SiteCtx);

export const WD = '일월화수목금토';
const pad = (n) => String(n).padStart(2, '0');
export const dateKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const fmtDate = (d) => `${d.getMonth() + 1}월 ${d.getDate()}일(${WD[d.getDay()]})`;
const mins = (t) => { const [h, m] = t.split(':'); return +h * 60 + +m; };

export const dayOf = (b, wd) => b.hours.find((h) => h.wd === wd);
export const closedOn = (b, d) => b.closedDates.find((c) => c.date === dateKey(d));
export const isClosed = (b, d) => !dayOf(b, d.getDay())?.open || !!closedOn(b, d);

/** 월요일부터 일요일 순서(손님이 읽는 순서) */
export const weekRows = (b) => [1, 2, 3, 4, 5, 6, 0].map((wd) => dayOf(b, wd));

/** 지금 영업·진료 상태: before · on · lunch · done · off */
export function todayState(b, now = new Date(), word = '영업') {
  const h = dayOf(b, now.getDay());
  const hol = closedOn(b, now);
  const m = now.getHours() * 60 + now.getMinutes();
  let s, label, next = '';
  const hoursText = h?.open && !hol ? `${h.open}~${h.close}` : hol ? `${hol.label} 휴무` : '휴무';
  if (!h?.open || hol) { s = 'off'; label = `오늘 휴${word === '진료' ? '진' : '무'}`; }
  else if (m < mins(h.open)) { s = 'before'; label = `${word} 전`; next = `오늘 ${h.open}부터 ${word}합니다`; }
  else if (m >= mins(h.close)) { s = 'done'; label = `${word} 마감`; }
  else if (h.lunch && b.lunch && m >= mins(b.lunch[0]) && m < mins(b.lunch[1])) { s = 'lunch'; label = '점심시간'; next = `${b.lunch[1]}부터 다시 ${word}합니다`; }
  else { s = 'on'; label = `${word} 중`; next = `오늘 ${h.close}까지 ${word}합니다`; }
  if (s === 'off' || s === 'done') {
    for (let i = 1; i < 15; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      if (!isClosed(b, d)) { next = `다음 ${word} ${fmtDate(d)} ${dayOf(b, d.getDay()).open}부터`; break; }
    }
  }
  return { s, label, next, hoursText };
}

/** 오늘부터 다가오는 휴무일 n개(정기 휴무 제외, 지정 휴무만) */
export function upcomingClosed(b, n = 3, now = new Date()) {
  const today = dateKey(now);
  return b.closedDates.filter((c) => c.date >= today).sort((a, z) => a.date.localeCompare(z.date)).slice(0, n)
    .map((c) => { const [y, mo, d] = c.date.split('-'); return { ...c, text: fmtDate(new Date(+y, +mo - 1, +d)) }; });
}

export const cx = (...a) => a.filter(Boolean).join(' ');

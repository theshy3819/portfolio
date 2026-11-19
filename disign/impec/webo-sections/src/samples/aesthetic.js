/* 피부관리실 예시. 매장 값은 WebO 목업2 소담결 스킨라운지(시연용 가상 매장) 그대로. 금액은 확정 전 값(안). */
const business = {
  name: '소담결 스킨라운지',
  kind: '예약제 1인 피부관리실',
  phone: '062-000-0123',
  address: '광주광역시 광산구 시연대로 12, 2층',
  addressNote: '건물 뒤 주차 2대',
  hours: [
    { wd: 0, open: null, close: null }, { wd: 1, open: null, close: null },
    { wd: 2, open: '10:00', close: '20:00' }, { wd: 3, open: '10:00', close: '20:00' },
    { wd: 4, open: '10:00', close: '20:00' }, { wd: 5, open: '10:00', close: '20:00' },
    { wd: 6, open: '10:00', close: '17:00' }
  ],
  closedDates: [{ date: '2026-10-10', label: '매장 휴무' }],
  offerings: [
    { id: 'svc_01', name: '기본 페이셜 케어', time: '60분', price: '60,000원', desc: '클렌징부터 보습까지 기본에 충실한 얼굴 관리', badge: '처음 오셨다면' },
    { id: 'svc_02', name: '수분 집중 케어', time: '70분', price: '75,000원', desc: '건조한 계절, 촉촉함을 채우는 보습 관리', badge: '대표' },
    { id: 'svc_03', name: '민감 피부 순한 케어', time: '60분', price: '70,000원', desc: '자극을 줄인 순한 제품으로 편안하게' },
    { id: 'svc_04', name: '각질 정돈 케어', time: '50분', price: '55,000원', desc: '거칠어진 피부 결을 부드럽게 정돈' },
    { id: 'svc_05', name: '아로마 등 관리', time: '50분', price: '50,000원', desc: '은은한 향과 함께 뭉친 등을 풀어 드리는 관리' },
    { id: 'svc_06', name: '웨딩 케어 4회 프로그램', time: '4주 · 회당 70분', price: '260,000원', desc: '예식 전 4주 동안 주 1회 관리' }
  ],
  people: [],
  registration: '시연용 가상 매장 · 사업자 정보 자리'
};

const shared = {
  about: {
    title: '한 번에 한 분만 모십니다',
    body: '예약하신 시간에는 관리실을 한 분께만 엽니다. 기다림 없이 조용한 방에서, 오늘 피부 상태를 먼저 살피고 관리 순서를 정합니다.',
    facts: ['예약제 1인 관리', '관리 전 피부 상태 상담', '사용 제품 성분표 비치']
  },
  faq: [
    { q: '처음인데 어떤 관리를 받아야 할까요?', a: '처음 오시면 기본 페이셜 케어를 권해 드립니다. 관리 전에 피부 상태를 보고 순서를 함께 정합니다.' },
    { q: '예약을 바꾸거나 취소하려면요?', a: '방문 하루 전까지 전화로 알려 주세요. 당일 변경은 다음 손님 예약 때문에 어려울 수 있습니다.' },
    { q: '주차할 수 있나요?', a: '건물 뒤편에 두 대까지 세울 수 있습니다. 자리가 없으면 길 건너 공영주차장을 이용해 주세요.' }
  ],
  steps: [
    { title: '상담 요청', body: '원하는 날짜와 관리를 남겨 주시면 확인 후 연락드립니다.' },
    { title: '예약 확정', body: '가능한 시간을 전화나 문자로 맞춰 확정합니다.' },
    { title: '방문과 관리', body: '피부 상태를 먼저 보고, 순서를 정한 뒤 관리합니다.' }
  ],
  inquiry: {
    title: '상담 요청',
    desc: '남겨 주신 내용을 보고 영업시간 안에 연락드립니다. 아직 예약이 확정된 것은 아닙니다.',
    fields: { date: true, picks: true, message: { label: '남길 말', placeholder: '피부 고민이나 원하는 시간대를 적어 주세요' } },
    sensitiveConsent: false,
    submitLabel: '상담 요청 보내기',
    doneMessage: '상담 요청을 받았습니다. 영업시간 안에 전화나 문자로 연락드릴게요.'
  },
  gallery: [
    { image: { hint: '창가 햇살이 드는 관리실' }, caption: '햇살이 드는 관리실' },
    { image: { hint: '원목 접수대와 작은 화분' }, caption: '입구 접수대' },
    { image: { hint: '개어 둔 수건과 제품 선반' }, caption: '매번 새로 준비하는 수건' },
    { image: { hint: '복도 끝 창가 의자, 가로로 긴 사진' }, caption: '관리 뒤 쉬어 가는 창가' }
  ],
  location: [
    { label: '대중교통', text: '시연대로 정류장에서 내려 50m, 약국 건물 2층' },
    { label: '주차', text: '건물 뒤 2대. 만차면 길 건너 공영주차장' }
  ]
};

export const aestheticK1 = {
  version: 1, industry: 'aesthetic', layout: 'k1', theme: 'clearWater', business, dock: true,
  sections: [
    { id: 'notice', type: 'notice', variant: 'bar', props: { text: '10월 10일(토)은 매장 사정으로 쉽니다', tone: 'closed' } },
    { id: 'head', type: 'header', variant: 'rail', props: {
      links: [{ label: '소개', to: 'about' }, { label: '관리', to: 'programs' }, { label: '공간', to: 'space' }, { label: '이용 안내', to: 'guide' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '상담 요청', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'split', props: {
      title: '조용한 방에서, 오늘 피부에 맞게',
      sub: '예약하신 시간엔 한 분만 모시는 1인 피부관리실입니다.',
      images: [{ hint: '창가 햇살이 드는 관리실, 흰 침구의 관리 침대' }],
      cta: [{ label: '상담 요청', action: 'inquiry', style: 'fill' }, { label: '관리 보기', action: 'section', to: 'programs', style: 'line' }] } },
    { id: 'about', type: 'about', variant: 'facts', props: shared.about },
    { id: 'programs', type: 'offerings', variant: 'list', props: { title: '관리 프로그램', desc: '시간과 금액을 함께 적었습니다.', note: '금액은 부가세 포함입니다.' } },
    { id: 'space', type: 'gallery', variant: 'mosaic', props: { title: '공간', items: shared.gallery } },
    { id: 'guide', type: 'steps', variant: 'list', props: { title: '처음 오시는 분께', items: shared.steps, note: '급하시면 전화로 바로 여쭤 주세요.' } },
    { id: 'faq', type: 'faq', variant: 'accordion', props: { title: '자주 묻는 질문', items: shared.faq } },
    { id: 'reserve', type: 'inquiry', variant: 'form', props: shared.inquiry },
    { id: 'visit', type: 'location', variant: 'stack', props: { title: '오시는 길', directions: shared.location } },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: [] } }
  ]
};

export const aestheticK2 = {
  version: 1, industry: 'aesthetic', layout: 'k2', theme: 'roseMosaic', business, dock: true,
  sections: [
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '관리', to: 'programs' }, { label: '공간', to: 'space' }, { label: '이용 안내', to: 'guide' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '상담 요청', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'mosaic', props: {
      title: '결을 고르는 시간',
      sub: '한 분만 모시는 조용한 관리실에서 오늘 피부 결을 천천히 고릅니다.',
      images: [{ hint: '연분홍 담요를 개어 둔 관리 침대 모서리' }, { hint: '세면대와 둥근 거울' }, { hint: '창가로 드는 오후 빛' }],
      cta: [{ label: '상담 요청', action: 'inquiry', style: 'fill' }, { label: '전화하기', action: 'call', style: 'line' }] } },
    { id: 'about', type: 'about', variant: 'facts', props: shared.about },
    { id: 'programs', type: 'offerings', variant: 'board', props: {
      title: '관리 메뉴', note: '금액은 부가세 포함입니다.',
      groups: [{ name: '얼굴 관리', ids: ['svc_01', 'svc_02', 'svc_03', 'svc_04'] }, { name: '몸 관리', ids: ['svc_05'] }, { name: '기간 프로그램', ids: ['svc_06'] }] } },
    { id: 'space', type: 'gallery', variant: 'mosaic', props: { title: '공간', desc: '관리실은 하나, 쉬어 가는 창가가 하나 있습니다.', items: shared.gallery } },
    { id: 'guide', type: 'steps', variant: 'columns', props: { title: '이렇게 이용해요', items: shared.steps } },
    { id: 'faq', type: 'faq', variant: 'accordion', props: { title: '자주 묻는 질문', items: shared.faq } },
    { id: 'reserve', type: 'inquiry', variant: 'split', props: shared.inquiry },
    { id: 'visit', type: 'location', variant: 'split', props: { title: '오시는 길', directions: shared.location } },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: [] } }
  ]
};

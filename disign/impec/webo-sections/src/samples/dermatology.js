/* 피부과 의원 예시. 값은 WebO 목업2 해담결피부과의원(시연용 가상 의원) 그대로. 진료 항목은 이름만(정보 칸 모드). */
const business = {
  name: '해담결피부과의원',
  kind: '피부과 의원',
  phone: '062-000-0456',
  address: '광주광역시 광산구 시연대로 34, 3층',
  addressNote: '건물 지하 주차장 1시간 등록',
  hours: [
    { wd: 0, open: null, close: null },
    { wd: 1, open: '09:30', close: '18:30', lunch: true }, { wd: 2, open: '09:30', close: '18:30', lunch: true },
    { wd: 3, open: '09:30', close: '13:00' },
    { wd: 4, open: '09:30', close: '18:30', lunch: true }, { wd: 5, open: '09:30', close: '18:30', lunch: true },
    { wd: 6, open: '09:30', close: '14:00' }
  ],
  lunch: ['13:00', '14:00'],
  closedDates: [{ date: '2026-10-03', label: '개천절' }, { date: '2026-10-09', label: '한글날' }, { date: '2026-12-25', label: '성탄절' }],
  offerings: [
    { id: 'd01', name: '일반 피부 진료' }, { id: 'd02', name: '여드름' }, { id: 'd03', name: '아토피·습진' },
    { id: 'd04', name: '두드러기·가려움' }, { id: 'd05', name: '사마귀·티눈' }, { id: 'd06', name: '색소 진료' },
    { id: 'd07', name: '피부 레이저 진료' }, { id: 'd08', name: '두피·탈모 진료' }
  ],
  people: [
    { id: 'dr_01', name: '김해담', role: '대표원장 · 피부과 전문의', lines: ['○○대학교 의과대학 졸업', '○○대학교병원 피부과 전공의 수료', '대한피부과학회 정회원'] }
  ],
  registration: '시연용 가상 의원 · 요양기관 정보 자리'
};

const inquiry = {
  title: '진료 예약 문의',
  desc: '남겨 주시면 진료시간 안에 전화로 가능한 시간을 안내해 드립니다. 문의만으로 예약이 확정되지는 않습니다.',
  fields: { date: true, picks: true, message: null },
  sensitiveConsent: true,
  submitLabel: '문의 보내기',
  doneMessage: '문의를 받았습니다. 진료시간 안에 전화로 연락드리겠습니다.'
};
const directions = [
  { label: '버스', text: '시연대로 정류장 하차 후 100m, 은행 건물 3층' },
  { label: '주차', text: '건물 지하 주차장. 진료 후 접수대에서 1시간 등록' }
];

export const dermatologyC1 = {
  version: 1, industry: 'dermatology', layout: 'c1', theme: 'yellowSign', business, dock: true,
  sections: [
    { id: 'notice', type: 'notice', variant: 'bar', props: { text: '10월 3일(토) 개천절, 10월 9일(금) 한글날은 휴진합니다', tone: 'closed' } },
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '진료시간', to: 'hours' }, { label: '진료 항목', to: 'depts' }, { label: '의료진', to: 'doctor' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '예약 문의', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'sign', props: {
      title: '', sub: '피부과 전문의 진료',
      images: [{ hint: '밝은 복도 끝 유리 자동문과 병원 입구' }],
      cta: [{ label: '전화하기', action: 'call', style: 'fill' }, { label: '예약 문의', action: 'inquiry', style: 'line' }] } },
    { id: 'hours', type: 'hours', variant: 'board', props: { title: '진료시간', note: '접수는 진료 마감 30분 전까지 받습니다.' } },
    { id: 'depts', type: 'offerings', variant: 'chips', props: { title: '진료 항목', desc: '항목을 누르면 예약 문의에 담깁니다.' } },
    { id: 'doctor', type: 'people', variant: 'text', props: { title: '의료진' } },
    { id: 'visit', type: 'location', variant: 'split', props: { title: '오시는 길', directions } },
    { id: 'reserve', type: 'inquiry', variant: 'split', props: inquiry },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: [] } }
  ]
};

export const dermatologyC2 = {
  version: 1, industry: 'dermatology', layout: 'c2', theme: 'facilityWalk', business, dock: true,
  sections: [
    { id: 'notice', type: 'notice', variant: 'bar', props: { text: '10월 3일(토) 개천절, 10월 9일(금) 한글날은 휴진합니다', tone: 'closed' } },
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '둘러보기', to: 'facility' }, { label: '진료 항목', to: 'depts' }, { label: '진료시간', to: 'hours' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '예약 문의', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'cover', props: {
      title: '', sub: '피부과 전문의 진료 · 시연대로 34, 3층',
      images: [{ hint: '3층 복도 끝 유리문 너머 원목 접수대' }],
      cta: [{ label: '예약 문의', action: 'inquiry', style: 'fill' }, { label: '전화하기', action: 'call', style: 'line' }] } },
    { id: 'facility', type: 'gallery', variant: 'walk', props: {
      title: '처음 오시면 이렇게 들어오세요',
      items: [
        { image: { hint: '엘리베이터에서 내리면 보이는 유리문' }, caption: '3층 엘리베이터 앞 유리문' },
        { image: { hint: '원목 접수대와 대기 의자' }, caption: '접수대에서 이름과 연락처 확인' },
        { image: { hint: '창가 대기실 벤치' }, caption: '창가 대기실' },
        { image: { hint: '밝은 진료실 책상과 의자' }, caption: '진료실' }
      ] } },
    { id: 'depts', type: 'offerings', variant: 'chips', props: { title: '진료 항목', desc: '항목을 누르면 예약 문의에 담깁니다.' } },
    { id: 'doctor', type: 'people', variant: 'text', props: { title: '의료진' } },
    { id: 'hours', type: 'hours', variant: 'table', props: { title: '진료시간', note: '점심시간 13:00~14:00 · 수·토는 점심시간 없이 진료' } },
    { id: 'visit', type: 'location', variant: 'stack', props: { title: '오시는 길', directions } },
    { id: 'reserve', type: 'inquiry', variant: 'form', props: inquiry },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: [] } }
  ]
};

/* C3 방문 동선: 처음 오는 환자에게 주차부터 수납까지 순서를 보여 준다. 단계 문구는 시연용으로 쓴 예시다. */
export const dermatologyC3 = {
  version: 1, industry: 'dermatology', layout: 'c3', theme: 'clinicPath', business, dock: true,
  sections: [
    { id: 'notice', type: 'notice', variant: 'bar', props: { text: '10월 3일(토) 개천절, 10월 9일(금) 한글날은 휴진합니다', tone: 'closed' } },
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '방문 순서', to: 'first' }, { label: '진료시간', to: 'hours' }, { label: '진료 항목', to: 'depts' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '예약 문의', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'track', props: {
      title: '처음 오시는 날, 순서대로 안내해 드려요',
      sub: '주차부터 수납까지 여섯 단계입니다. 신분증만 챙겨 오세요.',
      images: [],
      cta: [{ label: '전화하기', action: 'call', style: 'fill' }, { label: '예약 문의', action: 'inquiry', style: 'line' }] } },
    { id: 'first', type: 'steps', variant: 'path', props: {
      title: '도착부터 수납까지',
      desc: '단계마다 어디로 가서 무엇을 하는지 적었습니다.',
      items: [
        { short: '주차', title: '지하 주차장에 세워 주세요', place: '건물 지하 1·2층', body: '진료가 끝나면 접수대에서 주차 1시간을 등록해 드립니다.', image: { hint: '건물 지하 주차장 입구와 엘리베이터 안내판' } },
        { short: '3층', title: '엘리베이터로 3층', place: '3층 엘리베이터 앞', body: '내리면 오른쪽 유리문이 해담결피부과의원입니다.', image: { hint: '3층 복도 끝 유리 자동문' } },
        { short: '접수', title: '처음 오셨다고 말씀해 주세요', place: '원목 접수대', body: '간단한 문진표를 드립니다. 궁금한 점도 여기서 여쭤 보세요.', bring: ['신분증 또는 모바일 건강보험증', '복용 중인 약 이름이나 사진'], image: { hint: '원목 접수대와 문진표' } },
        { short: '대기', title: '이름을 부르면 들어오세요', place: '창가 대기실', body: '대기실 화면과 목소리로 순서를 알려 드립니다.', image: { hint: '창가 대기실 벤치' } },
        { short: '진료', title: '원장이 직접 봅니다', place: '진료실', body: '피부 상태를 보고 필요한 검사나 처방을 설명드립니다.', image: { hint: '밝은 진료실 책상과 의자' } },
        { short: '수납', title: '수납하고 처방전 받기', place: '원목 접수대', body: '진료비를 내고, 처방전이 있으면 받아 가세요. 주차 등록도 여기서 합니다.' }
      ] } },
    { id: 'hours', type: 'hours', variant: 'table', props: { title: '진료시간', note: '접수는 진료 마감 30분 전까지 받습니다.' } },
    { id: 'depts', type: 'offerings', variant: 'chips', props: { title: '진료 항목', desc: '항목을 누르면 예약 문의에 담깁니다.' } },
    { id: 'doctor', type: 'people', variant: 'text', props: { title: '의료진' } },
    { id: 'faq', type: 'faq', variant: 'accordion', props: { title: '처음 오시는 분들이 묻는 것', items: [
      { q: '예약 없이 가도 되나요?', a: '예약 없이 오셔도 접수 순서대로 진료합니다. 원하시는 시간이 있으면 예약 문의를 남겨 주세요.' },
      { q: '신분증이 꼭 있어야 하나요?', a: '건강보험 본인 확인을 위해 신분증이나 모바일 건강보험증이 필요합니다.' },
      { q: '진료는 얼마나 걸리나요?', a: '진료 내용에 따라 다릅니다. 접수할 때 대략 안내해 드립니다.' }
    ] } },
    { id: 'visit', type: 'location', variant: 'split', props: { title: '오시는 길', directions } },
    { id: 'reserve', type: 'inquiry', variant: 'form', props: inquiry },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: [] } }
  ]
};

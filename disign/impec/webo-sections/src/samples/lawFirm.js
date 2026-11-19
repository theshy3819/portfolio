/* 법무법인 예시. 법무법인 서담과 구성원은 모두 시연용 가상 인물이다. 학력·경력은 자리 표시(○○). */
const business = {
  name: '법무법인 서담',
  kind: '법무법인',
  phone: '062-000-0789',
  address: '광주광역시 동구 시연법원로 56, 7층',
  addressNote: '법원 정문 건너편 · 건물 주차 가능',
  email: 'contact@seodam.example',
  hours: [
    { wd: 0, open: null, close: null },
    { wd: 1, open: '09:00', close: '18:00', lunch: true }, { wd: 2, open: '09:00', close: '18:00', lunch: true },
    { wd: 3, open: '09:00', close: '18:00', lunch: true }, { wd: 4, open: '09:00', close: '18:00', lunch: true },
    { wd: 5, open: '09:00', close: '18:00', lunch: true },
    { wd: 6, open: null, close: null }
  ],
  lunch: ['12:00', '13:00'],
  closedDates: [],
  offerings: [
    { id: 'civil', name: '민사 · 손해배상', desc: '계약 분쟁, 대여금, 손해배상 청구와 방어' },
    { id: 'criminal', name: '형사', desc: '수사 단계 조력부터 공판 변론까지' },
    { id: 'family', name: '가사 · 이혼', desc: '이혼, 양육권, 재산분할, 상속 분쟁' },
    { id: 'realestate', name: '부동산 · 임대차', desc: '보증금 반환, 명도, 매매 계약 분쟁' },
    { id: 'corporate', name: '기업 자문', desc: '계약서 검토, 노무·인사 분쟁 예방' },
    { id: 'admin', name: '행정', desc: '영업정지·인허가 처분에 대한 불복' }
  ],
  people: [
    { id: 'lw_01', name: '한서윤', role: '대표변호사', lines: ['○○대학교 법학과 졸업', '사법연수원 ○○기 수료', '前 ○○지방법원 판사'], photo: { hint: '정면 상반신 인물 사진' } },
    { id: 'lw_02', name: '문도현', role: '변호사', lines: ['○○대학교 법학전문대학원 졸업', '변호사시험 ○회 합격', '前 ○○법무법인 소속'], photo: { hint: '정면 상반신 인물 사진' } },
    { id: 'lw_03', name: '오지안', role: '변호사', lines: ['○○대학교 법학전문대학원 졸업', '변호사시험 ○회 합격', '대한변호사협회 등록'], photo: { hint: '정면 상반신 인물 사진' } }
  ],
  registration: '시연용 가상 법무법인 · 광고책임변호사 표기 자리'
};

const steps = [
  { title: '상담 신청', body: '분야와 간단한 내용을 남겨 주시면 담당 변호사가 배정됩니다.' },
  { title: '일정 확정', body: '영업일 하루 안에 전화로 상담 일정을 정합니다.' },
  { title: '변호사 상담', body: '자료를 함께 보고 가능한 절차와 예상 기간을 설명드립니다.' },
  { title: '수임 결정', body: '비용과 범위를 서면으로 안내드리고, 결정은 충분히 생각하신 뒤에 합니다.' }
];
const faq = [
  { q: '상담 비용이 있나요?', a: '첫 상담 비용과 방식(방문·전화)은 사건 분야에 따라 다릅니다. 상담 일정을 정할 때 미리 안내드립니다.' },
  { q: '어떤 자료를 준비하면 되나요?', a: '계약서, 문자·메일 기록, 받은 서류처럼 사건과 관련된 자료를 가져오시면 상담이 빨라집니다.' },
  { q: '상담 내용은 비밀이 지켜지나요?', a: '변호사는 법에 따라 상담 내용을 비밀로 지킬 의무가 있습니다. 수임하지 않더라도 같습니다.' }
];
const inquiry = {
  title: '상담 신청',
  desc: '분야와 연락처만 남기셔도 됩니다. 사건 내용은 상담 때 직접 들려주세요.',
  fields: { date: true, picks: true, message: { label: '간단한 내용', placeholder: '예: 임대차 보증금을 돌려받지 못하고 있습니다' } },
  sensitiveConsent: true,
  submitLabel: '상담 신청하기',
  doneMessage: '상담 신청을 받았습니다. 영업일 하루 안에 전화로 일정을 여쭙겠습니다.'
};
const directions = [
  { label: '지하철', text: '시연법원역 2번 출구에서 200m' },
  { label: '주차', text: '건물 지하 주차장, 상담 시 2시간 등록' }
];

export const lawFirmL1 = {
  version: 1, industry: 'lawFirm', layout: 'l1', theme: 'inkNavy', business, dock: true,
  sections: [
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '업무 분야', to: 'areas' }, { label: '구성원', to: 'members' }, { label: '상담 절차', to: 'process' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '상담 신청', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'statement', props: {
      title: '사건의 처음부터 끝까지, 같은 변호사가 봅니다',
      sub: '상담한 변호사가 사건을 직접 맡고, 진행 상황을 단계마다 알려 드립니다.',
      images: [],
      facts: [{ label: '구성원', value: '변호사 3명' }, { label: '위치', value: '법원 정문 건너편' }, { label: '상담', value: '평일 09:00~18:00' }],
      cta: [{ label: '상담 신청', action: 'inquiry', style: 'fill' }, { label: '전화 상담', action: 'call', style: 'line' }] } },
    { id: 'areas', type: 'offerings', variant: 'cards', props: { title: '업무 분야', desc: '분야를 누르면 상담 신청에 담깁니다.' } },
    { id: 'members', type: 'people', variant: 'profiles', props: { title: '구성원' } },
    { id: 'process', type: 'steps', variant: 'columns', props: { title: '상담은 이렇게 진행됩니다', items: steps } },
    { id: 'faq', type: 'faq', variant: 'accordion', props: { title: '자주 묻는 질문', items: faq } },
    { id: 'consult', type: 'inquiry', variant: 'split', props: inquiry },
    { id: 'visit', type: 'location', variant: 'split', props: { title: '오시는 길', directions } },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: ['광고책임변호사: 한서윤'] } }
  ]
};

export const lawFirmL2 = {
  version: 1, industry: 'lawFirm', layout: 'l2', theme: 'stonePaper', business, dock: true,
  sections: [
    { id: 'head', type: 'header', variant: 'top', props: {
      links: [{ label: '소개', to: 'about' }, { label: '업무 분야', to: 'areas' }, { label: '구성원', to: 'members' }, { label: '오시는 길', to: 'visit' }],
      cta: { label: '상담 신청', action: 'inquiry', style: 'fill' } } },
    { id: 'hero', type: 'hero', variant: 'split', props: {
      title: '생활 속 법률 문제, 가까이서 함께 풉니다',
      sub: '보증금, 이혼, 계약 분쟁처럼 누구에게나 생길 수 있는 일을 차분히 듣고 절차를 설명드립니다.',
      images: [{ hint: '창가 책장과 상담 테이블이 있는 사무실' }],
      cta: [{ label: '상담 신청', action: 'inquiry', style: 'fill' }, { label: '업무 분야 보기', action: 'section', to: 'areas', style: 'line' }] } },
    { id: 'about', type: 'about', variant: 'split', props: {
      title: '법원 앞 7층, 문을 열어 둔 사무실',
      body: '법무법인 서담은 변호사 세 명이 함께 일하는 사무실입니다. 상담한 변호사가 사건을 직접 맡고, 진행 상황은 단계마다 전화와 문자로 알려 드립니다.',
      facts: [],
      image: { hint: '상담실 테이블 위 서류와 찻잔' } } },
    { id: 'areas', type: 'offerings', variant: 'cards', props: { title: '업무 분야' } },
    { id: 'members', type: 'people', variant: 'text', props: { title: '구성원' } },
    { id: 'process', type: 'steps', variant: 'list', props: { title: '상담 절차', items: steps } },
    { id: 'consult', type: 'inquiry', variant: 'form', props: inquiry },
    { id: 'visit', type: 'location', variant: 'stack', props: { title: '오시는 길', directions } },
    { id: 'foot', type: 'footer', variant: 'simple', props: { lines: ['광고책임변호사: 한서윤'] } }
  ]
};

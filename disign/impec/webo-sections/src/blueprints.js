/* 업종 청사진: 업종마다 쓸 수 있는 섹션·변형·테마와 추천 레이아웃, 문구 규칙.
   AI 는 청사진 안에서만 고른다. 레이아웃은 "추천 출발점"이고 AI 가 순서를 바꾸거나 선택 섹션을 뺄 수 있다.
   금지 표현은 광고 관련 법규를 옮긴 1차 안전망일 뿐 법률 검토를 대신하지 않는다. */

export const BLUEPRINTS = {
  dermatology: {
    id: 'dermatology',
    label: '피부과 의원',
    mode: '정보 칸 모드: 진료 항목은 이름만, 효과·가격·후기를 쓰지 않는다',
    voice: '차분하고 정확하게. 손님이 가장 궁금한 건 "지금 진료하나, 언제 가면 되나". 존댓말 평서문.',
    themes: ['yellowSign', 'facilityWalk', 'clinicPath'],
    required: ['header', 'hero', 'hours', 'offerings', 'location', 'inquiry', 'footer'],
    allow: {
      notice: ['bar'], header: ['top'], hero: ['sign', 'cover', 'split', 'track'], steps: ['path', 'list'],
      hours: ['board', 'table'], offerings: ['chips'], people: ['text', 'profiles'],
      gallery: ['walk', 'mosaic'], location: ['split', 'stack'], faq: ['accordion'],
      inquiry: ['split', 'form'], footer: ['simple']
    },
    layouts: [
      {
        id: 'c1', name: 'C1 노란 안내판', theme: 'yellowSign',
        pitch: '지금 진료 중인지를 첫 화면에 크게. 동네 의원, 처음 찾는 손님이 많은 곳',
        sections: [['notice', 'bar'], ['header', 'top'], ['hero', 'sign'], ['hours', 'board'], ['offerings', 'chips'], ['people', 'text'], ['location', 'split'], ['inquiry', 'split'], ['footer', 'simple']]
      },
      {
        id: 'c2', name: 'C2 시설 둘러보기', theme: 'facilityWalk',
        pitch: '입구부터 시설 사진을 차례로. 새로 연 곳, 시설이 자랑인 곳',
        sections: [['notice', 'bar'], ['header', 'top'], ['hero', 'cover'], ['gallery', 'walk'], ['offerings', 'chips'], ['people', 'text'], ['hours', 'table'], ['location', 'stack'], ['inquiry', 'form'], ['footer', 'simple']]
      },
      {
        id: 'c3', name: 'C3 방문 동선', theme: 'clinicPath',
        pitch: '주차부터 수납까지 여섯 단계를 동선 띠로. 처음 오는 환자가 많은 곳',
        sections: [['notice', 'bar'], ['header', 'top'], ['hero', 'track'], ['steps', 'path'], ['hours', 'table'], ['offerings', 'chips'], ['people', 'text'], ['faq', 'accordion'], ['location', 'split'], ['inquiry', 'form'], ['footer', 'simple']]
      }
    ],
    forbidden: [
      { pattern: '완치|100\\s*%|부작용\\s*(없|zero|제로)|통증\\s*없', level: 'error', why: '의료법 제56조: 치료 효과를 보장하거나 부작용을 숨기는 표현' },
      { pattern: '최고|최초|유일|1위|넘버\\s*원', level: 'error', why: '의료법 제56조: 다른 의료기관과 비교하는 표현' },
      { pattern: '보장|확실한\\s*효과|효과\\s*만점', level: 'error', why: '의료법 제56조: 효과 보장' },
      { pattern: '전후|비포|애프터|후기|체험담', level: 'error', why: '의료법 제56조: 치료경험담·전후 사진' },
      { pattern: '할인|이벤트|특가|무료\\s*(진료|시술|체험|상담)', level: 'warning', why: '비급여 가격 할인 광고는 사전 확인 필요' }
    ]
  },

  aesthetic: {
    id: 'aesthetic',
    label: '피부관리실(에스테틱)',
    mode: '미용업: 의료 용어를 쓰지 않는다. 프로그램에 시간과 가격을 함께 적는다',
    voice: '다정하고 편안하게. 처음 온 손님이 무엇을 받고 얼마인지 바로 알게. 존댓말.',
    themes: ['clearWater', 'roseMosaic'],
    required: ['header', 'hero', 'offerings', 'location', 'inquiry', 'footer'],
    allow: {
      notice: ['bar'], header: ['rail', 'top'], hero: ['split', 'mosaic', 'cover'],
      about: ['facts', 'split'], offerings: ['list', 'board'], gallery: ['mosaic'],
      steps: ['list', 'columns'], faq: ['accordion'], hours: ['table'], people: ['profiles', 'text'],
      inquiry: ['form', 'split'], location: ['stack', 'split'], footer: ['simple']
    },
    layouts: [
      {
        id: 'k1', name: 'K1 맑은 물빛', theme: 'clearWater',
        pitch: 'PC 에서 매장 정보가 늘 옆에 붙은 옆 레일형. 1인 샵, 예약제',
        sections: [['notice', 'bar'], ['header', 'rail'], ['hero', 'split'], ['about', 'facts'], ['offerings', 'list'], ['gallery', 'mosaic'], ['steps', 'list'], ['faq', 'accordion'], ['inquiry', 'form'], ['location', 'stack'], ['footer', 'simple']]
      },
      {
        id: 'k2', name: 'K2 장밋빛 모자이크', theme: 'roseMosaic',
        pitch: '사진 칸과 색 칸으로 짠 표지형. 분위기와 공간이 강점인 곳',
        sections: [['header', 'top'], ['hero', 'mosaic'], ['about', 'facts'], ['offerings', 'board'], ['gallery', 'mosaic'], ['steps', 'columns'], ['faq', 'accordion'], ['inquiry', 'split'], ['location', 'split'], ['footer', 'simple']]
      }
    ],
    forbidden: [
      { pattern: '치료|진료|시술|처방|의료|완치|재생|레이저|주사|필러|보톡스|여드름\\s*압출', level: 'error', why: '공중위생관리법: 피부미용업은 의료행위·의료 광고를 할 수 없음' },
      { pattern: '100\\s*%|최고|1위|유일', level: 'warning', why: '표시광고법: 객관적 근거 없는 최상급 표현' },
      { pattern: '효과\\s*(보장|확실)', level: 'error', why: '표시광고법: 효과 보장' }
    ]
  },

  lawFirm: {
    id: 'lawFirm',
    label: '법무법인',
    mode: '결과를 약속하지 않는다. 업무 분야와 구성원 사실, 상담 절차를 보여 준다',
    voice: '단정하고 신뢰 있게. 과장 없이 사실 위주. 상담 절차와 비용 안내 방식을 분명히. 존댓말.',
    themes: ['inkNavy', 'stonePaper'],
    required: ['header', 'hero', 'offerings', 'people', 'inquiry', 'location', 'footer'],
    allow: {
      notice: ['bar'], header: ['top'], hero: ['statement', 'split'], about: ['split', 'facts'],
      offerings: ['cards'], people: ['profiles', 'text'], steps: ['columns', 'list'], faq: ['accordion'],
      hours: ['table'], inquiry: ['split', 'form'], location: ['split', 'stack'], gallery: ['mosaic'], footer: ['simple']
    },
    layouts: [
      {
        id: 'l1', name: 'L1 먹빛 선언', theme: 'inkNavy',
        pitch: '사진 없이 큰 문장과 사실 줄로 시작. 기업·형사처럼 무게가 필요한 분야',
        sections: [['header', 'top'], ['hero', 'statement'], ['offerings', 'cards'], ['people', 'profiles'], ['steps', 'columns'], ['faq', 'accordion'], ['inquiry', 'split'], ['location', 'split'], ['footer', 'simple']]
      },
      {
        id: 'l2', name: 'L2 석조 한지', theme: 'stonePaper',
        pitch: '사무실 사진과 소개 글로 시작. 가사·부동산처럼 생활 법률, 동네 사무소',
        sections: [['header', 'top'], ['hero', 'split'], ['about', 'split'], ['offerings', 'cards'], ['people', 'text'], ['steps', 'list'], ['inquiry', 'form'], ['location', 'stack'], ['footer', 'simple']]
      }
    ],
    forbidden: [
      { pattern: '승소\\s*(율|률|보장|확률)|무죄\\s*보장|반드시\\s*(승소|이깁)', level: 'error', why: '변호사업무광고규정: 결과를 보장·암시하는 표현' },
      { pattern: '최고|최초|1위|유일|넘버\\s*원', level: 'error', why: '변호사업무광고규정: 다른 변호사와 비교·비방' },
      { pattern: '100\\s*%|무조건', level: 'error', why: '변호사업무광고규정: 객관적 사실이 아닌 과장' },
      { pattern: '(?<!법학)전문(?!\\s*분야\\s*등록|대학원)', level: 'warning', why: '"전문" 표기는 대한변협 전문분야 등록 변호사만. 등록 여부 확인' },
      { pattern: '수임료\\s*(최저|할인)|착수금\\s*(없|0원|무료)', level: 'warning', why: '수임료 광고는 조건 확인 필요' }
    ]
  }
};

/** 레이아웃 추천안을 섹션 뼈대로 펼친다(AI 에게 줄 출발점). */
export function layoutSkeleton(industryId, layoutId) {
  const bp = BLUEPRINTS[industryId];
  const lay = bp.layouts.find((l) => l.id === layoutId) ?? bp.layouts[0];
  return { theme: lay.theme, sections: lay.sections.map(([type, variant]) => ({ type, variant })) };
}

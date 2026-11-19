import { z } from 'zod';
import { imageSlot } from './business.js';

/* 섹션 카탈로그: 업종과 무관한 부품 목록.
   AI 는 여기 있는 type·variant 중에서 고르고 props(문구·사진 칸)만 채운다. HTML·CSS 는 쓰지 않는다.
   사실 값(전화·주소·시간·프로그램·의료진)은 props 에 없다. 렌더러가 business 에서 읽는다. */

const title = z.string().min(1).max(40);
const text = (max) => z.string().max(max);

export const action = z.object({
  label: z.string().min(1).max(16),
  action: z.enum(['inquiry', 'call', 'map', 'section']).describe('inquiry=문의 폼으로, call=전화, map=오시는 길, section=to 로 이동'),
  to: z.string().optional(),
  style: z.enum(['fill', 'line']).default('fill')
});
const actions = z.array(action).min(1).max(2);

export const SECTIONS = {
  notice: {
    label: '공지 띠',
    use: '휴무·이벤트처럼 짧은 알림 한 줄. 페이지 맨 위.',
    variants: { bar: '닫을 수 있는 한 줄 띠' },
    props: z.object({ text: text(60), tone: z.enum(['info', 'closed']).default('info') })
  },
  header: {
    label: '머리줄',
    use: '로고와 섹션 이동. 모든 사이트에 하나.',
    variants: {
      top: '상단 가로 머리줄',
      rail: 'PC 에서 왼쪽 세로 레일(오늘 영업 상태·전화 상시 노출), 좁은 화면은 상단 머리줄'
    },
    props: z.object({
      links: z.array(z.object({ label: z.string().max(8), to: z.string() })).max(6),
      cta: action.optional()
    })
  },
  hero: {
    label: '첫 화면',
    use: '업체 이름과 한 줄 약속, 주 행동 버튼.',
    variants: {
      split: '글 + 큰 사진 한 장. 가장 무난함',
      mosaic: '색 판 + 사진 세 칸 모자이크. 분위기가 중요한 업종',
      sign: '안내판: 지금 영업/진료 중인지와 오늘 시간을 크게. 병의원·방문형',
      cover: '전면 사진 위에 이름과 버튼. 공간이 자랑인 곳',
      statement: '사진 없이 큰 문장과 사실 줄. 전문직',
      track: '방문 동선 띠: 제목 + 오늘 상태 + 첫 번째 steps 섹션의 단계를 가로 정거장으로. 병의원 첫 방문 안내'
    },
    props: z.object({
      title: z.string().max(40).describe('비우면 업체 이름'),
      sub: text(80).optional(),
      images: z.array(imageSlot).max(3).default([]).describe('split·cover·sign=1장, mosaic=3장, statement=0장'),
      facts: z.array(z.object({ label: z.string().max(10), value: z.string().max(30) })).max(4).optional(),
      cta: actions
    })
  },
  about: {
    label: '소개',
    use: '업체가 어떤 곳인지 두세 문장과 사실 줄.',
    variants: { facts: '글 + 체크 목록', split: '글 + 사진 한 장' },
    props: z.object({
      title,
      body: text(300),
      facts: z.array(text(40)).max(5).default([]),
      image: imageSlot.optional()
    })
  },
  offerings: {
    label: '프로그램·진료·업무 분야',
    use: 'business.offerings 를 그린다. ids 로 순서·일부만 고를 수 있다.',
    variants: {
      list: '메뉴판 목록: 이름·설명·시간·가격',
      board: '묶음별 점선 메뉴 보드',
      chips: '이름만 있는 칩. 누르면 문의에 담긴다(병의원 정보 칸 모드)',
      cards: '분야 카드: 이름 + 설명 두 줄(전문직)'
    },
    props: z.object({
      title,
      desc: text(80).optional(),
      note: text(80).optional().describe('가격 안내 등 아래 작은 글'),
      groups: z.array(z.object({ name: z.string().max(12), ids: z.array(z.string()) })).optional().describe('board 에서 묶음'),
      ids: z.array(z.string()).optional()
    })
  },
  people: {
    label: '사람 소개',
    use: 'business.people 을 그린다(원장·관리사·변호사).',
    variants: { text: '사진 없는 글 판', profiles: '사진 칸 + 이름·직함·약력' },
    props: z.object({ title, desc: text(80).optional() })
  },
  gallery: {
    label: '공간 사진',
    use: '매장·시설 사진.',
    variants: { mosaic: '큰 사진 하나 + 작은 사진 둘 + 가로로 긴 사진', walk: '입구부터 번호 매긴 시설 둘러보기' },
    props: z.object({
      title,
      desc: text(80).optional(),
      items: z.array(z.object({ image: imageSlot, caption: text(40) })).min(2).max(6)
    })
  },
  steps: {
    label: '이용 순서',
    use: '처음 온 손님이 따라갈 순서 3~4단계.',
    variants: { list: '세로 번호 목록', columns: '가로 칸', path: '세로 동선: 단계마다 장소·할 일·준비물·사진을 선으로 잇는다' },
    props: z.object({
      title,
      desc: text(80).optional(),
      items: z.array(z.object({
        title: z.string().max(20),
        body: text(80),
        short: z.string().max(4).optional().describe('동선 띠에 쓰는 짧은 이름. 예: 접수'),
        place: z.string().max(20).optional().describe('어디서. 예: 3층 접수대'),
        bring: z.array(text(30)).max(4).optional().describe('이 단계에 필요한 것'),
        image: imageSlot.optional()
      })).min(2).max(6),
      note: text(80).optional()
    })
  },
  faq: {
    label: '자주 묻는 질문',
    use: '열고 닫는 질문 목록.',
    variants: { accordion: '접는 목록' },
    props: z.object({ title, items: z.array(z.object({ q: text(60), a: text(240) })).min(2).max(8) })
  },
  hours: {
    label: '영업·진료 시간',
    use: 'business.hours·lunch·closedDates 를 그린다.',
    variants: { table: '요일 표(오늘 줄 강조)', board: '큰 안내판 표 + 다가오는 휴무일' },
    props: z.object({ title, note: text(80).optional() })
  },
  location: {
    label: '오시는 길',
    use: '주소·교통·주차. 주소 값은 business 에서.',
    variants: { split: '지도 칸 + 안내', stack: '지도 칸 위, 안내 아래' },
    props: z.object({
      title,
      directions: z.array(z.object({ label: z.string().max(8), text: text(80) })).max(4).default([])
    })
  },
  inquiry: {
    label: '문의·예약 요청',
    use: '손님 이름·연락처와 희망 사항을 받는다. 결제·확정 예약은 하지 않는다.',
    variants: { form: '폼 하나', split: '왼쪽 안내 + 오른쪽 폼' },
    props: z.object({
      title,
      desc: text(120).optional(),
      fields: z.object({
        date: z.boolean().default(true),
        picks: z.boolean().default(true).describe('offerings 칩으로 희망 항목 고르기'),
        message: z.object({ label: z.string().max(16), placeholder: text(60) }).nullable().default(null)
      }),
      sensitiveConsent: z.boolean().default(false).describe('건강·사건 정보처럼 민감정보가 담길 때 별도 동의'),
      submitLabel: z.string().max(12),
      doneMessage: text(120)
    })
  },
  footer: {
    label: '바닥글',
    use: '업체 정보·개인정보처리방침. 모든 사이트에 하나.',
    variants: { simple: '한 단' },
    props: z.object({ lines: z.array(text(80)).max(3).default([]) })
  }
};

export const SECTION_TYPES = Object.keys(SECTIONS);

/** { id, type, variant, props } 하나를 type 별로 검사하는 합집합 */
export const sectionNode = z.discriminatedUnion(
  'type',
  SECTION_TYPES.map((type) =>
    z.object({
      id: z.string().regex(/^[a-z0-9-]+$/).describe('페이지 안 이동에 쓰는 이름'),
      type: z.literal(type),
      variant: z.enum(Object.keys(SECTIONS[type].variants)),
      props: SECTIONS[type].props
    })
  )
);

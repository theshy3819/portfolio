import { z } from 'zod';

/* 매장 정보: 사장님이 온보딩에서 준 사실만 담는다. 모든 섹션이 이 한 벌을 읽고,
   AI 는 여기 있는 값을 문구에 옮겨 적지 않는다(전화번호·시간이 두 곳에서 어긋나지 않게). */

export const time = z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/, 'HH:MM');
export const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'YYYY-MM-DD');

/** 사진 자리. src 가 없으면 hint 를 적은 빈 칸으로 그린다(사장님이 나중에 올린다). */
export const imageSlot = z.object({
  hint: z.string().min(2).max(60).describe('이 칸에 들어갈 사진 설명. 예: 창가 햇살이 드는 관리실'),
  src: z.string().optional(),
  alt: z.string().max(120).optional()
});

export const dayHours = z.object({
  wd: z.number().int().min(0).max(6).describe('0=일 … 6=토'),
  open: time.nullable().describe('null 이면 정기 휴무'),
  close: time.nullable(),
  lunch: z.boolean().optional().describe('이 요일에 점심시간이 있는지')
});

export const offering = z.object({
  id: z.string().regex(/^[a-z0-9_]+$/),
  name: z.string().min(1).max(30),
  desc: z.string().max(60).optional(),
  price: z.string().max(20).optional().describe('사장님이 준 값 그대로. 예: 60,000원'),
  time: z.string().max(20).optional(),
  badge: z.string().max(10).optional()
});

export const person = z.object({
  id: z.string().regex(/^[a-z0-9_]+$/),
  name: z.string().min(1).max(20),
  role: z.string().max(30),
  lines: z.array(z.string().max(60)).max(8).describe('학력·경력·자격 등 사실 줄'),
  photo: imageSlot.optional()
});

export const business = z.object({
  name: z.string().min(1).max(30),
  kind: z.string().max(30).describe('업종 표기. 예: 예약제 1인 피부관리실'),
  phone: z.string().max(20),
  address: z.string().max(80),
  addressNote: z.string().max(60).optional().describe('주차·층수 등'),
  email: z.string().max(60).optional(),
  hours: z.array(dayHours).length(7),
  lunch: z.tuple([time, time]).optional(),
  closedDates: z.array(z.object({ date: isoDate, label: z.string().max(20) })).default([]),
  offerings: z.array(offering).max(30).default([]),
  people: z.array(person).max(20).default([]),
  registration: z.string().max(80).optional().describe('사업자·개설 신고 등 푸터 표기')
});

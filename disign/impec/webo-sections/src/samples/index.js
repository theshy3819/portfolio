import { aestheticK1, aestheticK2 } from './aesthetic.js';
import { dermatologyC1, dermatologyC2, dermatologyC3 } from './dermatology.js';
import { lawFirmL1, lawFirmL2 } from './lawFirm.js';

/* 업종 → 레이아웃 id → 예시 사이트. AI 가 내놓는 결과물과 같은 모양이다. */
export const SAMPLES = {
  dermatology: { c1: dermatologyC1, c2: dermatologyC2, c3: dermatologyC3 },
  aesthetic: { k1: aestheticK1, k2: aestheticK2 },
  lawFirm: { l1: lawFirmL1, l2: lawFirmL2 }
};

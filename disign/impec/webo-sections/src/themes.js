/* 손님 사이트 테마: 색·모서리·글자 크기만 담은 토큰 묶음. AI 는 이름만 고른다.
   k1·k2·c1·c2 값은 WebO 목업2(소담결·해담결) 레이아웃 토큰 그대로, l1·l2 는 법무법인용으로 새로 잡았다. */

const serif = '"Noto Serif KR", "Nanum Myeongjo", serif';

export const THEMES = {
  clearWater: {
    label: '맑은 물빛', from: '목업2 K1',
    tokens: {
      bg: '#F3F6F7', surface: '#FFFFFF', panel: '#FFFFFF', text: '#1B2830', sub: '#4B5A63', accent: '#3F5873',
      weak: '#E4EBF0', hi: '#E4EBF0', hiSub: '#3F5873', input: '#7D8B94', line: 'rgba(27,40,48,.12)',
      rBtn: '6px', rPhoto: '4px', rPanel: '6px', rChip: '999px',
      h1: '44px', h1Lh: '56px', h1W: 600, h2: '28px', h2Lh: '38px', h2W: 600, in: '880px', secY: '80px', pad: '32px'
    }
  },
  roseMosaic: {
    label: '장밋빛 모자이크', from: '목업2 K2',
    tokens: {
      bg: '#FFFFFF', surface: '#FFFFFF', panel: '#F1EEEC', text: '#2A2326', sub: '#5E5458', accent: '#95485A',
      weak: '#F6E9EB', hi: '#F6E9EB', hiSub: '#95485A', input: '#8D8286', line: 'rgba(42,35,38,.12)',
      rBtn: '12px', rPhoto: '12px', rPanel: '12px', rChip: '999px',
      h1: '52px', h1Lh: '60px', h1W: 700, h2: '30px', h2Lh: '40px', h2W: 700, in: '1200px', secY: '112px', pad: '40px'
    }
  },
  yellowSign: {
    label: '노란 안내판', from: '목업2 C1',
    tokens: {
      bg: '#FFFFFF', surface: '#FFFFFF', panel: '#F4F4F2', text: '#1F2328', sub: '#4E545C', accent: '#1F2328',
      weak: '#F4F4F2', hi: '#FFF1BF', hiSub: '#6B4A00', input: '#80868E', line: 'rgba(31,35,40,.14)',
      rBtn: '8px', rPhoto: '8px', rPanel: '8px', rChip: '8px',
      h1: '48px', h1Lh: '56px', h1W: 700, h2: '28px', h2Lh: '38px', h2W: 700, in: '1200px', secY: '88px', pad: '32px'
    }
  },
  facilityWalk: {
    label: '시설 둘러보기', from: '목업2 C2',
    tokens: {
      bg: '#FBFAFC', surface: '#FFFFFF', panel: '#F1EEF5', text: '#221D28', sub: '#584F62', accent: '#5B4670',
      weak: '#ECE6F2', hi: '#ECE6F2', hiSub: '#5B4670', input: '#8A8294', line: 'rgba(34,29,40,.13)',
      rBtn: '12px', rPhoto: '16px', rPanel: '16px', rChip: '999px',
      h1: '52px', h1Lh: '60px', h1W: 700, h2: '28px', h2Lh: '38px', h2W: 700, in: '1200px', secY: '104px', pad: '36px'
    }
  },
  clinicPath: {
    label: '청록 동선', from: '피부과 C3',
    tokens: {
      bg: '#FFFFFF', surface: '#FFFFFF', panel: '#F2F6F5', text: '#1E2A2B', sub: '#4A5758', accent: '#1F5E5B',
      weak: '#E3EFEC', hi: '#E3EFEC', hiSub: '#1F5E5B', input: '#7F8C8C', line: 'rgba(30,42,43,.13)',
      rBtn: '10px', rPhoto: '12px', rPanel: '12px', rChip: '999px',
      h1: '52px', h1Lh: '62px', h1W: 700, h2: '30px', h2Lh: '40px', h2W: 700, in: '1200px', secY: '96px', pad: '32px'
    }
  },
  inkNavy: {
    label: '먹빛 남색', from: '법무법인 L1',
    tokens: {
      bg: '#FFFFFF', surface: '#FFFFFF', panel: '#F2F3F6', text: '#141A26', sub: '#495163', accent: '#1C2A4A',
      weak: '#E6EAF2', hi: '#1C2A4A', hiSub: '#C9D2E6', input: '#7D8594', line: 'rgba(20,26,38,.14)',
      rBtn: '4px', rPhoto: '2px', rPanel: '4px', rChip: '4px',
      h1: '50px', h1Lh: '64px', h1W: 700, h2: '30px', h2Lh: '42px', h2W: 700, in: '1120px', secY: '104px', pad: '36px',
      fontHead: serif
    }
  },
  stonePaper: {
    label: '석조 한지', from: '법무법인 L2',
    tokens: {
      bg: '#F7F5F0', surface: '#FFFFFF', panel: '#EFEBE3', text: '#22201C', sub: '#57524A', accent: '#6E5226',
      weak: '#EDE5D6', hi: '#EDE5D6', hiSub: '#6E5226', input: '#8A8378', line: 'rgba(34,32,28,.14)',
      rBtn: '2px', rPhoto: '0px', rPanel: '2px', rChip: '2px',
      h1: '46px', h1Lh: '60px', h1W: 600, h2: '28px', h2Lh: '40px', h2W: 600, in: '1080px', secY: '96px', pad: '36px',
      fontHead: serif
    }
  }
};

const cssName = (k) => '--s-' + k.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());

/** 테마 토큰을 CSS 변수 객체로. 사이트 뿌리 요소 style 에 그대로 넣는다. */
export function themeStyle(name) {
  const t = THEMES[name]?.tokens ?? THEMES.clearWater.tokens;
  return Object.fromEntries(Object.entries(t).map(([k, v]) => [cssName(k), String(v)]));
}

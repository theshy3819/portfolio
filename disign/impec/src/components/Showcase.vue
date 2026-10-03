<script setup>
import WebCard from './WebCard.vue'

// 프로젝트 대표 화면 구성 (content.js hero.layout)
//  web-phones : 웹 카드 + 앞 왼쪽에 높이를 달리해 서로 반대로 기운 폰 두 대 (COSMOS)
//  web-art    : 웹 카드 + 앞 오른쪽에 선 일러스트 (Lumi 로봇)
//  web-phone  : 웹 카드 + 앞 오른쪽에 기운 폰 한 대 (주만추)
// glow: 브랜드 색 두 개(#rrggbb) — 카드 뒤에서 번지는 빛 두 덩어리. 그라데이션만 쓰고 blur 필터는 쓰지 않음(인쇄에서도 같게)
// 폰은 3D로 미리 구운 투명 이미지(scratchpad tools/phone3d.mjs — 검은 프레임, 기우는 쪽 옆면이 보임)를 그대로 놓음
defineProps({ hero: Object, name: String })
const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`
}
// 빛 덩어리마다 자기 상자 안에 내접한 타원(closest-side)으로 그려 상자 가장자리에서 완전히 투명해짐 — 잘린 경계가 생기지 않음
const blobs = (c) => {
  if (!c?.length) return []
  const [a, b = c[0]] = c
  return [
    { cls: 'b1', bg: `radial-gradient(closest-side, ${rgba(a, 0.55)} 0%, ${rgba(a, 0.26)} 50%, ${rgba(a, 0)} 100%)` },
    { cls: 'b2', bg: `radial-gradient(closest-side, ${rgba(b, 0.42)} 0%, ${rgba(b, 0.18)} 50%, ${rgba(b, 0)} 100%)` },
  ]
}
</script>

<template>
  <figure class="showcase" :class="`l-${hero.layout}`">
    <div class="stage">
      <span v-for="g in blobs(hero.glow)" :key="g.cls" class="blob" :class="g.cls" :style="{ background: g.bg }" aria-hidden="true"></span>
      <img v-if="hero.artSrc" class="art" :src="hero.artSrc" :alt="hero.artAlt ?? ''" />
      <WebCard class="web" :src="hero.webSrc" :alt="`${name} 웹 화면`" />
      <div v-for="(p, i) in hero.phoneSrcs" :key="p" class="phone-wrap" :class="`p${i + 1}`">
        <!-- 바닥 그림자는 기울이지 않고 폰 아래 바닥에 평평하게 -->
        <span class="ground" aria-hidden="true"></span>
        <img class="phone" :src="p" :alt="`${name} 모바일 화면 ${i + 1}`" />
      </div>
    </div>
    <figcaption v-if="hero.caption" class="caption">{{ hero.caption }}</figcaption>
  </figure>
</template>

<style scoped>
.showcase {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  min-width: 0;
  margin: 0;
}

.caption {
  font-size: 17px;
  color: var(--fg-muted);
}

/* 모든 위치는 무대 폭 기준 % — 화면 크기와 인쇄 배율이 달라도 같은 구도 */
.stage {
  position: relative;
  width: 100%;
  aspect-ratio: 1.12;
}

.blob {
  position: absolute;
  pointer-events: none;
}

.web,
.art,
.phone-wrap {
  position: absolute;
}

.phone {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 26px 24px rgb(17 17 16 / 0.28));
}

.ground {
  position: absolute;
  left: 4%;
  right: 4%;
  bottom: -8%;
  height: 5%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(17 17 16 / 0.3), rgb(17 17 16 / 0));
}

/* 빛 위치(무대 기준 %) — 상자가 무대 밖으로 조금 나가도 쪽 여백 안에서 0으로 사라짐 */
.l-web-phones .b1 {
  left: 18%;
  top: -14%;
  width: 92%;
  height: 84%;
}

.l-web-phones .b2 {
  left: -12%;
  top: 34%;
  width: 66%;
  height: 66%;
}

.l-web-art .b1 {
  left: -10%;
  top: 6%;
  width: 98%;
  height: 92%;
}

.l-web-art .b2 {
  left: 48%;
  top: -6%;
  width: 60%;
  height: 76%;
}

.l-web-phone .b1 {
  left: -10%;
  top: -14%;
  width: 98%;
  height: 86%;
}

.l-web-phone .b2 {
  left: 52%;
  top: 18%;
  width: 58%;
  height: 76%;
}

/* COSMOS: 카드 오른쪽 위, 왼쪽 폰은 낮게 왼쪽으로, 안쪽 폰은 높게 오른쪽으로 기욺 (BBOK 시안 구도) */

.l-web-phones .web {
  top: 0;
  right: 0;
  width: 73%;
}

.l-web-phones .p1 {
  left: -2%;
  top: 30%;
  width: 33%;
}

.l-web-phones .p2 {
  left: 22%;
  top: 13%;
  width: 33%;
}

/* 높이 뜬 폰의 그림자는 같은 바닥에 더 작고 옅게 */
.l-web-phones .p2 .ground {
  bottom: -22%;
  left: 12%;
  right: 12%;
  opacity: 0.55;
}


.l-web-art .art {
  z-index: 2;
  right: 0;
  bottom: 0;
  height: 80%;
  width: auto;
  filter: drop-shadow(0 22px 24px rgb(17 17 16 / 0.26));
}

/* Lumi: 대시보드 카드 위에 로봇이 앞으로 나와 카드 오른쪽 아래를 살짝 가림 */
.l-web-art .web {
  left: 0;
  top: 14%;
  width: 82%;
}

/* 주만추: 카드 왼쪽 위, 폰 한 대가 앞 오른쪽에서 오른쪽으로 기울어 겹침 */

.l-web-phone .web {
  top: 4%;
  left: 0;
  width: 80%;
}

.l-web-phone .p1 {
  right: 0;
  top: 22%;
  width: 35%;
}

/* 좁은 화면: 폰을 키워 손에 든 크기에 가깝게 */
@media screen and (max-width: 899px) {
  /* 좁은 화면은 쪽 여백이 좁아 빛이 화면 밖으로 나가지 않게 무대 안에서만 번짐 */
  .stage .blob {
    inset: 0;
    width: auto;
    height: auto;
  }

  .stage .b2 {
    inset: 30% 0 0 0;
  }

  .stage {
    aspect-ratio: 0.82;
  }

  .l-web-phones .web {
    width: 74%;
  }

  .l-web-phones .p1 {
    left: -2%;
    top: 28%;
    width: 44%;
  }

  .l-web-phones .p2 {
    left: 30%;
    top: 16%;
    width: 44%;
  }

  .l-web-art .web {
    top: 14%;
    width: 86%;
  }

  .l-web-phone .web {
    width: 78%;
  }

  .l-web-phone .p1 {
    right: 0;
    top: 22%;
    width: 46%;
  }
}
</style>

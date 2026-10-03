<script setup>
import Page from '../components/Page.vue'

// UI 개선: 카드마다 화면 + 제목 + 한 문장
defineProps({ project: Object, num: String, page: Number, total: Number, items: Array })
</script>

<template>
  <Page tone="light" :num="num" :label="`Project — ${project.name}`" :page="page" :total="total" :foot="project.name" foot-right="UI 개선">
    <div
      class="ux"
      :style="{ '--g1': project.hero?.glow?.[0] ?? '#888', '--g2': project.hero?.glow?.[1] ?? project.hero?.glow?.[0] ?? '#888' }"
    >
      <header class="ux-head">
        <h2 class="page-title">UI 개선</h2>
        <p v-if="project.ux_lead" class="kr-lead">{{ project.ux_lead }}</p>
      </header>
      <ol class="cards" :class="`n${items.length}`">
        <li v-for="(u, i) in items" :key="u.title" class="card">
          <!-- 화면은 프로젝트 브랜드 색 빛 위에 떠 있는 창으로 -->
          <figure v-if="u.src" class="shot">
            <img :src="u.src" :alt="u.caption || u.title" />
          </figure>
          <p class="card-title">
            <span class="mono-num acc">{{ String(i + 1).padStart(2, '0') }}</span>
            <strong>{{ u.title }}</strong>
          </p>
          <p class="desc">{{ u.desc }}</p>
        </li>
      </ol>
    </div>
  </Page>
</template>

<style scoped>
.ux {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
}

.ux-head {
  display: grid;
  gap: 10px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
  flex: 1;
  min-height: 0;
  align-items: start;
  /* 카드 묶음을 남는 높이 가운데에 */
  align-content: center;
}

.cards.n2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.cards.n4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 0;
}

.shot {
  /* 화면 칸: 브랜드 빛 위에 화면이 떠 있음. 이미지는 3열 9:10, 4열 2:3, 2열 4:3으로 잘라 두었고,
     칸 비율은 안쪽 여백(가로 8%·세로 7%)을 뺀 자리가 그 비율이 되도록 맞춤 — 가장자리 글자가 잘리지 않게 */
  margin: 0 0 6px;
  flex: none;
  aspect-ratio: 0.932;
  padding: 7% 8%;
  border-radius: 14px;
  background: var(--paper-sunk);
  background:
    radial-gradient(closest-side, color-mix(in srgb, var(--g1) 58%, transparent) 0%, color-mix(in srgb, var(--g2) 26%, transparent) 62%, transparent 100%),
    var(--paper-sunk);
}

.n2 .shot {
  aspect-ratio: 1.3;
}

.n4 .shot {
  aspect-ratio: 5 / 7;
}

.shot img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border: 2px solid var(--ink);
  border-radius: 8px;
  box-shadow: 0 28px 44px -24px rgb(17 17 16 / 0.55);
}

.card-title {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.card-title strong {
  font-family: var(--f-display);
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
}

.desc {
  font-size: 21px;
  line-height: 1.55;
  color: var(--fg-muted);
  text-wrap: pretty;
}

.n4 .card-title strong {
  font-size: 24px;
}

.n4 .desc {
  font-size: 19px;
}

@media screen and (max-width: 899px) {
  .cards,
  .cards.n2,
  .cards.n4 {
    grid-template-columns: 1fr;
  }

  /* 폰에서는 잘린 원본 비율 그대로 */
  .shot,
  .n2 .shot,
  .n4 .shot {
    aspect-ratio: auto;
  }

  .shot img {
    height: auto;
  }

  .card-title strong {
    font-size: 21px;
  }

  .desc,
  .n4 .desc {
    font-size: 17px;
  }
}
</style>

<script setup>
import Page from '../components/Page.vue'
import WebCard from '../components/WebCard.vue'

// 개발자가 된 이유: 왼쪽 3단계 흐름(디자이너 → SSAFY → AX), 오른쪽 웹디자인 작업 — 칸마다 브랜드 색 빛 위에 웹은 떠 있는 카드, 모바일은 기기 프레임
defineProps({ story: Object, works: Array, page: Number, total: Number })
</script>

<template>
  <Page id="story" tone="light" num="(03)" label="Why Developer" :page="page" :total="total">
    <div class="story">
      <div class="text">
        <h2 class="headline">{{ story.headline }}</h2>
        <ol class="steps">
          <li v-for="(s, i) in story.steps" :key="s.title" :class="{ now: i === story.steps.length - 1 }">
            <span class="step-no mono-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <p class="step-tag mono-label">{{ s.tag }}</p>
              <p class="step-title">{{ s.title }}</p>
              <p class="step-text">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>

      <figure class="works">
        <ul class="wall">
          <li v-for="w in works" :key="w.name">
            <div class="tile" :class="[w.device ?? 'web', { empty: !w.src }]" :style="{ '--tint': w.tint ?? '#888' }">
              <template v-if="w.src">
                <img v-if="w.device === 'mobile'" class="dev phone" :src="w.src" :alt="`${w.name} 모바일 디자인`" />
                <WebCard v-else class="dev" :src="w.src" :alt="`${w.name} 웹사이트 디자인`" />
              </template>
              <span v-else class="mono-meta">이미지 준비 중</span>
            </div>
            <p class="w-name">{{ w.name }} <span v-if="w.kind" class="w-kind">{{ w.kind }}</span></p>
          </li>
        </ul>
        <figcaption v-if="story.worksNote" class="works-note">
          <span v-if="story.worksStat" class="stat">{{ story.worksStat }}</span>
          <span>{{ story.worksNote }}</span>
        </figcaption>
      </figure>
    </div>
  </Page>
</template>

<style scoped>
.story {
  display: grid;
  grid-template-columns: 480px 1fr;
  gap: 52px;
  height: 100%;
}

.text {
  display: flex;
  flex-direction: column;
}

.headline {
  font-family: var(--f-display);
  font-size: 46px;
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.steps {
  position: relative;
  display: grid;
  flex: 1;
  align-content: space-between;
  margin-top: 40px;
}

.steps::before {
  content: '';
  position: absolute;
  left: 17px;
  top: 24px;
  bottom: 24px;
  width: 2px;
  background: var(--rule);
}

.steps li {
  position: relative;
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 18px;
  padding: 20px 0;
}

/* 마지막 단계가 오른쪽 '4 / 4' 줄과 같은 높이에서 끝남 */
.steps li:last-child {
  padding-bottom: 0;
}

.step-no {
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 2px solid var(--rule);
  border-radius: 50%;
  background: var(--bg);
  font-size: 12px;
  color: var(--fg-muted);
}

.now .step-no {
  border-color: var(--acc);
  background: var(--acc);
  color: var(--paper);
}

.step-tag {
  color: var(--fg-muted);
}

.now .step-tag {
  color: var(--acc);
}

.step-title {
  margin-top: 6px;
  font-family: var(--f-display);
  font-size: 26px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.step-text {
  margin-top: 8px;
  font-size: 19px;
  line-height: 1.6;
  color: var(--fg-muted);
  text-wrap: pretty;
}

.works {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-height: 0;
  margin: 0;
}

/* 2행 × (넓은 칸 2 : 좁은 칸 1) — 작업 순서대로 넓은·좁은 칸에 들어감 */
.wall {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-rows: minmax(0, 1fr);
  gap: 20px 18px;
  flex: 1;
  min-height: 0;
}

.wall li {
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.tile {
  position: relative;
  display: grid;
  flex: 1;
  min-height: 0;
  place-items: center;
}

/* 작업의 브랜드 색이 화면 뒤에서 번짐 — 상자 없이 */
.tile::before {
  content: '';
  position: absolute;
  inset: -4% 0;
  background: radial-gradient(closest-side, color-mix(in srgb, var(--tint) 78%, transparent) 0%, color-mix(in srgb, var(--tint) 34%, transparent) 62%, transparent 100%);
}

.tile .dev {
  position: relative;
}

.tile.empty {
  border: 1px dashed var(--rule);
  border-radius: 12px;
  color: var(--fg-muted);
}

.tile.empty::before {
  display: none;
}

.tile.web .dev {
  width: 88%;
}

.wall li:nth-child(even) .tile.web .dev {
  width: 84%;
}

/* 모바일 작업: 3D로 구운 기운 폰 이미지 + 바닥에 평평한 그림자 */
.tile.mobile .dev {
  height: 84%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  translate: 0 -5%;
  filter: drop-shadow(0 22px 20px rgb(17 17 16 / 0.26));
}

.tile.mobile::after {
  content: '';
  position: absolute;
  left: 22%;
  right: 22%;
  bottom: 1%;
  height: 4%;
  border-radius: 50%;
  background: radial-gradient(closest-side, rgb(17 17 16 / 0.3), rgb(17 17 16 / 0));
}

.w-name {
  margin-top: 10px;
  font-family: var(--f-display);
  font-size: 19px;
  font-weight: 600;
}

.w-kind {
  margin-left: 6px;
  font-family: var(--f-kr);
  font-size: 16px;
  font-weight: 400;
  color: var(--fg-muted);
}

.works-note {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-top: 12px;
  border-top: 1px solid var(--fg);
  font-size: 19px;
  font-weight: 600;
}

.stat {
  font-family: var(--f-display);
  font-size: 34px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  color: var(--acc);
  font-variant-numeric: tabular-nums;
}

@media screen and (max-width: 899px) {
  .story {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .headline {
    font-size: 30px;
  }

  .steps {
    flex: none;
    margin-top: 24px;
  }

  /* 한 단 — 칸 모양은 넓은 화면과 같게(PC 4:3, 모바일·전체 페이지 2:3) */
  .wall {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    gap: 28px;
  }

  .tile {
    flex: none;
    aspect-ratio: 4 / 3;
  }

  .wall li:nth-child(even) .tile {
    aspect-ratio: 3 / 4;
  }

  /* 폰 이미지는 폭 기준으로 — 칸 높이를 넘지 않게 */
  .tile.mobile .dev {
    height: auto;
    width: 60%;
  }

  .w-kind {
    white-space: nowrap;
  }
}
</style>

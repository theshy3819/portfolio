<script setup>
import Page from '../components/Page.vue'
import Icon from '../components/Icon.vue'
import Showcase from '../components/Showcase.vue'

// 프로젝트 1장: 대표 화면 + 기간·인원·역할 + 기획 배경
defineProps({ project: Object, num: String, page: Number, total: Number, hero: Object })
</script>

<template>
  <Page
    :id="project.id"
    tone="light"
    :num="num"
    :label="`Project — ${project.name}`"
    :page="page"
    :total="total"
    :foot="project.name"
    foot-right="개요 · 기획 배경"
  >
    <div class="ov">
      <div class="ov-text">
        <h2 class="ov-name">
          <img v-if="project.iconSrc" class="ov-icon" :src="project.iconSrc" alt="" />{{ project.name }}
        </h2>
        <p class="ov-sub">{{ project.title }}</p>

        <dl class="ov-meta">
          <div><dt class="mono-label muted">기간</dt><dd>{{ project.period }}</dd></div>
          <div><dt class="mono-label muted">인원</dt><dd>{{ project.team }}</dd></div>
          <div><dt class="mono-label muted">역할</dt><dd class="acc strong">{{ project.role }}</dd></div>
        </dl>
        <p v-if="project.award" class="award mono-label"><Icon name="trophy" />{{ project.award }}</p>

        <section v-if="project.background" class="bg">
          <h3 class="block-title mono-label">기획 배경</h3>
          <p class="bg-head">{{ project.background.headline }}</p>
          <ul class="bg-points">
            <li v-for="b in project.background.points" :key="b">{{ b }}</li>
          </ul>
        </section>
      </div>

      <!-- 대표 화면: 웹은 떠 있는 카드, 모바일은 기기 프레임, 뒤에 브랜드 빛·일러스트 (components/Showcase.vue) -->
      <Showcase v-if="hero" class="hero" :hero="hero" :name="project.name" />
      <div v-else class="hero hero-empty"><Icon name="image" /><span>{{ project.name }} 대표 화면</span></div>
    </div>
  </Page>
</template>

<style scoped>
.ov {
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 56px;
  height: 100%;
}

.ov-text {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.ov-name {
  display: flex;
  align-items: center;
  gap: 18px;
  font-family: var(--f-display);
  font-size: 84px;
  font-weight: 600;
  line-height: 0.92;
  letter-spacing: -0.04em;
}

.ov-icon {
  flex: none;
  width: auto;
  height: 76px;
}

.ov-sub {
  margin-top: 16px;
  font-family: var(--f-display);
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
}

.ov-meta {
  display: grid;
  gap: 8px;
  margin-top: 26px;
}

.ov-meta div {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 10px;
  align-items: baseline;
  font-size: 21px;
}

.strong {
  font-weight: 700;
}

.award {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  align-self: start;
  margin-top: 14px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--acc);
  color: var(--paper);
  text-transform: none;
  letter-spacing: 0.02em;
}

.bg {
  margin-top: auto;
  padding-top: 24px;
}

.block-title {
  padding-bottom: 12px;
  border-bottom: 1px solid var(--fg);
}

.bg-head {
  margin-top: 22px;
  font-family: var(--f-display);
  font-size: 33px;
  font-weight: 600;
  line-height: 1.35;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.bg-points {
  margin-top: 14px;
}

.bg-points li {
  position: relative;
  padding: 16px 0 16px 24px;
  border-bottom: 1px solid var(--rule);
  font-size: 22px;
  text-wrap: pretty;
  line-height: 1.5;
  color: var(--fg-muted);
}

.bg-points li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 31px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--acc);
}

.hero {
  min-width: 0;
  min-height: 0;
}

.hero-empty {
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 8px;
  flex: 1;
  border: 1px dashed var(--rule);
  border-radius: 10px;
  color: var(--fg-muted);
}

.hero-empty .icon {
  font-size: 28px;
}

@media screen and (max-width: 899px) {
  .ov {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .ov-name {
    font-size: 56px;
  }

  .hero {
    order: -1;
  }

  .ov-icon {
    height: 52px;
  }

  .bg {
    margin-top: 32px;
  }

}

/* 수상 알약: 한글이 mono 대체 글꼴로 작게 보이지 않게 본문 글꼴로, 한 줄 */
.award {
  font-family: var(--f-kr);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0;
  white-space: nowrap;
}

@media screen and (max-width: 899px) {
  .award {
    white-space: normal;
    font-size: 15px;
  }
}
</style>

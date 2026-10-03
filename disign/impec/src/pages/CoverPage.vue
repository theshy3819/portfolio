<script setup>
import Page from '../components/Page.vue'
defineProps({ meta: Object, profile: Object, page: Number, total: Number })
</script>

<template>
  <Page id="top" tone="light" :page="page" :total="total" :label="`${meta.nameEn} — Portfolio`" :label-extra="meta.date">
    <div class="cover">
      <p class="cover-role mono-label">{{ profile.role }}</p>
      <h1 class="wordmark">포트폴리오</h1>
      <div class="cover-statement">
        <p class="heading-md">{{ profile.catchphrase }}</p>
        <p class="cover-name">
          <span class="name-kr">{{ meta.name }}</span>
          <span class="mono-label muted">{{ meta.nameEn }} · {{ meta.date }}</span>
        </p>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.cover-role {
  color: var(--acc);
}

.wordmark {
  margin-top: 36px;
  font-size: 276px;
}

.cover-statement {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  /* 워드마크는 위, 소개 문장과 이름은 쪽 바닥 */
  margin-top: auto;
  padding-top: 32px;
  border-top: 1px solid var(--fg);
}

.cover-statement .heading-md {
  font-size: 44px;
  white-space: nowrap;
}

.cover-name {
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: none;
}

.name-kr {
  font-family: var(--f-display);
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

@media screen and (max-width: 899px) {
  .wordmark {
    font-size: clamp(64px, 17vw, 140px);
  }

  .cover-statement {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 48px;
  }

  .cover-statement .heading-md {
    font-size: clamp(26px, 7vw, 40px);
    white-space: normal;
  }

  .cover-name {
    justify-items: start;
  }

}
</style>

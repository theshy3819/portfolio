<script setup>
// A4 가로 한 장 (1440×1018 캔버스). 머리줄: (번호) 섹션 · 쪽수 / 발줄: 프로젝트·하위 섹션
defineProps({
  id: { type: String, default: undefined },
  tone: { type: String, default: 'light' }, // light | sunk | dark
  num: { type: String, default: '' }, // (01)
  label: { type: String, default: '' },
  labelExtra: { type: String, default: '' }, // 머리줄 보조(예: 날짜) — 아주 좁은 화면에서는 숨김
  page: { type: Number, required: true },
  total: { type: Number, required: true },
  foot: { type: String, default: '' },
  footRight: { type: String, default: '' },
})
const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <section :id="id" class="page" :class="tone" :aria-label="label || undefined">
    <header class="page-head mono-label">
      <p class="kicker">
        <span v-if="num" class="acc">{{ num }}</span>
        <!-- 구분자를 글자로 둠: 요소 첫머리의 공백만 있는 텍스트는 Vue 컴파일 때 지워짐 -->
        <span class="muted">{{ label }}<span v-if="labelExtra" class="label-extra"> · {{ labelExtra }}</span></span>
      </p>
      <p class="muted page-no">{{ pad(page) }} / {{ pad(total) }}</p>
    </header>
    <div class="page-body">
      <slot />
    </div>
    <footer v-if="foot || footRight" class="page-foot mono-label muted">
      <span>{{ foot }}</span>
      <span>{{ footRight }}</span>
    </footer>
  </section>
</template>

<style scoped>
.page-no {
  flex: none;
  white-space: nowrap;
}

@media screen and (max-width: 479px) {
  .label-extra {
    display: none;
  }
}
</style>

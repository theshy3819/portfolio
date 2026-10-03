<script setup>
// 웹 화면 카드: 둥근 창 + 잉크 테두리 + 떠 있는 그림자. 높이는 스크린샷 비율 그대로(자르지 않음)
defineProps({ src: String, alt: { type: String, default: '' } })
</script>

<template>
  <div class="webcard"><img :src="src" :alt="alt" /></div>
</template>

<style scoped>
.webcard {
  position: relative;
  overflow: hidden;
  border: 2px solid var(--ink);
  border-radius: 16px;
  background: #fff;
  box-shadow:
    0 40px 70px -30px rgb(17 17 16 / 0.45),
    0 10px 20px -12px rgb(17 17 16 / 0.25);
}

/* 어두운 스크린샷에서도 카드 가장자리가 보이도록 안쪽 밝은 선 */
.webcard::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 0 1px rgb(255 255 255 / 0.12);
  pointer-events: none;
}

.webcard img {
  display: block;
  width: 100%;
  height: auto;
}
</style>

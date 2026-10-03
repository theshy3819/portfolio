<script setup>
const props = defineProps({ level: { type: Number, required: true } })
const NAMES = ['기초', '초급', '중급', '고급', '전문가']
</script>

<template>
  <span class="level" role="img" :aria-label="`숙련도 ${NAMES[props.level - 1]} (5단계 중 ${props.level})`">
    <i v-for="n in 5" :key="n" :class="{ on: n <= props.level }"></i>
    <span class="level-name">{{ NAMES[props.level - 1] }}</span>
  </span>
</template>

<style scoped>
.level {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

i {
  width: 13px;
  height: 7px;
  border-radius: 1px;
  background: var(--rule);
}

i.on {
  background: var(--acc);
}

.level-name {
  margin-left: 6px;
  font-family: var(--f-kr);
  font-size: 16px;
  font-weight: 500;
  color: var(--fg-muted);
}
</style>

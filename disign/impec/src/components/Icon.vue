<script setup>
import { computed } from 'vue'
import { icons } from '../icons.js'

const props = defineProps({ name: { type: String, required: true } })
const icon = computed(() => icons[props.name])
</script>

<template>
  <svg v-if="icon?.type === 'badge'" class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="4" fill="none" stroke="currentColor" stroke-width="1.75" />
    <text x="12" y="16.1" text-anchor="middle" fill="currentColor" font-size="10.5" font-weight="700" font-family="inherit">{{ icon.letters }}</text>
  </svg>
  <!-- viewBox·weight: 특정 로고만 확대하거나 획을 더할 때 (예: MySQL 돌고래) -->
  <svg
    v-else-if="icon"
    class="icon"
    :viewBox="icon.viewBox ?? '0 0 24 24'"
    aria-hidden="true"
    focusable="false"
    :fill="icon.type === 'fill' ? 'currentColor' : 'none'"
    :stroke="icon.type === 'stroke' || icon.weight ? 'currentColor' : 'none'"
    :stroke-width="icon.weight ?? 1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path v-for="(d, i) in icon.paths" :key="i" :d="d" />
  </svg>
</template>

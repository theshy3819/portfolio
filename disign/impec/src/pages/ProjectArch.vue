<script setup>
import Page from '../components/Page.vue'
import ArchDiagram from '../components/ArchDiagram.vue'

// 아키텍처: 한 줄 요약 + 큰 구조도 + 구조 설명 3줄
defineProps({ project: Object, num: String, page: Number, total: Number })
</script>

<template>
  <Page tone="light" :num="num" :label="`Project — ${project.name}`" :page="page" :total="total" :foot="project.name" foot-right="아키텍처">
    <div class="arch-page">
      <header class="head">
        <h2 class="page-title">아키텍처</h2>
        <p v-if="project.arch?.lead" class="kr-lead">{{ project.arch.lead }}</p>
      </header>

      <ArchDiagram class="diagram" :arch="project.architecture" />

      <ol v-if="project.arch?.notes?.length" class="notes">
        <li v-for="(n, i) in project.arch.notes" :key="n">
          <span class="mono-num acc">{{ String(i + 1).padStart(2, '0') }}</span>
          <p>{{ n }}</p>
        </li>
      </ol>
    </div>
  </Page>
</template>

<style scoped>
.arch-page {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
}

.head {
  display: grid;
  gap: 10px;
}

.diagram {
  flex: 1;
  min-height: 0;
  align-content: center;
}

.notes {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  padding-top: 22px;
  border-top: 1px solid var(--fg);
}

.notes li {
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 6px;
  align-items: baseline;
}

.notes p {
  font-size: 20px;
  line-height: 1.5;
}

@media screen and (max-width: 899px) {
  .notes {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .notes p {
    font-size: 17px;
  }
}
</style>

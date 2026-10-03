<script setup>
import Page from '../components/Page.vue'
import Icon from '../components/Icon.vue'
import LevelBar from '../components/LevelBar.vue'

defineProps({ skills: Array, page: Number, total: Number })
const LEGEND = [
  ['기초', '튜토리얼 가능'],
  ['초급', '예제 참고 구현'],
  ['중급', '문서 보며 독립 개발'],
  ['고급', '프로젝트 주도 활용'],
  ['전문가', '코드 리뷰·멘토링'],
]
</script>

<template>
  <Page id="skills" tone="light" num="(02)" label="Skills" :page="page" :total="total">
    <div class="skills">
      <div class="head">
        <h2 class="display-lg">Skills</h2>
        <ol class="legend">
          <li v-for="(l, i) in LEGEND" :key="l[0]">
            <LevelBar :level="i + 1" />
            <span class="legend-desc">{{ l[1] }}</span>
          </li>
        </ol>
      </div>
      <div class="groups">
        <section v-for="g in skills" :key="g.group" class="group">
          <h3 class="block-title mono-label">{{ g.group }}</h3>
          <p v-if="g.note" class="group-note">{{ g.note }}</p>
          <ul>
            <li v-for="s in g.items" :key="s.name">
              <p class="skill-head">
                <span class="skill-name"><Icon v-if="s.icon" :name="s.icon" />{{ s.name }}</span>
                <LevelBar :level="s.level" />
              </p>
              <p class="evidence">{{ s.evidence }}</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 28px;
  height: 100%;
}

.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}

.legend {
  display: grid;
  gap: 4px;
}

.legend li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.legend-desc {
  font-size: 16px;
  color: var(--fg-muted);
}

/* 이름이 긴 Frontend·Backend 열을 조금 넓혀 기술 이름을 한 줄로 */
.groups {
  display: grid;
  grid-template-columns: 1.12fr 1.12fr 0.84fr 1.08fr;
  gap: 30px;
}

.groups > * {
  min-width: 0;
}

.group-note {
  padding: 8px 0 2px;
  font-size: 12.5px;
  line-height: 1.45;
  color: var(--fg-muted);
}

.block-title {
  padding-bottom: 10px;
  border-bottom: 1px solid var(--fg);
}

.group li {
  padding: 19px 0 20px;
  border-bottom: 1px solid var(--rule);
}

.skill-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
}

/* 이름이 길면 이름 칸 안에서 두 줄로 접히고, 숙련도 막대는 첫 줄 오른쪽에 고정 */
.skill-head :deep(.level) {
  flex: none;
  margin-top: 6px;
}

.skill-name {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  font-family: var(--f-display);
  font-size: 21px;
  line-height: 1.3;
  font-weight: 600;
}

.skill-name .icon {
  font-size: 20px;
}

.evidence {
  margin-top: 6px;
  font-size: 17px;
  line-height: 1.5;
  color: var(--fg-muted);
}

@media screen and (max-width: 899px) {
  .head {
    flex-direction: column;
    align-items: flex-start;
  }

  .groups {
    grid-template-columns: 1fr;
  }
}
</style>

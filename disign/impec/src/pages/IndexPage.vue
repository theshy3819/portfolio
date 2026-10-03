<script setup>
import Page from '../components/Page.vue'
import Icon from '../components/Icon.vue'

defineProps({ projects: Array, page: Number, total: Number })
const pad = (n) => String(n).padStart(2, '0')
</script>

<template>
  <Page id="work" tone="sunk" num="(04)" label="Project Index" :page="page" :total="total">
    <div class="index">
      <h2 class="display-lg">Projects</h2>
      <ol class="list">
        <li v-for="(p, i) in projects" :key="p.id">
          <a :href="`#${p.id}`" class="row">
            <span class="mono-num acc">{{ pad(i + 1) }}</span>
            <span class="what">
              <span class="name"><img v-if="p.iconSrc" class="p-icon" :src="p.iconSrc" alt="" />{{ p.name }}</span>
              <span class="title">{{ p.title }}</span>
              <span v-if="p.award" class="award mono-label"><Icon name="trophy" />{{ p.award }}</span>
            </span>
            <span class="meta">
              <span class="mono-meta">{{ p.period }}</span>
              <span class="mono-meta muted">{{ p.team }}</span>
              <span class="role"><span class="role-k">역할</span><span class="acc">{{ p.role }}</span></span>
            </span>
            <span class="pages mono-num">{{ pad(p.pageStart) }}–{{ pad(p.pageEnd) }}</span>
          </a>
        </li>
      </ol>
    </div>
  </Page>
</template>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
}

.list {
  display: flex;
  flex: 1;
  flex-direction: column;
  border-top: 1px solid var(--fg);
}

.list li {
  display: flex;
  flex: 1;
  align-items: center;
  border-bottom: 1px solid var(--rule);
}

.row {
  display: grid;
  flex: 1;
  grid-template-columns: 56px 1fr 1fr 72px;
  gap: 32px;
  align-items: start;
  padding: 24px 0;
}

.what {
  display: grid;
  gap: 10px;
}

.name {
  font-family: var(--f-display);
  font-size: 72px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  transition: color 0.3s var(--ease-out);
}

.p-icon {
  display: inline-block;
  height: 62px;
  width: auto;
  margin-right: 14px;
  vertical-align: -6px;
}

.row:hover .name {
  color: var(--acc);
}

.title {
  font-size: 23px;
  font-weight: 500;
}

.award {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  justify-self: start;
  padding: 6px 12px;
  border-radius: 999px;
  background: var(--acc);
  color: var(--paper);
  text-transform: none;
  letter-spacing: 0.02em;
}

.meta {
  display: grid;
  gap: 6px;
  padding-top: 6px;
}

.role {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-top: 6px;
  font-family: var(--f-display);
  font-size: 21px;
  font-weight: 700;
}

/* 역할 이름표는 작고 흐리게, 역할 값은 파랑 — 두 단어가 한 덩어리로 보이지 않게 */
.role-k {
  font-family: var(--f-kr);
  font-size: 16px;
  font-weight: 500;
  color: var(--fg-muted);
}

.summary {
  font-size: 19px;
  line-height: 1.6;
  color: var(--fg-muted);
}

.pages {
  padding-top: 8px;
  text-align: right;
  color: var(--fg-muted);
}

@media screen and (max-width: 899px) {
  .row {
    grid-template-columns: 32px 1fr;
    gap: 12px 16px;
    padding: 24px 0;
  }

  .meta {
    grid-column: 2;
  }

  .pages {
    display: none;
  }

  .name {
    font-size: 34px;
  }
}

.meta .mono-meta {
  font-size: 17px;
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

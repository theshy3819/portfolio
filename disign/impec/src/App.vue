<script setup>
import CoverPage from './pages/CoverPage.vue'
import ProfilePage from './pages/ProfilePage.vue'
import SkillsPage from './pages/SkillsPage.vue'
import IndexPage from './pages/IndexPage.vue'
import ProjectOverview from './pages/ProjectOverview.vue'
import ProjectUx from './pages/ProjectUx.vue'
import ProjectArch from './pages/ProjectArch.vue'
import ContactPage from './pages/ContactPage.vue'
import StoryPage from './pages/StoryPage.vue'
import { meta, contact, profile, history, story, skills, projects } from './content.js'

// 화면 이미지: src/assets/shots/ 의 파일 이름을 content.js의 hero.file · ux[].file 에 적으면 표시
const files = import.meta.glob('./assets/shots/*.{png,jpg,jpeg,webp,gif}', { eager: true, import: 'default' })
const fileFor = (name) => (name ? Object.entries(files).find(([p]) => p.endsWith('/' + name))?.[1] : undefined)
const heroFor = (p) =>
  p.hero && fileFor(p.hero.web)
    ? {
        ...p.hero,
        webSrc: fileFor(p.hero.web),
        phoneSrcs: (p.hero.phones ?? []).map(fileFor).filter(Boolean),
        artSrc: fileFor(p.hero.art),
      }
    : null
// 프로젝트 아이콘: src/assets/icons/ 의 파일 이름을 content.js의 icon 에 적으면 이름 옆에 표시
const iconFiles = import.meta.glob('./assets/icons/*.{png,svg,webp}', { eager: true, import: 'default' })
const iconFor = (name) => (name ? Object.entries(iconFiles).find(([p]) => p.endsWith('/' + name))?.[1] : undefined)
const uxFor = (p) => (p.ux ?? []).map((u) => ({ ...u, src: fileFor(u.file) }))

const pad = (n) => String(n).padStart(2, '0')
const worksFor = (list) => (list ?? []).map((w) => ({ ...w, src: fileFor(w.file) }))

// 쪽 구성: 표지 · 프로필 · 스킬 · 개발자가 된 이유 · 목차 · 프로젝트(개요·기획 배경 · UI 개선 · 아키텍처) · 연락처
const list = []
list.push({ is: CoverPage, props: { meta, profile } })
list.push({ is: ProfilePage, props: { meta, profile, contact, history } })
list.push({ is: SkillsPage, props: { skills } })
if (story) list.push({ is: StoryPage, props: { story, works: worksFor(story.works) } })
const indexEntry = { is: IndexPage, props: { projects: [] } }
list.push(indexEntry)

let section = 5
const indexed = []
for (const raw of projects) {
  const p = { ...raw, iconSrc: iconFor(raw.icon) }
  const num = `(${pad(section++)})`
  const start = list.length + 1
  list.push({ is: ProjectOverview, props: { project: p, num, hero: heroFor(p) } })
  if (p.ux?.length) list.push({ is: ProjectUx, props: { project: p, num, items: uxFor(p) } })
  if (p.architecture?.nodes?.length) list.push({ is: ProjectArch, props: { project: p, num } })
  indexed.push({ ...p, pageStart: start, pageEnd: list.length })
}
indexEntry.props.projects = indexed
list.push({ is: ContactPage, props: { meta, contact, num: `(${pad(section++)})` } })

const pages = list.map((p, i) => ({ ...p, props: { ...p.props, page: i + 1, total: list.length } }))
</script>

<template>
  <main>
    <component :is="p.is" v-for="(p, i) in pages" :key="i" v-bind="p.props" />
  </main>
</template>

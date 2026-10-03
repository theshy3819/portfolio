import { createApp } from 'vue'
import App from './App.vue'
import '@fontsource-variable/archivo'
import '@fontsource-variable/geist-mono'
import '@fontsource-variable/noto-sans-kr'
import './style.css'

// 넓은 화면(≥900px)에서는 쪽 하나가 1440×1018(A4 가로 비율) 캔버스.
// 쪽이 브라우저 창 안에 통째로 보이도록 폭과 높이 중 작은 쪽에 맞춰 줄이고(contain), 쪽 둘레에 여백(--gap)을 둠.
// 아주 낮은 창에서는 글자가 너무 작아지지 않게 하한(0.62)을 둠 — 그때는 쪽 아래가 조금 잘릴 수 있음.
const W = 1440
const H = 1018
function setScale() {
  const vw = document.documentElement.clientWidth
  const vh = window.innerHeight
  const gap = Math.round(Math.min(32, Math.max(14, vh * 0.028)))
  const fit = Math.min((vw - gap * 2) / W, (vh - gap * 2) / H)
  const scale = Math.min((vw - gap * 2) / W, Math.max(fit, 0.62))
  document.documentElement.style.setProperty('--scale', String(scale))
  document.documentElement.style.setProperty('--gap', `${gap}px`)
}
setScale()
addEventListener('resize', setScale)

createApp(App).mount('#app')

// 넓은 화면에서 ↑·↓(PageUp·PageDown)을 누르면 한 쪽씩 넘김. 좁은 화면은 쪽이 창보다 길어 기본 스크롤 그대로.
// 키를 연달아 누르면 스크롤이 끝나기 전이라도 마지막으로 향한 쪽을 기준으로 다음 쪽을 고름.
const wide = matchMedia('(min-width: 900px)')
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)')
const KEYS = { ArrowDown: 1, PageDown: 1, ArrowUp: -1, PageUp: -1 }
let target = -1
let lastPress = 0
function nearestPage(pages) {
  const mid = innerHeight / 2
  let best = 0
  let bestD = Infinity
  pages.forEach((p, i) => {
    const r = p.getBoundingClientRect()
    const d = Math.abs(r.top + r.height / 2 - mid)
    if (d < bestD) {
      bestD = d
      best = i
    }
  })
  return best
}
addEventListener('keydown', (e) => {
  const dir = KEYS[e.key]
  if (!dir || !wide.matches || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return
  if (e.target.closest?.('input, textarea, select, [contenteditable]')) return
  const pages = [...document.querySelectorAll('.page')]
  if (!pages.length) return
  const now = performance.now()
  const from = now - lastPress < 700 && target >= 0 ? target : nearestPage(pages)
  target = Math.min(pages.length - 1, Math.max(0, from + dir))
  lastPress = now
  e.preventDefault()
  pages[target].scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' })
})

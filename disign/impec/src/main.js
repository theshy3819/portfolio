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

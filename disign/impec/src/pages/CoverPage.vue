<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import Page from '../components/Page.vue'

const props = defineProps({
  meta: Object,
  profile: Object,
  projects: { type: Array, default: () => [] },
  page: Number,
  total: Number,
})

const shots = computed(() => props.projects.filter((p) => p.heroSrc))
// 같은 줄을 두 벌: 다섯 칸(-2 ~ +2)을 채우고, 왼쪽 끝에서 나가는 카드와 오른쪽 끝에서 들어오는 카드가
// 서로 다른 벌이라 건너뛰는 모습 없이 이어짐. 양끝 두 칸은 같은 프로젝트가 순환해 보이는 자리라 더 옅게.
// 두 번째 벌은 보조기기·탭 순서에서 숨김
const deck = computed(() => [...shots.value, ...shots.value].map((p, i) => ({ ...p, copy: i >= shots.value.length })))
const brand = (p) => ({ '--g': p.hero?.glow?.[0] ?? '#1f2cff' })

/* ---------- 부채꼴 카드 (designbookmark Fan Cards의 스프링을 그대로 옮김) ----------
   - 처음 보일 때: 겹친 카드 묶음이 떠오르고 → 아래 가운데를 축으로 다섯 칸 부채꼴로 펼쳐짐
   - 가운데(앞) 카드만 들려 올라가며 제 색, 나머지는 흑백으로 옅게(양끝은 더 옅게)
   - 일정 시간마다 왼쪽으로 한 칸씩 밀려 다음 프로젝트가 가운데로(맨 왼쪽은 사라지고 오른쪽에서 새로 들어옴)
   - 가리키면 멈춤, 옆 카드를 누르면 그 카드가 앞으로, 앞 카드를 누르면 그 프로젝트 쪽으로 이동
   스프링 값은 "stiffness damping": 펼침 220 18 · 들림 420 20 · 크기 420 22(원본 fan.js), 넘김 260 24(원본 tokens의 spring-soft), 등장 420 32(spring-fade) */
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
const S = (x, k, c) => ({ x, v: 0, t: x, k, c: reduce ? 2 * Math.sqrt(k) : c })
const step = (s, dt) => {
  const a = -s.k * (s.x - s.t) - s.c * s.v
  s.v += a * dt
  s.x += s.v * dt
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v))
const wrap = (v, n) => ((v % n) + n) % n

const appear = S(0, 420, 32)
const fan = S(0, 220, 18)
const phase = S(0, 260, 24)
const per = computed(() => deck.value.map(() => ({ lift: S(0, 420, 20), sc: S(1, 420, 22) })))

const stage = ref(null)
const els = ref([])
const HOLD = 1500 // 앞 카드가 머무는 시간(ms)

function front() {
  return wrap(Math.round(phase.t), deck.value.length)
}
function setHot() {
  const f = front()
  per.value.forEach((c, i) => {
    c.lift.t = i === f ? -1 : 0 // 카드 폭에 곱해 px로 바꿈
    c.sc.t = i === f ? 1.06 : 1
  })
}
// 카드 i의 자리: 0 = 가운데 앞, ±1 · ±2 = 보이는 옆자리, 그 밖은 사라진 자리(여기서 반대편으로 건너감)
const slot = (i, ph) => {
  const n = deck.value.length
  return wrap(i - ph + n / 2, n) - n / 2
}

function place(el, { x, y, r, s, o, z, h }) {
  el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${r.toFixed(3)}deg) scale(${s.toFixed(4)})`
  el.style.opacity = o.toFixed(3)
  el.style.pointerEvents = o > 0.5 ? '' : 'none' // 사라진 자리 카드가 클릭을 가로채지 않게
  el.style.zIndex = String(z)
  el.style.setProperty('--h', h.toFixed(3))
}

function render() {
  const box = stage.value
  if (!box) return
  const cw = els.value[0]?.offsetWidth || 400
  const rise = (1 - appear.x) * 40
  els.value.forEach((el, i) => {
    if (!el) return
    // 다섯 칸(-2 ~ +2) 부채, 가운데(0)가 앞. 양끝은 더 옅게, 그 밖은 사라짐
    const c = per.value[i]
    const p = slot(i, phase.x)
    const q = p * fan.x
    const ap = Math.abs(p)
    const o = ap <= 1 ? 1 : ap <= 2 ? 1 - (ap - 1) * 0.4 : Math.max(0, 0.6 * (3 - ap))
    place(el, {
      x: q * cw * 0.5,
      y: Math.abs(q) * cw * 0.06 + c.lift.x * cw * 0.055 + rise,
      r: q * 7,
      s: c.sc.x,
      o: o * appear.x,
      z: Math.round(20 - ap * 4),
      h: 1 - clamp(ap, 0, 1), // 앞일수록 1: 제 색·브랜드 그림자
    })
  })
}

let raf = 0
let last = 0
function loop(now) {
  const dt = Math.min((now - last) / 1000, 1 / 30)
  last = now
  for (let k = 0; k < 4; k++) {
    const d = dt / 4
    step(appear, d)
    step(fan, d)
    step(phase, d)
    per.value.forEach((c) => {
      step(c.lift, d)
      step(c.sc, d)
    })
  }
  render()
  raf = requestAnimationFrame(loop)
}

let timer = 0
let visible = false
let hovering = false
let started = false
function schedule(ms = HOLD) {
  clearTimeout(timer)
  if (reduce || !visible || hovering) return
  timer = setTimeout(() => {
    phase.t += 1
    setHot()
    schedule()
  }, ms)
}

function start() {
  started = true
  if (reduce) {
    appear.x = appear.t = 1
    fan.x = fan.t = 1
    setHot()
    per.value.forEach((c) => {
      c.lift.x = c.lift.t
      c.sc.x = c.sc.t
    })
    render()
    return
  }
  appear.t = 1
  timer = setTimeout(() => {
    fan.t = 1
    setHot()
    schedule(HOLD + 400)
  }, 350)
}

function onEnter() {
  hovering = true
  clearTimeout(timer)
}
function onLeave() {
  hovering = false
  if (started && fan.t === 1) schedule(1500)
}
// 옆 카드를 누르거나 키보드로 고르면 그 카드를 앞으로. 앞 카드는 링크 그대로
function bring(i, e) {
  const p = Math.round(slot(i, phase.t))
  if (p === 0) return
  e?.preventDefault()
  phase.t += p
  setHot()
}

// 인쇄(PDF)할 때는 넘기는 중간이 찍히지 않게: 펼친 채 첫 프로젝트(WebO)가 가운데인 모습으로 고정
function snap() {
  clearTimeout(timer)
  for (const s of [appear, fan]) Object.assign(s, { x: 1, t: 1, v: 0 })
  Object.assign(phase, { x: 0, t: 0, v: 0 })
  setHot()
  per.value.forEach((c) => {
    Object.assign(c.lift, { x: c.lift.t, v: 0 })
    Object.assign(c.sc, { x: c.sc.t, v: 0 })
  })
  render()
}
function unsnap() {
  if (started && fan.t === 1) schedule()
}
const printing = matchMedia('print')
const onPrintChange = (e) => (e.matches ? snap() : unsnap())

let io
onMounted(() => {
  addEventListener('beforeprint', snap)
  addEventListener('afterprint', unsnap)
  printing.addEventListener('change', onPrintChange)
  render()
  io = new IntersectionObserver(
    ([e]) => {
      visible = e.isIntersecting
      if (visible) {
        if (!started) start()
        last = performance.now()
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(loop)
        if (started && fan.t === 1) schedule()
      } else {
        cancelAnimationFrame(raf)
        clearTimeout(timer)
      }
    },
    { threshold: 0.3 },
  )
  io.observe(stage.value)
})
onBeforeUnmount(() => {
  removeEventListener('beforeprint', snap)
  removeEventListener('afterprint', unsnap)
  printing.removeEventListener('change', onPrintChange)
  io?.disconnect()
  cancelAnimationFrame(raf)
  clearTimeout(timer)
})
</script>

<template>
  <Page id="top" tone="light" :page="page" :total="total" :label="`${meta.nameEn} — Portfolio`" :label-extra="meta.date">
    <div class="cover">
      <div class="title">
        <p class="cover-role">{{ profile.role }}</p>
        <h1 class="wordmark">포트폴리오</h1>
      </div>

      <div ref="stage" class="stage" @mouseenter="onEnter" @mouseleave="onLeave">
        <div class="fan">
          <a
            v-for="(p, i) in deck"
            :key="`${p.id}-${i}`"
            :ref="(el) => (els[i] = el)"
            class="card"
            :href="`#${p.id}`"
            :style="brand(p)"
            :aria-hidden="p.copy ? 'true' : undefined"
            :tabindex="p.copy ? -1 : undefined"
            @click="bring(i, $event)"
            @focus="$event.target.matches(':focus-visible') && bring(i)"
          >
            <img :src="p.heroSrc" :alt="p.copy ? '' : `${p.name} 화면`" />
          </a>
        </div>
      </div>

      <div class="cover-statement">
        <p class="heading-md">{{ profile.catchphrase }}</p>
        <p class="cover-name">
          <span class="name-kr">{{ meta.name }}</span>
          <span class="mono-label muted">{{ meta.nameEn }} · {{ meta.date }}</span>
        </p>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.cover {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title {
  display: grid;
  gap: 18px;
}

/* 직무가 먼저 읽히게: 파랑 디스플레이 글자. 워드마크는 그 아래 한 단계 작게 */
.cover-role {
  font-family: var(--f-display);
  font-size: 64px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--acc);
}

.wordmark {
  font-size: 112px;
}

/* ---------- 부채꼴 무대: 제목과 바닥 문장 사이 ---------- */

.stage {
  position: relative;
  flex: 1;
  min-height: 0;
}

/* 카드들의 기준점: 무대 가운데. 카드는 모두 이 자리에 겹쳐 있고 JS가 자리·기울기를 줌 */
.fan {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 380px;
  aspect-ratio: 16 / 10;
  translate: -50% -42%;
}

.card {
  --h: 0;
  position: absolute;
  inset: 0;
  display: block;
  overflow: hidden;
  border-radius: 12px;
  background: #fff;
  /* 테두리 대신 옅은 그림자로만 종이에서 떼어 냄 */
  box-shadow: 0 16px 34px -20px rgb(17 17 16 / 0.32);
  transform-origin: 50% 100%;
  will-change: transform, opacity;
  opacity: 0;
}

/* 앞 카드만 브랜드 색 그림자 */
.card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 30px 44px -26px var(--g);
  opacity: var(--h);
  pointer-events: none;
}

/* 앞은 제 색, 옆은 흑백으로 옅게 */
.card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  filter: grayscale(calc(1 - var(--h)));
  opacity: calc(0.38 + var(--h) * 0.62);
}

/* ---------- 쪽 바닥: 소개 문장과 이름 ---------- */

.cover-statement {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  padding-top: 28px;
  border-top: 1px solid var(--fg);
}

.cover-statement .heading-md {
  font-size: 40px;
  white-space: nowrap;
}

.cover-name {
  display: grid;
  justify-items: end;
  gap: 6px;
  flex: none;
}

.name-kr {
  font-family: var(--f-display);
  font-size: 34px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

/* ---------- 좁은 화면 ---------- */

@media screen and (max-width: 899px) {
  .cover-role {
    font-size: clamp(36px, 10vw, 52px);
  }

  .wordmark {
    font-size: clamp(52px, 14vw, 88px);
  }

  /* 펼친 부채가 화면보다 넓어 양옆 카드는 무대 끝에서 살짝 잘림 */
  .stage {
    flex: none;
    height: 260px;
    margin: 28px -20px 0;
    overflow: hidden;
  }

  .fan {
    width: 170px;
  }

  .cover-statement {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin-top: 32px;
  }

  .cover-statement .heading-md {
    font-size: clamp(24px, 6.6vw, 34px);
    white-space: normal;
  }

  .cover-name {
    justify-items: start;
  }
}
</style>

// 아키텍처 구조도 배치 계산 (ArchDiagram.vue에서 사용)
// col(왼→오 데이터 흐름) · row(세로 위치, 0.5 단위 가능) 격자에 노드를 놓고 간선을 직선 화살표로 그림.
// 라벨은 후보 자리 중 다른 간선·노드·라벨과 겹치지 않는 첫 자리에 놓음 — 열 사이 대각선은 출발점 옆(선의 바깥쪽),
// 막히면 도착점 옆. 다른 간선에 바짝 붙는 자리(같은 점에서 갈라지는 두 선 사이 등)는 어느 선의 라벨인지
// 헷갈리므로 피함.

export const NODE_W = 210
export const NODE_H = 66
export const COL_GAP = 86
export const ROW_GAP = 50
export const PAD_X = 12 // 노드 안 글자 왼쪽 여백(아이콘 없을 때)
export const ICON_BOX = 38 // 노드 왼쪽 로고 칸
export const ICON_X = 64 // 로고가 있을 때 글자 시작 x
const FS = 14.5 // 간선 라벨·노드 보조 글자 크기 (SVG 단위, 화면 배율 약 0.83 → 11px 이상)
const ASC = 0.86 * FS // 기준선 위 글자 높이
const DESC = 0.22 * FS // 기준선 아래 글자 높이
const GAP = 6 // 선과 라벨 사이
const M = 2 // 겹침 판정 여유
const CLEAR = 12 // 다른 간선과 이보다 가까우면 '어느 선의 라벨인지 모호'
const AMBIG = 0.1 // 모호한 자리의 벌점 — 여러 개가 쌓여도 실제 겹침 1개보다 가벼움

// 글자 폭 추정 (Noto Sans KR 기준, 약간 넉넉하게)
const em = (ch) => {
  if (/[ᄀ-ᇿ㄰-㆏가-힯←-⇿]/.test(ch)) return 1
  if (ch === ' ') return 0.25
  if (ch === '·') return 0.3
  if (/[/().,:'|]/.test(ch)) return 0.34
  if (/[A-Z]/.test(ch)) return 0.62
  if (/[0-9]/.test(ch)) return 0.56
  if (/[a-z]/.test(ch)) return 0.48
  return 0.58
}
const textW = (s) => [...s].reduce((w, ch) => w + em(ch), 0) * FS

// 선분과 사각형 교차 (Liang–Barsky)
function segHitsRect(x1, y1, x2, y2, r) {
  let t0 = 0
  let t1 = 1
  const dx = x2 - x1
  const dy = y2 - y1
  const p = [-dx, dx, -dy, dy]
  const q = [x1 - r.x0, r.x1 - x1, y1 - r.y0, r.y1 - y1]
  for (let i = 0; i < 4; i++) {
    if (p[i] === 0) {
      if (q[i] < 0) return false
    } else {
      const t = q[i] / p[i]
      if (p[i] < 0) t0 = Math.max(t0, t)
      else t1 = Math.min(t1, t)
      if (t0 > t1) return false
    }
  }
  return true
}
const rectsHit = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1

// 점–선분 거리, 점–사각형 거리, (교차하지 않는) 선분–사각형 거리
function ptSeg(px, py, e) {
  const dx = e.x2 - e.x1
  const dy = e.y2 - e.y1
  const t = Math.max(0, Math.min(1, ((px - e.x1) * dx + (py - e.y1) * dy) / (dx * dx + dy * dy || 1)))
  return Math.hypot(px - (e.x1 + t * dx), py - (e.y1 + t * dy))
}
const ptRect = (px, py, r) => Math.hypot(Math.max(r.x0 - px, 0, px - r.x1), Math.max(r.y0 - py, 0, py - r.y1))
function segRectDist(e, r) {
  if (segHitsRect(e.x1, e.y1, e.x2, e.y2, r)) return 0
  return Math.min(
    ptSeg(r.x0, r.y0, e),
    ptSeg(r.x1, r.y0, e),
    ptSeg(r.x0, r.y1, e),
    ptSeg(r.x1, r.y1, e),
    ptRect(e.x1, e.y1, r),
    ptRect(e.x2, e.y2, r),
  )
}

export function computeArchLayout(arch) {
  const nodes = arch.nodes
  const cols = Math.max(...nodes.map((n) => n.col)) + 1
  const maxRow = Math.max(...nodes.map((n) => n.row))
  const height = maxRow * (NODE_H + ROW_GAP) + NODE_H
  const width = cols * NODE_W + (cols - 1) * COL_GAP
  const pos = {}
  for (const n of nodes) pos[n.id] = { x: n.col * (NODE_W + COL_GAP), y: n.row * (NODE_H + ROW_GAP) }

  const edges = arch.edges
    .filter((e) => pos[e.from] && pos[e.to])
    .map((e) => {
      const a = pos[e.from]
      const b = pos[e.to]
      const sameCol = b.x === a.x
      const forward = b.x > a.x
      const x1 = sameCol ? a.x + NODE_W / 2 : forward ? a.x + NODE_W : a.x
      const y1 = sameCol ? (b.y > a.y ? a.y + NODE_H : a.y) : a.y + NODE_H / 2
      const x2 = sameCol ? b.x + NODE_W / 2 : forward ? b.x : b.x + NODE_W
      let y2 = sameCol ? (b.y > a.y ? b.y : b.y + NODE_H) : b.y + NODE_H / 2
      let yy1 = y1
      // 같은 두 노드를 오가는 간선 한 쌍은 위아래로 벌려 두 줄로 — 화살표·라벨이 겹치지 않게
      const twin = !sameCol && arch.edges.some((o) => o.from === e.to && o.to === e.from)
      if (twin) {
        const off = forward ? -9 : 9
        yy1 += off
        y2 += off
      }
      return { ...e, x1, y1: yy1, x2, y2, sameCol, forward, w: textW(e.label) }
    })

  // 라벨 후보 자리: { x, y(기준선), anchor }
  const above = (y) => y - GAP - DESC
  const below = (y) => y + GAP + ASC
  function candidates(e) {
    if (e.sameCol) {
      const my = (e.y1 + e.y2) / 2 + (ASC - DESC) / 2
      return [
        { x: e.x1 + 8, y: my, anchor: 'start' },
        { x: e.x1 - 8, y: my, anchor: 'end' },
      ]
    }
    const dir = e.forward ? 1 : -1
    const srcX = e.x1 + 6 * dir
    const tgtX = e.x2 - 10 * dir
    const srcA = e.forward ? 'start' : 'end'
    const tgtA = e.forward ? 'end' : 'start'
    const mx = (e.x1 + e.x2) / 2
    const my = (e.y1 + e.y2) / 2
    if (e.y1 === e.y2) {
      return [
        { x: mx, y: above(my), anchor: 'middle' },
        { x: mx, y: below(my), anchor: 'middle' },
        { x: srcX, y: above(e.y1), anchor: srcA },
        { x: srcX, y: below(e.y1), anchor: srcA },
        { x: tgtX, y: above(e.y2), anchor: tgtA },
        { x: tgtX, y: below(e.y2), anchor: tgtA },
      ]
    }
    // 대각선: 출발점에서는 선이 멀어지는 쪽, 도착점에서는 선이 들어오지 않는 쪽
    const up = e.y2 < e.y1
    return [
      { x: srcX, y: up ? below(e.y1) : above(e.y1), anchor: srcA },
      { x: tgtX, y: up ? above(e.y2) : below(e.y2), anchor: tgtA },
      { x: srcX, y: up ? above(e.y1) : below(e.y1), anchor: srcA },
      { x: tgtX, y: up ? below(e.y2) : above(e.y2), anchor: tgtA },
    ]
  }
  const boxOf = (c, w) => {
    const x0 = c.anchor === 'start' ? c.x : c.anchor === 'end' ? c.x - w : c.x - w / 2
    return { x0: x0 - M, x1: x0 + w + M, y0: c.y - ASC - M, y1: c.y + DESC + M }
  }
  const nodeRects = Object.values(pos).map((p) => ({ x0: p.x, x1: p.x + NODE_W, y0: p.y, y1: p.y + NODE_H }))
  const bounds = { x0: -4, x1: width + 4, y0: -18, y1: height + 18 }
  // 같은 두 노드를 잇는 간선(왕복)은 한 선으로 겹쳐 그려지므로 서로 모호함 판정에서 뺌
  const pair = (a, b) => (a.from === b.from && a.to === b.to) || (a.from === b.to && a.to === b.from)
  function hits(box, placed, self) {
    let n = 0
    if (box.x0 < bounds.x0 || box.x1 > bounds.x1 || box.y0 < bounds.y0 || box.y1 > bounds.y1) n++
    for (const r of nodeRects) if (rectsHit(box, r)) n++
    for (const e of edges) {
      if (segHitsRect(e.x1, e.y1, e.x2, e.y2, box)) n++
      else if (e !== self && !pair(e, self) && segRectDist(e, box) < CLEAR) n += AMBIG
    }
    for (const b of placed) if (rectsHit(box, b)) n++
    return n
  }
  // 주어진 순서대로 자리를 고름. 모두 막히면 벌점이 가장 적은 자리.
  function place(order) {
    const placed = []
    const out = {}
    let cost = 0
    for (const i of order) {
      const e = edges[i]
      let best = null
      for (const c of candidates(e)) {
        const box = boxOf(c, e.w)
        const n = hits(box, placed, e)
        if (!best || n < best.n) best = { c, box, n }
        if (n === 0) break
      }
      placed.push(best.box)
      out[i] = best.c
      cost += best.n
    }
    return { out, cost }
  }
  const base = edges.map((_, i) => i)
  let best = place(base)
  // 막힌 라벨이 있으면 그 간선을 먼저 배치하는 순서로 한 번씩 다시 시도
  for (let k = 0; best.cost > 0 && k < edges.length; k++) {
    const trial = place([k, ...base.filter((i) => i !== k)])
    if (trial.cost < best.cost) best = trial
  }
  const labeled = edges.map((e, i) => ({ ...e, lx: best.out[i].x, ly: best.out[i].y, anchor: best.out[i].anchor }))
  return { width, height, pos, edges: labeled, cost: best.cost }
}

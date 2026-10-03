<script setup>
import { computed } from 'vue'
import { NODE_W, NODE_H, PAD_X, ICON_BOX, ICON_X, computeArchLayout } from './archLayout.js'
import { icons } from '../icons.js'
import Icon from './Icon.vue'

// 아키텍처 구조도. 배치 계산(노드 격자·간선·라벨 자리)은 archLayout.js.
// 그리는 순서: 간선 → 노드 → 간선 라벨(배경색 테두리).
// owner: mine(본인 담당) · team(팀원) · external(외부)
// icon: icons.js 이름 — 노드 왼쪽 흰 칸에 브랜드 색 로고(선 아이콘은 글자색)
const props = defineProps({ arch: { type: Object, required: true } })

const layout = computed(() => computeArchLayout(props.arch))
const iconOf = (n) => (n.icon ? icons[n.icon] : null)
const textX = (n) => layout.value.pos[n.id].x + (iconOf(n) ? ICON_X : PAD_X)
const ICON_PAD = (ICON_BOX - 22) / 2

// 좁은 화면용: 노드를 담당(본인·팀원·외부)별로 묶고 각 노드에서 나가는 흐름을 나열
const GROUPS = [
  ['mine', '본인 담당'],
  ['team', '팀원 담당'],
  ['external', '외부'],
]
const groups = computed(() => {
  const byId = Object.fromEntries(props.arch.nodes.map((n) => [n.id, n]))
  return GROUPS.map(([owner, title]) => ({
    owner,
    title,
    nodes: props.arch.nodes
      .filter((n) => n.owner === owner)
      .map((n) => ({
        ...n,
        flows: props.arch.edges.filter((e) => e.from === n.id && byId[e.to]).map((e) => ({ to: byId[e.to], label: e.label })),
      })),
  })).filter((g) => g.nodes.length)
})
</script>

<template>
  <figure class="arch">
    <div class="arch-canvas">
      <svg
        :viewBox="`-4 -18 ${layout.width + 8} ${layout.height + 36}`"
        role="img"
        aria-label="아키텍처 구조도"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" fill="currentColor" />
          </marker>
        </defs>
        <g class="edges">
          <line
            v-for="(e, i) in layout.edges"
            :key="i"
            :x1="e.x1"
            :y1="e.y1"
            :x2="e.x2"
            :y2="e.y2"
            marker-end="url(#arrow)"
          />
        </g>
        <g v-for="n in arch.nodes" :key="n.id" :class="['node', n.owner]">
          <rect class="box" :x="layout.pos[n.id].x" :y="layout.pos[n.id].y" :width="NODE_W" :height="NODE_H" rx="8" />
          <template v-if="iconOf(n)">
            <rect
              class="tile"
              :x="layout.pos[n.id].x + 12"
              :y="layout.pos[n.id].y + (NODE_H - ICON_BOX) / 2"
              :width="ICON_BOX"
              :height="ICON_BOX"
              rx="9"
            />
            <svg
              :x="layout.pos[n.id].x + 12 + ICON_PAD"
              :y="layout.pos[n.id].y + (NODE_H - ICON_BOX) / 2 + ICON_PAD"
              width="22"
              height="22"
              :viewBox="iconOf(n).viewBox ?? '0 0 24 24'"
              :fill="iconOf(n).type === 'fill' ? iconOf(n).color ?? 'currentColor' : 'none'"
              :stroke="iconOf(n).type === 'stroke' ? 'currentColor' : 'none'"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="logo"
            >
              <path v-for="(d, i) in iconOf(n).paths" :key="i" :d="d" />
            </svg>
          </template>
          <text :x="textX(n)" :y="layout.pos[n.id].y + 29" class="node-label">{{ n.label }}</text>
          <text :x="textX(n)" :y="layout.pos[n.id].y + 50" class="node-sub">{{ n.sub }}</text>
        </g>
        <g class="edge-labels">
          <text v-for="(e, i) in layout.edges" :key="i" :x="e.lx" :y="e.ly" :text-anchor="e.anchor" class="edge-label">
            {{ e.label }}
          </text>
        </g>
      </svg>
    </div>
    <div class="arch-list">
      <section v-for="g in groups" :key="g.owner" :class="['group', g.owner]">
        <h4 class="mono-label">{{ g.title }}</h4>
        <ul>
          <li v-for="n in g.nodes" :key="n.id">
            <p class="n-head">
              <Icon v-if="n.icon" :name="n.icon" class="n-icon" :style="{ color: icons[n.icon]?.color }" />
              <strong>{{ n.label }}</strong><span class="n-sub">{{ n.sub }}</span>
            </p>
            <ul v-if="n.flows.length" class="flows">
              <li v-for="f in n.flows" :key="f.to.id">
                <span aria-hidden="true">→</span> <span :class="['to', f.to.owner]">{{ f.to.label }}</span>
                <span class="via">{{ f.label }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
    <figcaption class="legend mono-label">
      <span><i class="sw mine"></i>본인 담당</span>
      <span><i class="sw team"></i>팀원 담당</span>
      <span><i class="sw external"></i>외부</span>
    </figcaption>
  </figure>
</template>

<style scoped>
.arch {
  margin: 0;
  display: grid;
  gap: 12px;
  min-width: 0;
}

.arch-canvas {
  min-width: 0;
}

.arch-list {
  display: none;
}

.arch-canvas > svg {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  overflow: visible;
  color: var(--fg-muted);
}

line {
  stroke: currentColor;
  stroke-width: 1.4;
}

.edge-label {
  font-family: var(--f-kr);
  font-size: 14.5px;
  fill: var(--fg-muted);
  paint-order: stroke;
  stroke: var(--bg);
  stroke-width: 5px;
  stroke-linejoin: round;
}

.node .box {
  fill: var(--bg);
  stroke: var(--rule);
  stroke-width: 1.2;
}

.node.mine .box {
  fill: color-mix(in srgb, var(--acc) 10%, var(--bg));
  stroke: var(--acc);
  stroke-width: 1.6;
}

.node.external .box {
  stroke-dasharray: 4 3;
}

/* 로고 칸: 흰 바탕 위에 브랜드 색 로고 */
.node .tile {
  fill: #fff;
  stroke: var(--rule);
  stroke-width: 1;
}

.node.mine .tile {
  stroke: color-mix(in srgb, var(--acc) 45%, transparent);
}

.logo {
  color: var(--fg);
}

.node-label {
  font-family: var(--f-display);
  font-size: 18px;
  font-weight: 600;
  fill: var(--fg);
}

.node.mine .node-label {
  fill: var(--acc);
}

.node-sub {
  font-family: var(--f-kr);
  font-size: 14.5px;
  fill: var(--fg-muted);
}

.legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px 24px;
  color: var(--fg-muted);
  font-family: var(--f-kr);
  font-size: 17px;
  text-transform: none;
  letter-spacing: 0;
}

.legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.sw {
  width: 22px;
  height: 14px;
  border: 1.2px solid var(--rule);
  border-radius: 2px;
}

.sw.mine {
  border-color: var(--acc);
  background: color-mix(in srgb, var(--acc) 15%, transparent);
}

.sw.external {
  border-style: dashed;
}

/* 좁은 화면: 축소된 구조도 대신 담당별 노드·흐름 목록 */
.n-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  vertical-align: -4px;
}

@media screen and (max-width: 899px) {
  .arch-canvas,
  .legend {
    display: none;
  }

  .arch-list {
    display: grid;
    gap: 18px;
  }

  .group h4 {
    padding-bottom: 6px;
    margin-bottom: 4px;
    border-bottom: 1px solid var(--rule);
    color: var(--fg-muted);
  }

  .group.mine h4 {
    color: var(--acc);
    border-bottom-color: var(--acc);
  }

  .group > ul > li {
    padding: 8px 0;
    border-bottom: 1px solid var(--rule);
  }

  .n-head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 2px 10px;
  }

  .n-head strong {
    font-family: var(--f-display);
    font-size: 18px;
    font-weight: 600;
  }

  .group.mine .n-head strong {
    color: var(--acc);
  }

  .n-sub {
    font-size: 15px;
    color: var(--fg-muted);
  }

  .flows {
    margin-top: 4px;
    font-size: 16px;
    line-height: 1.5;
  }

  .to.mine {
    color: var(--acc);
    font-weight: 600;
  }

  .via {
    margin-left: 6px;
    font-size: 15px;
    color: var(--fg-muted);
  }
}
</style>

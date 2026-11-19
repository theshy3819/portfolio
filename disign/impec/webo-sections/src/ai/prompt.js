import { SECTIONS } from '../schema/sections.js';
import { THEMES } from '../themes.js';
import { BLUEPRINTS, layoutSkeleton } from '../blueprints.js';

/**
 * 업종 하나에 대한 AI 지시문을 만든다. 출력 모양은 JSON Schema(structured output)로 따로 강제하고,
 * 이 글은 "무엇을 고를 수 있고 무엇을 쓰면 안 되는지"만 알려 준다.
 */
export function buildPrompt(industryId, layoutId) {
  const bp = BLUEPRINTS[industryId];
  const sk = layoutSkeleton(industryId, layoutId);
  const lines = [];
  lines.push(`너는 WebO 사이트 구성기다. ${bp.label} 사이트를 사이트 JSON 한 벌로 만든다.`);
  lines.push('HTML·CSS·스타일 값은 절대 쓰지 않는다. 아래 카탈로그의 type·variant 를 고르고 props 의 문구만 채운다.');
  lines.push('전화·주소·시간·프로그램·구성원 같은 사실은 business 에만 넣고, 문구에 다시 적지 않는다. 사장님이 준 값에 없는 사실(수치·경력·효과)은 지어내지 않는다.');
  lines.push('');
  lines.push(`## 업종 규칙\n- ${bp.mode}\n- 말투: ${bp.voice}`);
  lines.push(`- 필수 섹션: ${bp.required.join(', ')}`);
  lines.push(`- 쓸 수 있는 테마: ${bp.themes.map((t) => `${t}(${THEMES[t].label})`).join(', ')}`);
  lines.push('- 쓰면 안 되는 표현:');
  for (const r of bp.forbidden) lines.push(`  - /${r.pattern}/ → ${r.why}${r.level === 'warning' ? ' (쓰려면 사장님 확인 필요)' : ''}`);
  lines.push('');
  lines.push('## 섹션 카탈로그(이 업종에서 허용된 것만)');
  for (const [type, variants] of Object.entries(bp.allow)) {
    const def = SECTIONS[type];
    lines.push(`- ${type} — ${def.label}: ${def.use}`);
    for (const v of variants) lines.push(`  - ${v}: ${def.variants[v]}`);
  }
  lines.push('');
  lines.push('## 추천 레이아웃(출발점. 선택 섹션은 빼거나 순서를 바꿔도 된다)');
  for (const l of bp.layouts) lines.push(`- ${l.id} ${l.name} [${l.theme}]: ${l.pitch}\n  ${l.sections.map(([t, v]) => `${t}.${v}`).join(' → ')}`);
  lines.push('');
  lines.push(`이번에 쓸 레이아웃: ${layoutId ?? bp.layouts[0].id} (theme=${sk.theme})`);
  return lines.join('\n');
}

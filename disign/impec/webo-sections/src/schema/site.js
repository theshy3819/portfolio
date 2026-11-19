import { z } from 'zod';
import { business } from './business.js';
import { sectionNode, SECTIONS } from './sections.js';
import { THEMES } from '../themes.js';

/* 사이트 한 벌 = 매장 정보 + 테마 이름 + 섹션 목록. AI 가 내놓는 값이 이 모양이다. */
export const site = z.object({
  version: z.literal(1),
  industry: z.string(),
  layout: z.string().describe('청사진의 레이아웃 id. 예: c1'),
  theme: z.enum(Object.keys(THEMES)),
  business,
  sections: z.array(sectionNode).min(3).max(16),
  dock: z.boolean().default(true).describe('휴대폰 하단 전화·문의 두 칸 바')
});

/**
 * 모양 검사 → 청사진 검사 → 문구 규칙 검사 순서로 본다.
 * errors 가 하나라도 있으면 게시하지 않고, warnings 는 사장님 확인 목록으로 보낸다.
 */
export function validateSite(input, blueprint) {
  const parsed = site.safeParse(input);
  if (!parsed.success) {
    return {
      ok: false, data: null, warnings: [],
      errors: parsed.error.issues.map((i) => `${i.path.join('.') || '(뿌리)'}: ${i.message}`)
    };
  }
  const s = parsed.data;
  const errors = [], warnings = [];
  if (blueprint) {
    if (s.industry !== blueprint.id) errors.push(`industry 가 ${blueprint.id} 가 아닙니다`);
    if (!blueprint.themes.includes(s.theme)) errors.push(`테마 ${s.theme} 는 이 업종에서 쓰지 않습니다`);
    const types = s.sections.map((n) => n.type);
    for (const need of blueprint.required) if (!types.includes(need)) errors.push(`필수 섹션 ${need} 가 없습니다`);
    s.sections.forEach((n, i) => {
      const allow = blueprint.allow[n.type];
      if (!allow) errors.push(`sections.${i}: ${n.type} 는 이 업종에서 쓰지 않습니다`);
      else if (!allow.includes(n.variant)) errors.push(`sections.${i}: ${n.type}.${n.variant} 는 이 업종에서 쓰지 않습니다(허용: ${allow.join(', ')})`);
    });
    for (const [t, max] of Object.entries({ header: 1, hero: 1, footer: 1, notice: 1 }))
      if (types.filter((x) => x === t).length > max) errors.push(`${t} 는 하나만 둡니다`);
    const ids = s.sections.map((n) => n.id);
    ids.forEach((id, i) => { if (ids.indexOf(id) !== i) errors.push(`섹션 id ${id} 가 겹칩니다`); });
    for (const n of s.sections) {
      for (const a of [...(n.props.cta ? [].concat(n.props.cta) : [])])
        if (a.action === 'section' && !ids.includes(a.to)) errors.push(`${n.id}: 버튼이 없는 섹션 ${a.to} 로 갑니다`);
      if (n.type === 'header') for (const l of n.props.links) if (!ids.includes(l.to)) errors.push(`머리줄 링크 ${l.label} 가 없는 섹션 ${l.to} 로 갑니다`);
    }
    const lint = lintCopy(s, blueprint.forbidden ?? []);
    for (const hit of lint) (hit.level === 'error' ? errors : warnings).push(hit.msg);
  }
  return { ok: errors.length === 0, data: s, errors, warnings };
}

/** props 와 매장 정보 안의 모든 글자를 훑어 업종별 금지 표현을 찾는다. */
export function lintCopy(s, rules) {
  const hits = [];
  const walk = (v, path) => {
    if (typeof v === 'string') {
      for (const r of rules) {
        const m = v.match(new RegExp(r.pattern, 'u'));
        if (m) hits.push({ level: r.level, msg: `${path}: "${m[0]}" — ${r.why}` });
      }
    } else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}.${i}`));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'src') walk(x, `${path}.${k}`);
  };
  walk(s.business, 'business');
  s.sections.forEach((n) => walk(n.props, n.id));
  return hits;
}

export { SECTIONS };

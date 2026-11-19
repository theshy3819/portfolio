/* 예시 사이트 전부를 모양·청사진·문구 규칙으로 검사한다. 하나라도 틀리면 종료 코드 1. */
import { SAMPLES } from '../src/samples/index.js';
import { BLUEPRINTS } from '../src/blueprints.js';
import { validateSite } from '../src/schema/site.js';

let bad = 0;
for (const [ind, layouts] of Object.entries(SAMPLES)) {
  for (const [id, s] of Object.entries(layouts)) {
    const r = validateSite(s, BLUEPRINTS[ind]);
    console.log(`${r.ok ? 'OK  ' : 'FAIL'} ${ind}/${id}`);
    for (const e of r.errors) console.log('   ✗', e);
    for (const w of r.warnings) console.log('   !', w);
    if (!r.ok) bad++;
  }
}
process.exit(bad ? 1 : 0);

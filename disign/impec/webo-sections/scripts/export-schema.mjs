/* AI 에게 건넬 파일을 schema/ 에 만든다.
   - site.schema.json : 사이트 JSON 전체 모양(structured output 에 그대로 넣는다)
   - prompt.<업종>.md : 업종별 지시문 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { z } from 'zod';
import { site } from '../src/schema/site.js';
import { BLUEPRINTS } from '../src/blueprints.js';
import { buildPrompt } from '../src/ai/prompt.js';

const out = new URL('../schema/', import.meta.url);
mkdirSync(out, { recursive: true });
const schema = z.toJSONSchema(site, { io: 'input' });
writeFileSync(new URL('site.schema.json', out), JSON.stringify(schema, null, 2));
for (const id of Object.keys(BLUEPRINTS)) writeFileSync(new URL(`prompt.${id}.md`, out), buildPrompt(id) + '\n');
console.log('schema/site.schema.json', (JSON.stringify(schema).length / 1024).toFixed(1) + 'KB');
console.log('prompts:', Object.keys(BLUEPRINTS).join(', '));

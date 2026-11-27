// 포트폴리오를 A4 가로 PDF로 저장: npm run pdf
// dist를 vite preview로 띄우고, 설치된 Chrome(헤드리스)으로 인쇄 스타일(@page A4 landscape) 그대로 PDF를 만든다.
// Chrome 경로가 다르면 CHROME 환경 변수로 지정. 결과: pdf/송호영_포트폴리오.pdf (저장소에는 올리지 않음)
import { spawn } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { preview } from 'vite'

const CHROME = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
const OUT = resolve('pdf', '송호영_포트폴리오.pdf')
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const server = await preview({ preview: { port: 4179, strictPort: false, open: false }, logLevel: 'silent' })
const url = server.resolvedUrls.local[0]

const port = 9400 + Math.floor(Math.random() * 400)
const profileDir = mkdtempSync(join(tmpdir(), 'pdf-chrome-'))
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${profileDir}`, 'about:blank'], { stdio: 'ignore' })

try {
  let target
  for (let i = 0; i < 50 && !target; i++) {
    try {
      target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((t) => t.type === 'page')
    } catch {}
    if (!target) await sleep(200)
  }
  if (!target) throw new Error('Chrome에 연결하지 못했습니다')

  const ws = new WebSocket(target.webSocketDebuggerUrl)
  await new Promise((r) => ws.addEventListener('open', r))
  let id = 0
  const pending = new Map()
  ws.addEventListener('message', (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) (pending.get(m.id)(m), pending.delete(m.id))
  })
  const send = (method, params = {}) =>
    new Promise((r) => {
      const i = ++id
      pending.set(i, r)
      ws.send(JSON.stringify({ id: i, method, params }))
    })
  const evaluate = async (expression) =>
    (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.result.value

  await send('Page.enable')
  await send('Page.navigate', { url })
  await sleep(1500)
  // 모든 이미지와 글꼴이 다 그려진 뒤에 인쇄
  const pages = await evaluate(`Promise.all([...document.images].map((i) => { i.loading = 'eager'; return i.decode().catch(() => {}) }))
    .then(() => document.fonts.ready).then(() => document.querySelectorAll('main > .page').length)`)
  const res = await send('Page.printToPDF', { preferCSSPageSize: true, printBackground: true })
  if (!res.result) throw new Error('PDF 생성 실패: ' + JSON.stringify(res.error))
  mkdirSync(resolve('pdf'), { recursive: true })
  writeFileSync(OUT, Buffer.from(res.result.data, 'base64'))
  console.log(`${pages}쪽 → ${OUT}`)
  ws.close()
} finally {
  chrome.kill()
  await server.close()
  await sleep(300)
  // 임시 Chrome 프로필 정리: Chrome이 파일을 늦게 놓으면 못 지울 수 있지만 PDF는 이미 저장됐으므로 무시
  try {
    rmSync(profileDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
  } catch {}
}

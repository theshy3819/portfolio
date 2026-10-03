// 브랜드 로고: simple-icons (CC0). AWS·Adobe 로고는 simple-icons에서 제공하지 않아
// AWS는 일반 구름 아이콘(cloud), Adobe 앱은 글자 배지(Ps·Ai·Pr)로 대신합니다.
// 선 아이콘: lucide (ISC) 경로를 옮겨 씀.
import {
  siPython,
  siJavascript,
  siTypescript,
  siDjango,
  siPytorch,
  siVuedotjs,
  siReact,
  siGit,
  siFastapi,
  siDocker,
  siGithub,
  siThreedotjs,
  siHtml5,
  siCss,
  siFigma,
  siMysql,
  siPinia,
  siTanstack,
  siVite,
  siNginx,
  siPytest,
  siOpengl,
  siSqlite,
  siSqlalchemy,
  siPostgresql,
  siGitlab,
  siApachehadoop,
  siApachespark,
  siSpringboot,
  siReactquery,
  siRos,
  siBluetooth,
  siNvidia,
  siRedis,
  siAxios,
  siJira,
} from 'simple-icons'

// color: 브랜드 색 — 구조도처럼 로고를 색으로 보여 줄 때 씀(스킬 쪽은 글자색 그대로)
const brand = (si) => ({ type: 'fill', paths: [si.path], color: `#${si.hex}` })

// MySQL: 공식 마크 아래의 'MySQL' 글자는 아이콘 크기에서 읽히지 않아 돌고래(눈 + 몸)만 씀.
// 돌고래 둘레로 viewBox를 좁혀 크기를 맞추고, 선 그림이라 획을 더해 옆 로고들과 무게를 맞춤.
const mysqlDolphin = (() => {
  const parts = siMysql.path.split(/(?=[Mm])/)
  const body = parts[7]
  if (parts.length !== 8 || !body?.startsWith('m9.382-5.852')) return brand(siMysql)
  // 몸통은 상대 좌표(m)로 시작하므로 절대 좌표 시작점으로 바꿔 붙임
  const d = parts[0] + 'M23.224 11.311' + body.slice('m9.382-5.852'.length)
  return { type: 'fill', paths: [d], viewBox: '13.672 3.26 10.828 10.828', weight: 0.5 }
})()
const line = (...paths) => ({ type: 'stroke', paths })
const badge = (letters) => ({ type: 'badge', letters })

export const icons = {
  python: brand(siPython),
  javascript: brand(siJavascript),
  typescript: brand(siTypescript),
  django: brand(siDjango),
  pytorch: brand(siPytorch),
  vue: brand(siVuedotjs),
  react: brand(siReact),
  mysql: mysqlDolphin,
  git: brand(siGit),
  fastapi: brand(siFastapi),
  docker: brand(siDocker),
  github: brand(siGithub),
  three: brand(siThreedotjs),
  html: brand(siHtml5),
  css: brand(siCss),
  figma: brand(siFigma),
  pinia: { ...brand(siPinia), color: '#e2b100' },
  tanstack: brand(siTanstack),
  vite: brand(siVite),
  nginx: brand(siNginx),
  pytest: brand(siPytest),
  glsl: brand(siOpengl),
  sqlite: brand(siSqlite),
  sqlalchemy: brand(siSqlalchemy),
  postgresql: brand(siPostgresql),
  gitlab: brand(siGitlab),
  // 흰 칸 위에서 너무 옅은 브랜드 색은 같은 계열로 진하게
  hadoop: { ...brand(siApachehadoop), color: '#1f8ccf' },
  spark: brand(siApachespark),
  springboot: brand(siSpringboot),
  reactquery: brand(siReactquery),
  ros: brand(siRos),
  bluetooth: brand(siBluetooth),
  nvidia: brand(siNvidia),
  redis: brand(siRedis),
  axios: brand(siAxios),
  jira: brand(siJira),
  newspaper: line('M15 18h-5', 'M18 14h-8', 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2', 'M11 6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z'),
  sparkles: line('M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z', 'M20 3v4', 'M22 5h-4', 'M4 17v2', 'M5 18H3'),
  landmark: line('M10 18v-7', 'M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z', 'M14 18v-7', 'M18 18v-7', 'M3 22h18', 'M6 18v-7'),
  layers: line('M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z', 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12', 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17'),
  websocket: line('m16 3 4 4-4 4', 'M20 7H4', 'm8 21-4-4 4-4', 'M4 17h16'),
  photoshop: badge('Ps'),
  illustrator: badge('Ai'),
  premiere: badge('Pr'),
  trophy: line('M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978', 'M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978', 'M18 9h1.5a1 1 0 0 0 0-5H18', 'M4 22h16', 'M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z', 'M6 9H4.5a1 1 0 0 1 0-5H6'),
  cloud: line('M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z'),
  mail: line('M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z', 'm22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'),
  award: line('m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526', 'M18 8a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z'),
  image: line('M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z', 'M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z', 'm21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'),
  arrow: line('M5 12h14', 'm12 5 7 7-7 7'),
}

// 포트폴리오 내용. 이 파일만 고치면 사이트·인쇄물이 함께 바뀝니다.
// 프로젝트 내용은 각 저장소(주만추 · S15P11C201 · S15P21C205)의 본인 커밋·코드와 팀 발표 자료에서 확인한 사실만 담았습니다.
// 화면 이미지: src/assets/shots/ 에 파일을 넣고 hero.file 또는 ux[].file 에 파일 이름을 적습니다.

export const meta = {
  "name": "송호영",
  "nameEn": "Song Hoyoung",
  "role": "Front-end Engineer",
  "date": "2026.10"
}

export const contact = {
  "phone": "010-8209-1619",
  "email": "shy3819@naver.com",
  "github": "github.com/theshy3819",
  // 마지막 쪽 큰 문장 — 한 줄씩
  "closing": ["끝까지 봐 주셔서", "감사합니다."]
}

export const profile = {
  "role": "Front-end Engineer",
  "catchphrase": "사용성을 설계하며 성장하는 개발자입니다",
  "intro_headline": "UX/UI 디자이너에서 개발자로",
  "intro": ""
}

export const history = {
  "awards": [
    {
      "when": "2026",
      "title": "2학기 공통 프로젝트 광주 2반 1등",
      "org": "삼성 청년 SW·AI 아카데미(SSAFY) · 프로젝트 Lumi"
    }
  ],
  "certificates": [
    {
      "kind": "국가기술자격",
      "name": "웹디자인기능사"
    },
    {
      "kind": "국가기술자격",
      "name": "컴퓨터그래픽스운용기능사"
    }
  ],
  "education": [
    {
      "when": "2026 ~ 현재",
      "title": "삼성 청년 SW·AI 아카데미(SSAFY) 15기",
      "sub": "이수 중"
    },
    {
      "when": "1년 3개월",
      "title": "광고대행사 콘텐츠 마케팅 · 웹디자인",
      "sub": "경력"
    },
    {
      "when": "졸업",
      "title": "전남대학교 경제학과",
      "sub": ""
    }
  ]
}

// 개발자가 된 이유 (프로필 다음 쪽) — 3단계 흐름 + 웹디자인 작업 4건 (이미지: src/assets/shots/design-*.jpg)
export const story = {
  "headline": "디자인하던 화면을, 이제 직접 만듭니다",
  "steps": [
    {
      "tag": "광고대행사 · 1년 3개월",
      "title": "웹디자이너",
      "text": "사용성을 설계할수록 서비스의 원리가 궁금해졌고, GPT-4o 공개를 계기로 개발을 배우기로 했습니다."
    },
    {
      "tag": "2026 · SSAFY 15기",
      "title": "개발자로 전환",
      "text": "알고리즘을 익히고, REST API로 통신하는 웹 서비스를 팀으로 기획·개발·배포했습니다."
    },
    {
      "tag": "Now · AX",
      "title": "AI를 쓰기 쉬운 화면으로",
      "text": "AX(AI 전환) 프로젝트 WebO에서 프론트엔드 개발과 추천 레이아웃 제작을 맡고 있습니다."
    }
  ],
  "works": [
    { "name": "모리프", "kind": "대표작 · 한의원", "file": "design-morif.jpg", "device": "web", "tint": "#c4122e" },
    { "name": "쏠테로", "kind": "모빌리티 · 모바일", "file": "design-soltero-phone.webp", "device": "mobile", "tint": "#5b7aa6" },
    { "name": "금다연", "kind": "한정식 레스토랑", "file": "design-geumdayeon.jpg", "device": "web", "tint": "#c8913a" },
    { "name": "메종드엘", "kind": "웨딩홀", "file": "design-maisondel.jpg", "device": "web", "tint": "#6fc24a" }
  ],
  "worksStat": "4 / 4",
  "worksNote": "디자인한 사이트 모두 업체 제작 수주"
}

export const skills = [
  {
    "group": "Frontend",
    "items": [
      {
        "name": "TypeScript",
        "level": 3,
        "evidence": "COSMOS",
        "icon": "typescript"
      },
      {
        "name": "JavaScript",
        "level": 4,
        "evidence": "주만추 · Lumi",
        "icon": "javascript"
      },
      {
        "name": "React",
        "level": 3,
        "evidence": "COSMOS",
        "icon": "react"
      },
      {
        "name": "Vue.js · Pinia",
        "level": 4,
        "evidence": "Lumi · 주만추",
        "icon": "vue"
      },
      {
        "name": "Three.js",
        "level": 2,
        "evidence": "COSMOS (AI와 함께 구현)",
        "icon": "three"
      },
      {
        "name": "HTML · CSS",
        "level": 4,
        "evidence": "웹디자인기능사 · 전 프로젝트",
        "icon": "html"
      }
    ]
  },
  {
    "group": "Backend",
    "items": [
      {
        "name": "Python",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "python"
      },
      {
        "name": "FastAPI",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "fastapi"
      },
      {
        "name": "WebSocket",
        "level": 3,
        "evidence": "Lumi 실시간 화면",
        "icon": "websocket"
      },
      {
        "name": "SQLite",
        "level": 3,
        "evidence": "Lumi 서버",
        "icon": "sqlite"
      },
      {
        "name": "pytest",
        "level": 3,
        "evidence": "Lumi 서버 테스트",
        "icon": "pytest"
      },
      {
        "name": "Django",
        "level": 3,
        "evidence": "주만추 API 연동 · 학습",
        "icon": "django"
      }
    ]
  },
  {
    "group": "Data·Infra",
    "items": [
      {
        "name": "Git",
        "level": 3,
        "evidence": "모든 팀 프로젝트",
        "icon": "git"
      },
      {
        "name": "Vite",
        "level": 3,
        "evidence": "COSMOS · Lumi · 주만추",
        "icon": "vite"
      },
      {
        "name": "Docker",
        "level": 3,
        "evidence": "Lumi 웹 컨테이너",
        "icon": "docker"
      },
      {
        "name": "nginx",
        "level": 3,
        "evidence": "COSMOS · Lumi 배포",
        "icon": "nginx"
      },
      {
        "name": "AWS",
        "level": 2,
        "evidence": "EC2 배포 문서화",
        "icon": "cloud"
      },
      {
        "name": "PyTorch",
        "level": 1,
        "evidence": "학습 경험",
        "icon": "pytorch"
      }
    ]
  },
  {
    "group": "Design · Tools",
    "items": [
      {
        "name": "Figma",
        "level": 4,
        "evidence": "웹사이트 4건 · 모두 제작 수주",
        "icon": "figma"
      },
      {
        "name": "Photoshop",
        "level": 3,
        "evidence": "광고대행사 실무",
        "icon": "photoshop"
      },
      {
        "name": "Illustrator",
        "level": 3,
        "evidence": "광고대행사 실무",
        "icon": "illustrator"
      },
      {
        "name": "Premiere Pro",
        "level": 3,
        "evidence": "프로젝트 영상 제작 담당",
        "icon": "premiere"
      },
      {
        "name": "Jira",
        "level": 3,
        "evidence": "팀 프로젝트 이슈·일정 관리",
        "icon": "jira"
      }
    ]
  }
]

export const projects = [
  {
    "id": "cosmos",
    "name": "COSMOS",
    "icon": "cosmos.png",
    "title": "빅데이터 기반 AI 활용 기업 관계 시각화 서비스",
    "award": "2026 뉴스빅데이터 해커톤 본선 진출 (한국언론진흥재단)",
    "period": "2026.08 ~ 2026.09 (5주)",
    "team": "6인 · FE 2 · BE 2 · Data 1 · AI 1",
    "hero": {
      "layout": "web-phones",
      "web": "cosmos-hero.jpg",
      "phones": [
        "cosmos-phone-galaxy.webp",
        "cosmos-phone-panel.webp"
      ],
      "glow": [
        "#3b2fff",
        "#8f5bff"
      ],
      "caption": "PC 전체 은하 · 모바일 은하와 기업 패널"
    },
    "ux_lead": "처음 보는 3D 관계망에서도 길을 잃지 않도록",
    "role": "FE",
    "summary": "빅데이터 기반 AI 활용 기업 관계 시각화 서비스",
    "background": {
      "headline": "수많은 뉴스⁠·⁠공시로 기업 관계를 산출할 수 없을까?",
      "points": [
        "뉴스⁠·⁠공시⁠·⁠주가 빅데이터를 Hadoop(HDFS)에 분산 저장",
        "AI로 기업 간 관계를 찾고 Spark로 기간별 점수 집계",
        "산출한 관계망을 3D 은하로 시각화해 한눈에 탐색"
      ]
    },
    "ux": [
      {
        "title": "미리보기와 워프 분리",
        "desc": "클릭은 미리보기, 더블클릭은 관계망 이동으로 분리",
        "file": "cosmos-ux-warp.jpg",
        "caption": "워프 전환 (배포 화면)"
      },
      {
        "title": "두 기업 사이 경로",
        "desc": "기업을 고른 뒤 다른 기업에 커서를 올리면 연결 경로 표시",
        "file": "cosmos-ux-path.jpg",
        "caption": "경로 스트립 (배포 화면)"
      },
      {
        "title": "이유부터 읽는 툴팁",
        "desc": "관계선 툴팁을 설명 → 점수 → 근거 문장 순으로 단계 노출",
        "file": "cosmos-ux-tooltip.jpg",
        "caption": "관계선 툴팁 (배포 화면)"
      }
    ],
    "arch": {
      "lead": "분석된 관계 데이터가 3D 은하까지 오는 흐름",
      "notes": [
        "뉴스·공시·주가 원본을 Hadoop HDFS에 분산 보관",
        "AI 관계 분석 → Spark 기간 집계 → PostgreSQL에 결과만 게시",
        "Spring Boot API → TanStack Query로 3D 은하·탐색 UI가 데이터 공유"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "pipe",
          "icon": "hadoop",
          "label": "뉴스·공시·주가",
          "sub": "Hadoop HDFS 저장",
          "owner": "team",
          "col": 0,
          "row": 0
        },
        {
          "id": "ai",
          "icon": "spark",
          "label": "AI 관계 분석",
          "sub": "Spark로 기간 집계",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "pg",
          "icon": "postgresql",
          "label": "PostgreSQL",
          "sub": "게시된 관계 스냅샷",
          "owner": "team",
          "col": 1,
          "row": 1
        },
        {
          "id": "api",
          "icon": "springboot",
          "label": "Spring Boot",
          "sub": "REST·인증 API",
          "owner": "team",
          "col": 1,
          "row": 0
        },
        {
          "id": "client",
          "icon": "typescript",
          "label": "API 클라이언트",
          "sub": "인증·응답 정리",
          "owner": "mine",
          "col": 2,
          "row": 0
        },
        {
          "id": "query",
          "icon": "reactquery",
          "label": "TanStack Query",
          "sub": "화면 공용 데이터",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "scene",
          "icon": "three",
          "label": "3D 은하 화면",
          "sub": "R3F·Three.js",
          "owner": "mine",
          "col": 3,
          "row": 0
        },
        {
          "id": "hud",
          "icon": "react",
          "label": "탐색 UI",
          "sub": "도크·툴팁·경로",
          "owner": "mine",
          "col": 3,
          "row": 1
        },
        {
          "id": "pages",
          "icon": "newspaper",
          "label": "뉴스·커뮤니티",
          "sub": "FE 팀원 주도",
          "owner": "team",
          "col": 3,
          "row": 2
        }
      ],
      "edges": [
        {
          "from": "pipe",
          "to": "ai",
          "label": "원본 전달"
        },
        {
          "from": "ai",
          "to": "pg",
          "label": "집계 적재"
        },
        {
          "from": "pg",
          "to": "api",
          "label": "스냅샷 조회"
        },
        {
          "from": "api",
          "to": "client",
          "label": "JSON 응답"
        },
        {
          "from": "client",
          "to": "query",
          "label": "정리된 데이터"
        },
        {
          "from": "query",
          "to": "scene",
          "label": "은하 데이터"
        },
        {
          "from": "query",
          "to": "hud",
          "label": "관계 상세"
        },
        {
          "from": "query",
          "to": "pages",
          "label": "같은 데이터"
        },
        {
          "from": "hud",
          "to": "scene",
          "label": "조작 상태"
        }
      ]
    }
  },
  {
    "id": "lumi",
    "name": "Lumi",
    "icon": "lumi.png",
    "title": "저시력자 동행 로봇의 실시간 관제 웹",
    "period": "2026.07 ~ 2026.08 (4주)",
    "team": "6인 · ROS 2 · Embedded 2 · AI 1 · Web 1(본인)",
    "award": "SSAFY 2학기 공통 프로젝트 광주 2반 1등",
    "hero": {
      "layout": "web-art",
      "web": "lumi-hero.jpg",
      "art": "lumi-robot-flip.webp",
      "artAlt": "Lumi 보행 보조 로봇 일러스트",
      "glow": [
        "#ffb547",
        "#ff8a3d"
      ],
      "caption": "관제 대시보드 · Lumi 로봇 일러스트"
    },
    "ux_lead": "관리자가 로봇 상태를 오해하지 않도록",
    "role": "Web 풀스택",
    "summary": "저시력자 동행 로봇을 지켜보는 관제 웹",
    "background": {
      "headline": "저시력자를 위한 AI 기반 실내 안전 동행 로봇",
      "points": [
        "ROS2 SLAM과 라이다로 실내 지도를 만들고 자율주행",
        "Jetson 보드에서 YOLO로 장애물 인식⁠·⁠회피",
        "관제 웹으로 로봇 위치⁠·⁠영상⁠·⁠개입 요청을 한눈에 관리"
      ]
    },
    "ux": [
      {
        "title": "끊김도 보이는 패널",
        "desc": "데이터가 끊기면 '미수신'으로 표시해 정상 값과 구분",
        "file": "lumi-ux-nodata.jpg",
        "caption": "미수신 상태"
      },
      {
        "title": "화면을 덮는 개입 요청",
        "desc": "멈춘 위치·사유를 전체 화면으로 알리고, 출동 후 상단 알림 줄로 축소",
        "file": "lumi-ux-assist.jpg",
        "caption": "관리자 개입 요청"
      },
      {
        "title": "복도에 맞춘 마커",
        "desc": "실제 복도 폭에 맞춘 미터 단위 마커로 로봇 위치를 정확히 표시",
        "file": "lumi-ux-marker.jpg",
        "caption": "도면 위 로봇·라이다"
      }
    ],
    "arch": {
      "lead": "로봇 데이터가 관제 화면까지 오는 흐름",
      "notes": [
        "서버가 로봇 내부망에 접근할 수 없어 로봇이 EC2로 먼저 전송",
        "FastAPI가 최신 값만 보관, WebSocket으로 대시보드에 실시간 전송",
        "이벤트·개입 요청은 SQLite에 기록, 관제 화면에서 바로 처리"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "bridge",
          "icon": "ros",
          "label": "ROS2 브리지",
          "sub": "SLAM·라이다",
          "owner": "team",
          "col": 0,
          "row": 0
        },
        {
          "id": "beacon",
          "icon": "bluetooth",
          "label": "비콘 노드",
          "sub": "BLE 스캔",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "jetson",
          "icon": "nvidia",
          "label": "Jetson Edge AI",
          "sub": "YOLO 장애물 인식",
          "owner": "team",
          "col": 0,
          "row": 2
        },
        {
          "id": "gate",
          "icon": "nginx",
          "label": "EC2 nginx",
          "sub": "HTTPS 관문",
          "owner": "external",
          "col": 1,
          "row": 1
        },
        {
          "id": "web",
          "icon": "docker",
          "label": "웹 컨테이너",
          "sub": "Vue 빌드 서빙",
          "owner": "mine",
          "col": 2,
          "row": 0
        },
        {
          "id": "api",
          "icon": "fastapi",
          "label": "FastAPI",
          "sub": "수신·실시간 중계",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "db",
          "icon": "sqlite",
          "label": "SQLite",
          "sub": "이벤트·개입 기록",
          "owner": "mine",
          "col": 2,
          "row": 2
        },
        {
          "id": "dash",
          "icon": "vue",
          "label": "관제 대시보드",
          "sub": "Vue 3 · 지도·영상",
          "owner": "mine",
          "col": 3,
          "row": 1
        }
      ],
      "edges": [
        {
          "from": "bridge",
          "to": "gate",
          "label": "위치·라이다"
        },
        {
          "from": "beacon",
          "to": "gate",
          "label": "비콘 스캔"
        },
        {
          "from": "jetson",
          "to": "gate",
          "label": "카메라 영상"
        },
        {
          "from": "gate",
          "to": "web",
          "label": "화면 요청"
        },
        {
          "from": "gate",
          "to": "api",
          "label": "데이터 전달"
        },
        {
          "from": "api",
          "to": "db",
          "label": "기록 저장"
        },
        {
          "from": "web",
          "to": "dash",
          "label": "Vue 앱"
        },
        {
          "from": "api",
          "to": "dash",
          "label": "실시간 방송"
        },
        {
          "from": "dash",
          "to": "api",
          "label": "개입 처리"
        }
      ]
    }
  },
  {
    "id": "jumanchu",
    "name": "주만추",
    "title": "스와이프로 만나는 장기투자 종목 추천 서비스",
    "period": "2026.05 ~ 2026.06 (약 7주)",
    "team": "3인 · BE 1 · 추천 알고리즘 1 · FE 1",
    "award": "",
    "hero": {
      "layout": "web-phone",
      "web": "jumanchu-hero.jpg",
      "phones": [
        "jumanchu-phone-home.webp"
      ],
      "glow": [
        "#ff4fa3",
        "#ff3d5a"
      ],
      "caption": "메인 화면 다크 모드(시세는 예시) · 모바일 홈"
    },
    "ux_lead": "처음 투자하는 사람도 부담 없이 넘겨 보도록",
    "role": "FE",
    "summary": "성향에 맞는 종목을 스와이프로 고르는 서비스",
    "background": {
      "headline": "장기 투자를 돕는 주식 서비스는 없을까?",
      "points": [
        "차트 등락에 따른 충동 매수⁠·⁠매도를 막는 '장투 케어' AI",
        "한국투자증권 실시간 시세를 연동하고 PostgreSQL로 종목 관리",
        "투자 성향에 맞는 종목을 스와이프로 추천"
      ]
    },
    "ux": [
      {
        "title": "넘겨서 만나는 종목",
        "desc": "위로 넘기면 저장, 아래로 넘기면 패스 — 로그인 전에도 체험 가능",
        "file": "jumanchu-ux-swipe.jpg",
        "caption": "로그인 전 맛보기 덱"
      },
      {
        "title": "색까지 고르는 테마",
        "desc": "라이트·다크 × 블루·핑크 4가지 조합, 첫 화면부터 깜빡임 없이 적용",
        "file": "jumanchu-ux-theme.jpg",
        "caption": "같은 카드, 다른 테마"
      },
      {
        "title": "숫자가 또렷한 표면",
        "desc": "반투명 유리 패널을 불투명 단색 면으로 바꿔 표·숫자를 또렷하게",
        "file": "jumanchu-ux-surface.jpg",
        "caption": "주식 조회 Before / After"
      }
    ],
    "arch": {
      "lead": "시세와 추천 점수가 스와이프 카드까지 오는 흐름",
      "notes": [
        "한국투자증권 시세는 Redis에 잠시 보관, 종목·재무·점수는 PostgreSQL",
        "추천·장투 케어 로직이 궁합 점수와 AI 리포트 생성",
        "Axios 클라이언트 한 곳에서 API 호출, Pinia로 화면 간 상태 공유"
      ]
    },
    "architecture": {
      "nodes": [
        {
          "id": "ext",
          "icon": "landmark",
          "label": "외부 API",
          "sub": "한국투자증권·DART",
          "owner": "external",
          "col": 0,
          "row": 0
        },
        {
          "id": "db",
          "icon": "postgresql",
          "label": "PostgreSQL",
          "sub": "종목·재무·점수",
          "owner": "team",
          "col": 0,
          "row": 1
        },
        {
          "id": "algo",
          "icon": "sparkles",
          "label": "추천·장투 케어",
          "sub": "궁합 점수·AI 리포트",
          "owner": "team",
          "col": 0,
          "row": 2
        },
        {
          "id": "redis",
          "icon": "redis",
          "label": "Redis",
          "sub": "시세 임시 보관",
          "owner": "team",
          "col": 1,
          "row": 0
        },
        {
          "id": "api",
          "icon": "django",
          "label": "Django REST",
          "sub": "도메인 API·인증",
          "owner": "team",
          "col": 1,
          "row": 1
        },
        {
          "id": "client",
          "icon": "axios",
          "label": "API 클라이언트",
          "sub": "도메인 함수·토큰",
          "owner": "mine",
          "col": 2,
          "row": 1
        },
        {
          "id": "store",
          "icon": "pinia",
          "label": "Pinia 스토어",
          "sub": "로그인·테마·관심",
          "owner": "mine",
          "col": 2,
          "row": 2
        },
        {
          "id": "views",
          "icon": "vue",
          "label": "Vue 화면",
          "sub": "홈·종목·포트폴리오",
          "owner": "mine",
          "col": 3,
          "row": 1
        },
        {
          "id": "swipe",
          "icon": "layers",
          "label": "스와이프 덱",
          "sub": "추천 카드 넘기기",
          "owner": "mine",
          "col": 3,
          "row": 2
        }
      ],
      "edges": [
        {
          "from": "ext",
          "to": "db",
          "label": "배치 적재"
        },
        {
          "from": "algo",
          "to": "db",
          "label": "DNA·점수"
        },
        {
          "from": "ext",
          "to": "redis",
          "label": "실시간 시세"
        },
        {
          "from": "db",
          "to": "api",
          "label": "종목·점수"
        },
        {
          "from": "redis",
          "to": "api",
          "label": "현재가"
        },
        {
          "from": "api",
          "to": "client",
          "label": "JSON 응답"
        },
        {
          "from": "client",
          "to": "store",
          "label": "로그인 상태"
        },
        {
          "from": "client",
          "to": "views",
          "label": "화면 데이터"
        },
        {
          "from": "store",
          "to": "views",
          "label": "테마·관심"
        },
        {
          "from": "views",
          "to": "swipe",
          "label": "추천 카드"
        }
      ]
    }
  }
]

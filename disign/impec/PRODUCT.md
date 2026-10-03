# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vue 3 + Vite (user chose "Vue / React 프로젝트"; Vue picked because it is in the owner's own skill set).

## Users

채용 담당자·면접관. 지원 시 제출된 링크로 브라우저에서 훑어보거나, A4 가로로 출력해 종이로 검토한다.

## Product Purpose

개발자 송호영의 포트폴리오. 한 장으로 길게 내려가는 웹사이트로 보고, 필요하면 A4 가로로 인쇄해 검토한다. 성공 = 몇 장 안에 "누구이고, 무엇을 할 수 있고, 무엇을 만들었는지"가 전달되는 것.

## Positioning

캐치프레이즈(표지): "사용성을 설계하며 성장하는 개발자입니다". 표지 아래 큰 수치와 프로필 핵심 역량은 뺐다(2026-10-03 본인 요청: 자기 어필·글 줄이기). 프로필 헤드라인 "사용자가 기다리지 않고, 헤매지 않는 화면을 만듭니다", 소개 "디자인 실무 경험으로 화면의 속도와 사용성을 개선합니다."

## Capabilities and Constraints

- 15쪽 구성: 표지 · 프로필 · 스킬 · 개발자가 된 이유 · 프로젝트 목차 · COSMOS 3쪽 · Lumi 3쪽 · 주만추 3쪽 · 연락처.
- 프로젝트 쪽 구성(App.vue가 content.js에서 자동 생성, 2026-10-03 개편): 개요(대표 화면 + 기간·인원·역할 "FE" + 기획 배경) → UI 개선(화면 + 제목 + 한 문장) → 아키텍처(구조도 + 설명 3줄). 시간·속도·용량·기여율 숫자, 기술 선택 이유 카드, 문제 해결·성과·회고 쪽은 뺐다("시간 줄였다 이런 거 써 놓으니 굳이 왜 썼냐는 느낌"). 문구는 저장소·발표 자료로 검증(워크플로 결과 scratchpad/copy-final.json).
- 스킬: Three.js 초급(AI와 함께 구현), GLSL·MySQL 삭제(본인: 모르는 기술·짜 본 적 없음). React·SQLite는 이름만(TanStack Query·SQLAlchemy 표기 삭제). 근거 줄은 "사용한 곳"만 짧게.
- 기획 배경은 프론트가 아니라 프로젝트 전체 기획(본인도 공동 기획, 2026-10-03): COSMOS = 뉴스·공시로 기업 관계 산출 + Hadoop(HDFS)·Spark 빅데이터 + 3D 시각화 / Lumi = 저시력자용 AI 안전 보행 로봇, ROS2 SLAM·라이다 자율주행, Jetson YOLO 장애물 인식 / 주만추 = 장기 투자 서비스 부재, 충동 매매를 막는 장투 케어 AI, 한국투자증권 실시간 시세 연동 + PostgreSQL. (저장소 확인: 실시간 시세는 Redis 캐시, PostgreSQL은 종목·재무·점수 저장)
- 표지: 워드마크 위, 캐치프레이즈 한 줄(44px). 프로필 제목 "UX/UI 디자이너에서 개발자로".
- 역할: COSMOS·주만추 "FE", Lumi "Web 풀스택"(2026-10-03 본인 요청). 아키텍처 노드마다 라이브러리·도구 로고(Hadoop·Spark·PostgreSQL·Spring Boot·TypeScript·TanStack Query·Three.js·React / ROS·Bluetooth·NVIDIA·nginx·Docker·FastAPI·SQLite·Vue / Redis·Django·Axios·Pinia 등).
- 글은 짧게: 항목당 한 줄, 각주·감사 문구 없이 출처는 수치 상자 아래 한 줄만. 보는 사람이 피로하지 않게 화면 이미지가 먼저 보이도록.
- 쪽 하나 = A4 가로 (1440×1018 캔버스). 넓은 화면은 화면 폭에 맞춰 확대·축소, 인쇄는 쪽당 A4 한 장(어두운 쪽은 밝게), 900px 미만은 세로로 쌓임.
- 지원 직무: Front-end Engineer. 프로젝트 순서 COSMOS → Lumi → 주만추.
- 모든 프로젝트 내용은 로컬 저장소(C:/shy/S15P21C205·galaxy_web, C:/shy/S15P11C201, C:/shy/portfolio/jumanchu)의 본인 커밋·코드에서 검증한 사실만. 내용 원본: src/content.js.
- 화면 이미지: src/assets/shots/ (content.js의 hero.file · ux[].file). COSMOS = 배포 서비스·최종 발표 화면, Lumi = 로컬 실행(시뮬레이터 데이터), 주만추 = 최종 빌드 재실행 캡처 + 대표 화면은 다크 모드에 적용된 목업(jumanchu_market_pulse_v5, 시세는 예시). 원본·자르기 설정은 세션 스크래치패드(crop-spec*.json).
- GitHub: github.com/theshy3819 (2026-10-02 본인 제공, 공개 저장소 5개 확인). 깃허브 계정 이메일은 표시하지 않음 — 연락 이메일은 shy3819@naver.com 하나.
- 대표 화면은 자르지 않는다: 노트북 목업은 쓰지 않는다(2026-10-02 본인 요청). 웹 화면 = 둥근 잉크 테두리의 떠 있는 카드 + 뒤에 브랜드 색 빛(참고: Crunchy·Lab Works 시안), 모바일 화면 = 3D로 구운 검은 아이폰 이미지(기우는 쪽 옆면이 보임, 참고: BBOK·SPURT 시안)를 띄우고 평평한 바닥 그림자. Lumi 로봇 몸통 글자는 좌우 반전 후 앞판 기울기에 맞춰 다시 눕혀 넣음. COSMOS = 웹 카드 + 반대로 기운 폰 2대, Lumi = 웹 카드 뒤에 크게 선 로봇 일러스트(좌우 반전, 몸통 글자는 바로 세움), 주만추 = 웹 카드 + 폰 1대(최종 빌드 390px 실제 캡처). 개발자가 된 이유 쪽 작업 4건과 UX 카드도 같은 문법. 프로젝트 아이콘: src/assets/icons/(cosmos.png, lumi.png — Lumi는 선만 남기고 배경 투명화).
- Lumi 대표 화면(lumiweb, 본인 제공)의 보행자 이름은 흐리게 처리. 달리기 사진(본인 제공, 배번 이름·번호 흐리게)은 2쪽 프로필 사진으로 씀(본인 요청: 특별한 프로필). 마지막 쪽 큰 문장은 "끝까지 봐 주셔서 감사합니다."
- 주만추 저장소는 env 시크릿 노출 문제로 링크하지 않는다.

## Brand Commitments

- 구성·시각 기준: 사용자가 준 Figma "DDESIGN — Interactive Portfolio Site" (file mQhcGf00A028JPLAunVaMq, node 5:2). 미색 종이 바탕 + 잉크 검정 섹션, 파랑 포인트 #1f2cff, Archivo · Geist Mono · Noto Sans KR. (이전의 다크 슬라이드 덱은 폐기)
- 표지 워드마크 "포트폴리오"는 Figma에서 유지. 직무 표기는 FRONT-END ENGINEER(2026-10-02 사용자 선택).
- Figma의 견본 내용(다른 프로젝트, Process 기간, Availability 등)은 사용자의 실제 내용으로 대체한다.
- 스킬은 로고 아이콘과 함께 표시한다.

## Evidence on Hand

- 이름: 송호영
- 증명사진: `src/assets/profile.jpg` (파란 배경, 1107×1419)
- 경력: 광고대행사 콘텐츠 마케팅 및 웹디자인, 1년 3개월. 디자인한 사이트 4건(모리프 — 대표작·한의원, 쏠테로 — 모빌리티, 메종드엘 — 웨딩홀, 금다연한정식) 모두 업체가 확인 후 제작 요청(본인 진술 "수주율 100%"). 첫 실무는 이젠에듀 평생교육원 인턴 리뉴얼 시안(미반영 — 수주 근거에 넣지 않음). GPT-4o 공개(2024.05) 때는 회사에서 일하던 중.
- 개발자가 된 이유(본인 글, 2026-10-02): 사용성을 설계하다 서비스 원리가 궁금해짐 → AI로 배움의 문턱이 낮아졌다고 판단해 SSAFY 지원 → 알고리즘·REST API 웹 서비스 기획·개발·배포 → 현재 SSAFY 창업트랙 AX 프로젝트 WebO(서비스 이름, 본인 확인)에서 프론트엔드와 추천 레이아웃 제작. 창업 계획은 있으나 포트폴리오에서는 프론트엔드에 집중한 점을 부각(화면 문구에 '창업트랙'을 쓰지 않음).
- 학력: 전남대학교 경제학과 졸업
- 교육: 삼성 청년 소프트웨어 AI 아카데미 이수 중
- Skills: Python, JavaScript, TypeScript, HTML, CSS, Django(본인 평가 중급), PyTorch·MySQL·AWS(낮음), Vue.js, React.js, Git, SQLite, SQLAlchemy (+ 저장소 근거: WebSocket, Pinia, TanStack Query, Vite, nginx, pytest, GLSL, FastAPI, Docker, Three.js)
- 기타 스킬(디자인 묶음, Figma가 맨 위): Figma(고급 — 근거: 웹사이트 4건 디자인 · 4건 모두 제작 수주), Photoshop·Illustrator(근거에 자격증을 쓰지 않음 — 본인: 일러스트도 컴퓨터그래픽스운용기능사 범위, 웹디자인기능사는 HTML·CSS·JS 시험이라 HTML·CSS 근거로 옮김), Premiere Pro. 스킬 쪽 아래 "숙련도 근거" 각주는 본인 요청으로 뺌. TypeScript·Three.js·WebSocket은 고급 → 중급(본인: AI에게 화면을 보며 고쳐 달라고 한 수준이라 고급으로 쓰면 안 됨). Premiere Pro는 중급, 근거 "프로젝트 영상 포트폴리오 제작 담당"(유튜브 업로드 등 세부는 본인 요청으로 숨김).
- 자격증: 웹디자인기능사, 컴퓨터그래픽스운용기능사
- 수상: 삼성 청년 SW·AI 아카데미(SSAFY) 2학기 공통 프로젝트 광주 2반 1등 — 프로젝트 Lumi (2026-10-02 본인 확인)
- 프로젝트
  - 주만추 (2026.05~06, 3인 · BE 1 · 추천 알고리즘 1 · FE 1) — 표기 "Front-end (Vue 3) · UX 개선" ('FE 전부'는 git으로 뒷받침되지 않아 쓰지 않음). 공용 스와이프 덱, 2축 테마, 불투명 표면, 로딩 상태, 11개 화면 실제 API 연동. 랭킹 10초→1.5초·시세 100→1콜은 팀 발표 자료 기재값(캐시는 백엔드 담당, 이전 코드는 저장소에 없음)으로만 표기.
  - Lumi (2026.07~08, 6인) — 팀의 유일한 Web 담당. FastAPI 백엔드 + Vue 3 관제 대시보드 단독(보기 전용 관제, 로봇 제어 아님), 웹 컨테이너화. CI(Docker Hub·EC2 배포)는 팀원 작성.
  - COSMOS (2026.08~09, 6인) — FE 2인 중 1인, FE 코드 82.6%·3D 렌더링 97%. TypeScript, React, Three.js(R3F), TanStack Query. 첫 로드 JS 292→150KB.
- 연락처: 전화 010-8209-1619, 이메일 shy3819@naver.com (사용자의 Figma에 있던 값, 사이트 표시 승인됨). GitHub 미정.
- 없음: 메인 스택 선택 이유(FastAPI·Vue·React 등), 측정 리포트 원본. 지어내지 말 것.

## Product Principles

1. 종이에서도 읽힌다: 화면 전용 효과에 의존하지 않는다.
2. 섹션마다 하나의 메시지.
3. 사실만: 제공된 내용 외 성과·수치를 만들지 않는다.

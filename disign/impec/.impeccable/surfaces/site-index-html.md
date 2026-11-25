---
version: 1
slug: "site-index-html"
primary_target: "site/index.html"
related_targets: []
---

Scope: 사이트형 포트폴리오 전체(새 React + TS + R3F 앱, 계획 위치 disign/impec/site, webo-sections처럼 같은 폴더 안의 별도 Vite 앱). Mode: Experience. 기존 A4 쪽 포트폴리오는 PDF로 따로 둔다.

Audience · job: 채용 담당자와 개발 면접관이 지원서 링크로 1~3분 훑는다. 누구이고(AI Developer, 디자이너 출신), 무엇을 만들었는지(WebO · COSMOS · Lumi · 주만추), 어떻게 만드는 사람인지(3D · 모션 · 성능을 사이트 자체로 증명)를 전한다.
Proof · content: src/content.js의 확인된 사실만. 웹디자인한 사이트 3곳(금다연한정식 · 쏠테로네트웍스 · 모리프한의원)은 누르면 실제 사이트로 이동. 러너 누끼(assets-src/photos/runner-cutout*.png/webp).
Constraints: 사실만, 팀원 이름 없음, 주만추 저장소 링크 없음, 증명사진 없음. 영상은 지금 넣지 않고 자리만 둔다(Seedance로 나중에 채움). 참고: Carter(프로젝트 고르기 wheel/grid/list), Santal(격자 규율), Agrumea(단순 형태 + 좋은 재질의 3D).
Role: 직무 표기는 AI Developer(본인 결정: AI 기능을 알고 연동 서비스를 구현할 수 있음). 프로젝트별 역할은 실제 담당 그대로.
Developer HUD: 측정 모드. 평소엔 표제란에 실측 FPS · LCP · JS 한 줄, M 키 · 버튼으로 켜면 주요 요소에 파란 점선 상자와 종류 · 크기 이름표, 표제란에 FPS 그래프. 실측값만, 못 잰 값은 "—".
Unresolved: 코드 위치 최종 확정.

## Direction contract

THESIS: 사이트 전체가 한 벌의 조립 도면이다. 스킬은 부품, 프로젝트는 조립품, 송호영은 도면 옆 축척 인물. 거부하는 기본값: 어두운 바탕 + 3D 블롭 히어로 + 프로젝트 카드 그리드.

OWN-WORLD: 미색 도면 용지 #f2f1ec, 먹선 #121212, 보조선 #9a9890, 표시 파랑 #1f2cff(본인 담당 · 선택). 어두운 테마는 청사진(남색 바탕, 하늘색 선)으로 같은 장면의 시간만 바뀐다. 0.5~1px 선, 치수선 · 지시선 · 원 번호 콜아웃, 테두리의 구역 번호(A~F / 1~8), 오른쪽 아래 표제란. 카드 박스 없음: 묶음은 도면 구역과 깊이로만. Archivo 폭 축(표제는 Expanded, 라벨은 Condensed) + Geist Mono(치수 · 부품 번호) + 한글 본문 고딕. 3D 스킬 부품은 로고를 압출한 금속 부품으로, 선(edge)으로 먼저 그려진 뒤 재질이 차오른다. 고른 프로젝트의 실제 브랜드 색이 지시선과 주석으로 번진다.

STORY: 첫 화면에서 이름 · AI Developer · 러너를 본다 → 스크롤하면 디자이너 → 개발자 이력이 도면 개정 이력처럼 쌓인다 → 프로젝트 4개를 조립도 회전(wheel) · 부품 배치(grid) · 부품표(list)로 바꿔 보며 고르고 상세(기획 배경 · UI 개선 · 아키텍처 분해도)로 들어간다 → 스킬 부품 → 웹디자인 사이트 링크 → 연락. 남는 인상: 화면을 설계하고 직접 만드는 사람.

FIRST VIEWPORT: 1440×900, "도면이 주인공"(2026-11-25 사용자 선택: 큰 이름은 자의식이 강해 보임). 왼쪽 위에 작게 "송호영"(40px) · AI DEVELOPER(Archivo Expanded 14px) · 캐치프레이즈 한 줄. 화면 가운데 약 640×790에 스킬 부품 4~6개의 3D 분해도(지시선 · 원 번호)가 주인공. 오른쪽에 러너 누끼(높이 약 570px)가 축척 인물로 서고 옆에 세로 치수선 "축척 1 : 12". 바닥 가로 치수선. 오른쪽 아래 표제란: 메뉴 · 성명 · SHEET 01/06 · 측정(실측 FPS · LCP · JS, 측정 모드 M). 주요 행동은 표제란의 "프로젝트".

FORM: 조립 도면(기계 · 건축 분해 투상도), 근거 순위 목록 5번, seed a6c44dfb. 시그니처 상호작용: 스크롤에 맞춰 선 도면이 금속 부품으로 조립 · 분해되는 전환, 프로젝트 보기 3모드 전환(카드가 제자리에서 이동). 모션 문법: 축을 따라 직선으로 움직이는 기계적 이징, 선은 그려지고(stroke) 면은 차오른다.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

---
version: 1
slug: "webo-sections-src-samples-dermatology-js"
primary_target: "webo-sections/src/samples/dermatology.js"
related_targets: ["webo-sections/src/renderer/sections.jsx","webo-sections/src/renderer/site.css","webo-sections/src/select/SelectApp.jsx"]
---

Scope: WebO 손님 사이트 · 피부과 의원 C3 레이아웃(첫 방문 안내) + 5174 사장님 '레이아웃 고르기' 시뮬레이션. Mode: Persuade(손님이 순서를 이해하고 전화·예약 문의). 제품 사실은 WebO 목업2와 webo-sections 청사진이 정본이다(루트 PRODUCT.md 는 포트폴리오용이라 적용하지 않는다).

Audience: 해담결피부과의원(시연용 가상)에 처음 가는 환자, 휴대폰으로 봄. Job: 어디로 가서 무엇을 가져가고 어떤 순서로 진료받는지 미리 안다. Constraints: 의료법 정보 칸 모드(효과·가격·후기 없음), 사실 값은 business 에서, 대기 시간 추정 금지.

## Direction contract

THESIS: 병원 바닥의 색 동선 띠가 페이지 전체를 관통한다. 첫 화면은 여섯 정거장(주차→3층→접수→대기→진료→수납) 가로 띠로 열리고, 아래로 내려가면 같은 띠가 세로로 꺾여 단계마다 장소·할 일·준비물·사진을 잇는다. 사진 히어로와 카드 그리드를 거부한다.
OWN-WORLD: 흰 바탕, 먹 #1E2A2B, 동선 청록 #1F5E5B 한 색이 굵은 선(6px)과 정거장 원에만 쓰인다. 옅은 청록 #E3EFEC 면은 현재 단계 표시에만. Pretendard 한 가족, 숫자는 tabular. 둥근 정거장 원 + 직선, 그림자 없음.
STORY: 손님은 첫 화면에서 "여섯 단계면 끝난다"를 이해하고, 준비물(신분증)을 알고, 오늘 진료 상태를 확인한 뒤 전화나 예약 문의를 누른다.
FIRST VIEWPORT: 위 좌측 큰 제목 "처음 오시는 날, 순서대로 안내해 드려요"와 한 줄 설명, 버튼 둘(전화 채움, 예약 문의 테두리). 위 우측 오늘 상태 알약·오늘 진료시간·전화. 아래 전폭 동선 띠: 굵은 청록 선 위 번호 원 6개, 원 아래 짧은 이름과 장소. 원을 누르면 그 단계로 내려간다.
FORM: 방문 동선 트랙, 구조 후보 7개 중 1위, seed key edd8b649. Signature interaction: 세로 동선을 따라 내려가면 선이 지나온 만큼 청록으로 차오르고 현재 정거장 원이 켜진다(기본 상태는 전부 보임).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

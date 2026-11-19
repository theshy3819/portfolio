# WebO 섹션 카탈로그

업종별 손님 사이트를 **부품 조립**으로 만든다. AI는 HTML·CSS를 쓰지 않고, 카탈로그에서 섹션 `type`·`variant`를 고른 뒤 문구만 채운 **사이트 JSON**을 내놓는다. 렌더러가 그 JSON을 React 컴포넌트로 그린다.

```
사장님 정보 ─┐
업종 청사진 ─┼─▶ AI (structured output = schema/site.schema.json) ─▶ 사이트 JSON ─▶ validateSite ─▶ SiteRenderer
카탈로그   ─┘                                                         (모양·청사진·금지 표현 검사)
```

기준 목업은 WebO 목업2(소담결 스킨라운지 K1·K2, 해담결피부과 C1·C2)이다. 레이아웃 토큰과 섹션 구성은 목업에서 가져왔고, 법무법인 L1·L2는 새로 만들었다.

## 실행

```bash
npm install
npm run dev      # 미리보기: 업종·레이아웃·기기 폭 전환, 구성도, JSON 편집, AI 지시문, 전체 카탈로그
npm run check    # 예시 사이트 6벌 검사
npm run schema   # schema/site.schema.json, schema/prompt.<업종>.md 생성
```

## 구조

| 파일 | 역할 |
|---|---|
| `src/schema/business.js` | 매장 정보(사실 값). 모든 섹션이 이것 한 벌을 읽는다 |
| `src/schema/sections.js` | **섹션 카탈로그**: 섹션 13종, 변형 28개와 각 props 스키마(zod) |
| `src/schema/site.js` | 사이트 JSON 스키마 + `validateSite`(모양 → 청사진 → 문구 규칙) |
| `src/themes.js` | 테마 토큰 6벌(색·모서리·글자 크기). AI는 이름만 고른다 |
| `src/blueprints.js` | **업종 청사진**: 허용 섹션·변형·테마, 필수 섹션, 추천 레이아웃 2개, 금지 표현 |
| `src/samples/` | 업종 3 × 레이아웃 2 예시 사이트 JSON(AI 출력과 같은 모양) |
| `src/renderer/` | `SiteRenderer`와 섹션 컴포넌트, `site.css`(토큰만 읽음, container query 반응형) |
| `src/ai/prompt.js` | 업종별 AI 지시문 생성 |

## 업종 3종

| 업종 | 모드 | 레이아웃 |
|---|---|---|
| 피부과 의원 `dermatology` | 정보 칸 모드: 진료 항목은 이름만. 효과·가격·후기 없음 | C1 노란 안내판(지금 진료 중 크게) · C2 시설 둘러보기 |
| 피부관리실 `aesthetic` | 미용업: 의료 용어 금지. 프로그램에 시간·가격 | K1 맑은 물빛(옆 레일) · K2 장밋빛 모자이크 |
| 법무법인 `lawFirm` | 결과 약속 금지. 분야·구성원·상담 절차 | L1 먹빛 선언(사진 없는 문장형) · L2 석조 한지 |

## 새 업종·섹션 추가

- **업종**: `blueprints.js`에 청사진을 하나 더하고, `samples/`에 예시를 넣은 뒤 `npm run check`를 돌린다. 기존 섹션만으로 되는 경우가 대부분이다.
- **섹션 변형**: `sections.js`의 `variants`에 한 줄 추가 → `renderer/sections.jsx`에서 분기 → 쓸 업종의 `allow`에 넣는다.
- **테마**: `themes.js`에 토큰 한 벌을 넣고 청사진 `themes`에 이름을 넣는다.

## 주의

- 금지 표현 목록(의료법 제56조, 공중위생관리법, 변호사업무광고규정)은 **1차 안전망**일 뿐이다. 게시 전 법률 검토를 대신하지 않는다.
- 예시의 매장·의원·법무법인·인물은 모두 시연용 가상 데이터이고, 금액은 확정 전 값이다.
- 사진은 `hint`만 있는 빈 칸으로 그린다. `src`를 넣으면 실제 사진으로 바뀐다.
- 문의 폼은 시연용이라 어디로도 보내지 않는다.

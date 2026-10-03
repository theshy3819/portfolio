---
name: 송호영 포트폴리오
description: 화면과 A4 종이가 같은 쪽인, 기획 배경 · UI 개선 · 아키텍처로 읽히는 15쪽 프론트엔드 포트폴리오
colors:
  accent: "#1f2cff"
  accent-on-dark: "#7c84ff"
  paper: "#f4f3ef"
  paper-sunk: "#eae8e2"
  ink: "#111110"
  ink-muted: "#6b6862"
  line: "#d9d6ce"
  line-dark: "#2e2d2a"
  on-dark: "#f4f3ef"
  on-dark-muted: "#8f8c85"
  print-paper: "#ffffff"
  print-sunk: "#f7f6f3"
typography:
  wordmark:
    fontFamily: "Archivo Variable, Noto Sans KR Variable, system-ui, sans-serif"
    fontSize: "268px"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.045em"
  display-xl:
    fontFamily: "Archivo Variable, Noto Sans KR Variable, system-ui, sans-serif"
    fontSize: "104px"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  display-lg:
    fontFamily: "Archivo Variable, Noto Sans KR Variable, system-ui, sans-serif"
    fontSize: "64px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.025em"
  heading-md:
    fontFamily: "Archivo Variable, Noto Sans KR Variable, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  page-title:
    fontFamily: "Archivo Variable, Noto Sans KR Variable, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  kr-lead:
    fontFamily: "Noto Sans KR Variable, Archivo Variable, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "-0.01em"
  kr-body:
    fontFamily: "Noto Sans KR Variable, Archivo Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: "-0.01em"
  mono-label:
    fontFamily: "Geist Mono Variable, Noto Sans KR Variable, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.1em"
  mono-num:
    fontFamily: "Geist Mono Variable, Noto Sans KR Variable, ui-monospace, monospace"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  mono-meta:
    fontFamily: "Geist Mono Variable, Noto Sans KR Variable, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  pill: "999px"
  card: "12px"
  panel: "10px"
  block: "8px"
  frame: "6px"
  tick: "1px"
spacing:
  page-top: "56px"
  page-x: "96px"
  page-bottom: "44px"
  page-gap: "36px"
  fluid-top: "36px"
  fluid-x: "20px"
  fluid-bottom: "32px"
  fluid-gap: "28px"
  gutter: "28px"
  gutter-wide: "40px"
  rule-pad: "10px"
  rule-gap: "14px"
components:
  page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    width: "1440px"
    height: "1018px"
    padding: "56px 96px 44px"
  page-sunk:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
  page-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  page-print:
    backgroundColor: "{colors.print-paper}"
    textColor: "{colors.ink}"
  page-fluid:
    padding: "36px 20px 32px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-dark}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.pill}"
    padding: "16px 32px"
  button-accent-hover:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
  chip:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "4px 10px"
  award-pill:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    typography: "{typography.mono-label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  ux-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 22px 22px"
  pick-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 22px"
  metric-panel:
    backgroundColor: "{colors.paper-sunk}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 22px"
  metric-bar-before:
    backgroundColor: "{colors.ink-muted}"
    rounded: "{rounded.tick}"
    height: "10px"
  metric-bar-after:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.tick}"
    height: "10px"
  level-segment:
    backgroundColor: "{colors.line}"
    rounded: "{rounded.tick}"
    width: "12px"
    height: "6px"
  level-segment-on:
    backgroundColor: "{colors.accent}"
    rounded: "{rounded.tick}"
    width: "12px"
    height: "6px"
  arch-node:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.frame}"
    width: "150px"
    height: "60px"
  arch-node-mine:
    textColor: "{colors.accent}"
    rounded: "{rounded.frame}"
    width: "150px"
    height: "60px"
  shot-frame:
    backgroundColor: "{colors.paper-sunk}"
    rounded: "{rounded.panel}"
---

# Design System: 송호영 포트폴리오

## Overview

**Creative North Star: "The Evidence Folio (증거 서류철)"**

이 시스템은 화면에서 넘겨 보는 인쇄 문서다. 쪽 하나는 A4 가로 비율의 고정 캔버스(1440×1018)이고, 넓은 화면에서는 캔버스가 통째로 화면 폭에 맞춰 확대·축소되며, 인쇄하면 같은 쪽이 A4 한 장으로 나온다. 모든 쪽은 같은 머리줄과 쪽수를 가진 한 묶음의 서류이고, 그 안의 문장과 숫자는 저장소에서 확인한 근거로만 채운다. 디자인이 할 일은 장식이 아니라 근거가 읽히게 하는 것이다.

재료는 네 가지뿐이다. 따뜻한 미색 종이, 잉크 검정, 1px 선, 그리고 파랑 하나. 그림자는 대표 화면 하나에만 두고, 깊이는 종이의 세 면(밝은 면, 가라앉은 면, 잉크 면)과 선의 두 무게로 만든다. 파랑은 꾸밈이 아니라 표시다. 큰 숫자, 본인이 맡은 것, 내가 고른 선택, 결과에만 붙는다.

글은 적게, 글자는 크게(2026-10-03 개편 — "글자가 너무 많고 너무 작다"는 평). 프로젝트마다 대표 화면과 기획 배경 → UI 개선 카드(화면 + 한 문장) → 아키텍처(구조도 + 설명 3줄) 세 쪽이고, 역할은 "FE" 한 단어로 쓴다. 시간·속도·용량·기여율 숫자는 쓰지 않는다. 위계는 크기 경쟁보다 글꼴의 역할 분담으로 잡는다. Archivo는 이름·제목·숫자, Noto Sans KR은 문장, Geist Mono는 라벨·값·메타를 맡는다. 900px보다 좁은 화면에서는 캔버스를 내려놓고, 내용 길이만큼 세로로 이어지는 한 단 문서가 된다.

**Key Characteristics:**
- 쪽 = A4 가로 고정 캔버스(1440×1018). 화면은 zoom으로 폭에 맞추고, 인쇄는 쪽당 A4 한 장
- 미색 종이 + 잉크 + 1px 선 + 파랑 하나, 화면 이미지가 글보다 먼저
- 세 글꼴의 역할 분담: Archivo / Noto Sans KR / Geist Mono
- 본인·팀원·외부를 하나의 코드(파랑 선과 틴트 / 회색 선 / 점선)로 구분
- 모든 쪽에 같은 머리줄(섹션 번호 · 섹션 이름 · 쪽수), 프로젝트 쪽에는 발줄
- 수치는 tabular 숫자와 전/후 막대로 보여 주고, 출처 메모를 함께 단다

## Colors

종이와 잉크 위에 파랑 하나만 얹은 팔레트. 회색은 모두 노랑 쪽으로 아주 살짝 기운 따뜻한 무채색이다.

### Primary
- **Signal Blue** (#1f2cff): 유일한 강조색. 섹션 번호와 목록 번호, 번호, 본인 담당 표시, UX 카드의 'After' 라벨과 지표, 문제 해결 흐름의 '해결'·'결과' 단계, 회고의 'Keep', 연락처 메일 링크와 CTA 버튼에 쓴다. 미색 종이 위 대비 6.6:1.
- **Lifted Blue** (#7c84ff): 어두운 잉크 면에서만 쓰는 같은 계열의 밝은 파랑. Signal Blue는 잉크 위에서 2.6:1이라 작은 글자에 쓸 수 없으므로, 어두운 쪽에서는 강조 변수가 이 값으로 바뀐다(잉크 위 5.9:1).

### Neutral
- **Warm Paper** (#f4f3ef): 밝은 쪽의 바탕이자 UX 카드·기술 선택 카드의 바탕. 어두운 면 위 글자(on-dark)도 같은 값이다.
- **Sunk Paper** (#eae8e2): 가라앉은 쪽(목차)의 바탕, 전/후 지표 패널, 밝은 면의 칩 바탕, 이미지 자리 바탕.
- **Press Ink** (#111110): 본문 글자, 어두운 쪽(프로필, 연락처)의 바탕, 기본 버튼, 묶음을 여는 굵은 쪽 1px 선.
- **Graphite** (#6b6862): 보조 글자와 '전' 막대. 미색 종이 위 5.0:1, 가라앉은 종이 위 4.5:1.
- **Hairline** (#d9d6ce): 행 구분선, 카드 테두리, 팀원 노드 테두리, 꺼진 레벨 칸. 55%로 섞어 막대 트랙을 만든다.
- **Dark Hairline** (#2e2d2a): 어두운 면의 선.
- **Ash** (#8f8c85): 어두운 면의 보조 글자(잉크 위 5.6:1).
- **Print White** (#ffffff, 인쇄 전용): 인쇄할 때 밝은 면, 어두운 면 가리지 않고 모든 쪽의 바탕.
- **Print Sunk** (#f7f6f3, 인쇄 전용): 인쇄할 때 가라앉은 쪽의 바탕.

### Named Rules
**The One Blue Rule.** 강조색은 Signal Blue 하나이고, 어두운 면에서만 같은 계열의 Lifted Blue로 밝힌다. 두 번째 강조 색상을 들이지 않는다. 파랑은 큰 수치, 본인 담당, 선택과 결과, 번호에만 붙고, 문장 전체나 넓은 면을 칠하지 않는다(예외는 CTA 버튼과 수상 표시 알약 두 가지).

**The Mine-Is-Blue Rule.** 본인·팀원·외부 구분은 어디서나 같은 코드를 쓴다. 본인 = 파랑 선과 파랑 10% 틴트, 팀원 = 회색 1px 선(Hairline), 외부 = 같은 회색의 점선. 구조도 노드와 구조도 범례가 이 코드를 따른다.

**The Face Context Rule.** 컴포넌트는 원색 토큰이 아니라 면 문맥 변수(--bg, --fg, --fg-muted, --rule, --acc, --chip-bg)로 그린다. 밝은 면, 가라앉은 면, 어두운 면, 인쇄가 이 변수만 바꾸므로 같은 컴포넌트가 네 곳에서 모두 읽힌다. 예외는 UX·기술 선택 카드와 지표 패널의 바탕(paper, paper-sunk 고정)이며, 모두 밝은 쪽에만 놓인다.

**The Paper-First Print Rule.** 인쇄에서는 모든 쪽이 흰 종이가 된다. 세 면의 문맥 변수가 모두 바탕 흰색, 글자 Press Ink, 선 Hairline, 강조 Signal Blue로 바뀌고, 가라앉은 쪽만 Print Sunk로 남는다. 어두운 쪽을 잉크째 인쇄하지 않으며, 모든 색은 print-color-adjust: exact로 그대로 찍는다.

## Typography

**Display Font:** Archivo Variable (한글은 Noto Sans KR Variable로 넘어가고, 마지막은 system-ui)
**Body Font:** Noto Sans KR Variable (with Archivo Variable, system-ui)
**Label/Mono Font:** Geist Mono Variable (한글은 Noto Sans KR Variable)

**Character:** 단단한 그로테스크 Archivo가 이름과 숫자를 세우고, 한글 문장은 Noto Sans KR이 고르게 받친다. Geist Mono 대문자 라벨은 서류 양식의 칸 이름처럼 읽힌다. Archivo에는 한글 글리프가 없어서, 한글 제목("문제 해결 사례")은 Archivo의 크기·굵기·자간을 입은 Noto Sans KR로 그려진다. 제목의 인상은 그래서 글꼴보다 음수 자간과 굵기에서 나온다.

### Hierarchy
- **Wordmark** (900, 268px, 0.84): 표지의 "포트폴리오" 한 번만 쓴다. 900px 미만에서는 clamp(64px, 17vw, 140px).
- **Display XL** (600, 104px, 0.92): 연락처 쪽의 마무리 문장. 900px 미만에서는 clamp(44px, 12vw, 72px).
- **Display LG** (500, 64px, 1): 목차, 스킬처럼 혼자 서는 섹션 쪽의 제목. 900px 미만에서는 clamp(36px, 10vw, 52px).
- **Project Name** (600, 84px, 0.92, -0.04em): 프로젝트 개요 쪽의 프로젝트 이름. 900px 미만에서는 56px. 이 컴포넌트에서만 쓰는 크기다.
- **Heading MD** (500, 46px, 1.2, text-wrap: balance): 표지 캐치프레이즈와 프로필 소개 제목. 900px 미만에서는 clamp(24px, 6.6vw, 32px).
- **Page Title** (600, 46px, 1.1): 프로젝트 2·3쪽의 쪽 제목("UI 개선", "아키텍처"). 900px 미만에서는 26px.
- **Lead** (500, 20px, 1.65, 보조 글자색): 섹션 제목 아래 한 줄 설명. 900px 미만에서는 17px.
- **Body** (400, 16px, 1.75, text-wrap: pretty): 긴 문장. 촘촘한 프로젝트 쪽의 문장은 13~15.5px에 줄 간격 1.5~1.65로 내려간다. 소개 문단은 62em에서 끊는다.
- **Label** (Geist Mono 500, 12px, 0.1em, 대문자): 머리줄과 발줄, 블록 제목, 표 머리, 정의 목록의 이름 칸.
- **Numeral** (Geist Mono 500, 15px, tabular-nums): 목록 번호 01·02·03, 목차의 쪽 범위.
- **Meta** (Geist Mono 400, 13px, 0.02em): 날짜, 기간, 출처 메모, 이미지 캡션.

### Named Rules
**The Three Voices Rule.** Archivo는 이름·제목·숫자, Noto Sans KR은 문장, Geist Mono는 라벨·값·메타를 맡는다. 위계는 크기보다 목소리로 먼저 잡고, 한 요소 안에서 목소리를 섞지 않는다.

**The Tabular Figure Rule.** 숫자는 언제나 tabular-nums로 쓴다. 프로젝트 쪽에는 시간·속도·용량·기여율 같은 성과 숫자를 두지 않는다(2026-10-03 본인 요청). 남는 큰 숫자는 개발자가 된 이유 쪽의 "4 / 4"뿐이다.

**The Keep-All Rule.** 한글은 word-break: keep-all과 overflow-wrap: break-word로 단어 중간에서 줄을 바꾸지 않는다. 제목은 balance, 본문은 pretty로 줄을 나눈다.

**The Type Floor Rule.** 캔버스 기준 11px이 바닥이다. 11px은 한두 단어짜리 mono 태그(Before/After 라벨, 레벨 이름, '대가' 라벨)에만 쓰고, 문장은 12.5px 이상으로 쓴다. 인쇄 배율 0.7795에서 11px은 약 8.6px이 되므로 바닥을 더 내리지 않는다.

## Layout

**화면 뷰어(2026-10-02).** 900px 이상 화면에서는 쪽 하나가 창 안에 통째로 보이도록 폭·높이 중 작은 쪽에 맞춰 줄인다(main.js, 하한 0.62). 쪽은 어두운 뷰어 바탕(--viewer #2a2926) 위 가운데에 그림자와 함께 놓이고, 쪽 사이 간격 --gap(14~32px), 스크롤은 쪽 가운데에 가볍게 붙는다. 인쇄에서는 바탕·간격·그림자가 모두 빠진다.

**쪽 캔버스.** 쪽 하나(.page)는 1440×1018 캔버스다(297:210, A4 가로). 900px 이상 화면과 인쇄에서는 이 크기로 고정하고 넘치는 내용은 잘라 낸다(overflow: hidden). 화면에서는 main.js가 `--scale = 화면 폭 ÷ 1440`을 계산해 쪽마다 `zoom`으로 적용하고, 창 크기가 바뀌면 다시 계산한다. 인쇄에서는 `@page { size: A4 landscape; margin: 0 }`에 `zoom: 0.7795`(297mm = 1122.52px ÷ 1440)를 걸고 쪽마다 `break-after: page`, `break-inside: avoid`로 끊는다. 그래서 화면의 한 쪽과 종이 한 장은 배치가 같다. 넓은 화면은 세로 `scroll-snap-type: y proximity`로 쪽 머리에 가볍게 붙는다.

**쪽 안 구조.** 쪽은 세로 flex(간격 36px)로 머리줄, 본문, 발줄을 쌓는다. 안쪽 여백은 위 56px, 좌우 96px, 아래 44px이다. 본문은 남은 높이를 모두 갖고, 각 쪽의 내용 칼럼은 height 100%의 세로 flex라서 마지막 블록(기여 수치, 성과·회고, 스킬 근거 메모)은 쪽 바닥에 붙는다.

**격자.** 쪽 종류별 격자는 다음과 같다. 개요 480px 글 칼럼 + 대표 화면(남은 폭), UX/UI 개선 카드 3열(간격 24px) 또는 4열(간격 18px), 기술 선택 카드 3열 아래 구조도, 문제 해결 흐름 1fr + 지표 패널 380px(간격 48px) 아래 성과 4열·회고 3열, 프로필 사진 열 240px + 본문(간격 80px), 목차 행 56px / 1fr / 1fr / 72px(행 셋이 남은 높이를 나눠 가짐).

**리듬.** 블록 제목은 라벨 아래 10px에 선을 긋고 14px 뒤에 내용을 시작한다. 목록 행은 위아래 11px, 목차 행은 34px. 간격 값은 4px 배수에 묶여 있지 않다. 쪽 높이를 정확히 채우도록 쪽마다 미세 조정한 값(22px, 26px 등)이 있다.

**좁은 화면(900px 미만, 화면 전용).** 캔버스를 해제한다. 쪽은 내용 길이만큼 늘어나고 여백은 위 36px, 좌우 20px, 아래 32px, 간격은 28px이 된다. 모든 다열 격자는 한 단으로 접히고, 큰 글자는 clamp로 줄어든다. UX 카드의 화면은 잘라 둔 원본 비율 그대로 보인다. 문제 해결 흐름은 단계 이름 아래로 문장이 내려간다. 목차의 쪽 범위는 숨긴다. 480px 미만에서는 머리줄의 보조 표기(표지 날짜)를 숨긴다.

### Named Rules
**The Fixed Sheet Rule.** 900px 이상과 인쇄에서 쪽은 1440×1018을 벗어나지 않는다. 내용이 넘치면 글자를 바닥 아래로 줄이지 말고 내용을 덜어 내거나 다음 쪽으로 나눈다.

**The Same Page Rule.** 화면은 zoom(폭 ÷ 1440), 인쇄는 zoom 0.7795로만 크기를 맞춘다. 900px 이상에서는 쪽 안의 배치를 브레이크포인트로 바꾸지 않는다. 배치를 바꾸는 미디어 쿼리는 `screen and (max-width: 899px)` 하나뿐이다(그 밖에는 머리줄 보조 표기를 숨기는 479px과 인쇄용 쿼리만 있다).

**The Fluid Fallback Rule.** 900px 미만에서는 쪽이 한 단 문서가 된다. 축소하면 읽을 수 없게 되는 그림(구조도)은 축소하지 말고, 같은 정보를 세로 목록으로 바꿔 보여 준다.

## Elevation & Depth

이 시스템은 거의 평평하다. blur와 색이 번지는 그라데이션은 없고, 그림자는 대표 화면 틀 하나에만 있다(종이 위에 화면 캡처를 올린 느낌의 아주 옅은 아래 그림자). 깊이는 세 가지 면과 두 가지 선 무게로만 표현한다. 밝은 면(Warm Paper)이 기본이고, 가라앉은 면(Sunk Paper)은 목차 같은 정리 쪽, 그리고 쪽 안에서 따로 읽어야 하는 지표 패널에 쓴다. 잉크 면(Press Ink)은 사람에 관한 쪽(프로필, 연락처)에만 쓴다. 쪽의 면 순서는 밝음(표지) → 잉크(프로필) → 밝음(개발자가 된 이유, 스킬) → 가라앉음(목차) → 밝음(프로젝트 전부) → 잉크(연락처)다.

### Named Rules
**The Flat Paper Rule.** 번지는 그라데이션과 반투명 유리 효과를 쓰지 않고, 그림자는 대표 화면 틀의 옅은 아래 그림자 하나뿐이다. 떼어 보여야 할 것은 면을 가라앉히거나 선을 그어서 구분한다. 종이에 인쇄해도 똑같이 읽혀야 한다.

**The Two-Weight Line Rule.** 1px 잉크 선(글자색)은 묶음을 연다. 목록 위, 성과 줄 위, 그리고 프로필·스킬·회고의 블록 제목 아래에 긋는다. 1px 연한 선(Hairline)은 묶음 안의 행을 나눈다. 이 밖의 선 굵기는 2px뿐이다. 개요 쪽 문제 한 줄의 왼쪽 선, 문제 해결 흐름의 세로 연결선(위 절반 Hairline, 아래 절반 파랑으로 딱 끊어짐)과 단계 원 테두리, 연락처 메일 링크의 파랑 밑줄.

## Shapes

기본 형태는 직각이다. 쪽, 사진, 표, 목록 행은 모서리가 없다. 둥글림은 역할별로 정해져 있다. 누르거나 붙이는 것(버튼, 칩, 목차의 수상 표시)은 알약(999px), 따로 읽는 카드(UX 카드, 기술 선택 카드, 지표 패널)는 12px, 대표 화면 틀은 10px, 구조도 노드는 6px, 문제 해결 단계 번호는 원이다. 막대, 레벨 칸, 범례 견본, 포커스 테두리처럼 작은 표시는 1~2px로 거의 각지게 둔다. 점선은 '아직 없음'이나 '바깥'을 뜻한다. 외부 노드(4 3 점선), 외부 범례, 이미지가 아직 없는 자리(1px 점선)에 쓴다.

## Components

### Page Frame (쪽 틀)
서류 한 장의 틀. 모든 쪽이 이 틀 하나로 만들어진다.
- **머리줄(running head):** 쪽 맨 위의 Label 한 줄. 왼쪽에는 섹션 번호 "(04)"(강조색)와 섹션 이름 "Project — COSMOS"(보조 글자색)를 12px 간격으로 놓고, 오른쪽에는 쪽수 "06 / 16"(보조 글자색, 줄바꿈 없음)을 놓는다. 제목 위에 얹는 아이브로가 아니라 인쇄 문서의 머리글(folio)이다. 쪽 가장자리에 붙고, 모든 쪽에서 자리와 형식이 같다. 표지는 번호 없이 이름과 날짜를 보조 표기로 단다.
- **본문:** 남은 높이를 모두 갖는다(flex 1, min-height 0).
- **발줄(page foot):** 프로젝트 쪽에만 있다. 1px Hairline 선 위 14px, Label 보조 글자색. 왼쪽은 프로젝트 이름, 오른쪽은 이 쪽의 하위 섹션("개요 · 역할 · 기여도", "UX/UI 개선", "기술 선택 · 구조", "문제 해결 · 성과 · 회고").
- **면:** light / sunk / dark 중 하나를 고르면 문맥 변수가 정해진다. 인쇄에서는 모두 흰 종이로 바뀐다.

### Buttons
- **Shape:** 알약(999px).
- **Primary:** 잉크 바탕에 on-dark 글자, Geist Mono 12px 500 대문자 0.1em, 안쪽 여백 16px 32px, 글자와 끝 방향 표시 사이 12px.
- **Accent:** Signal Blue 바탕. 실제로 쓰인 버튼은 연락처 쪽 "Send an email" 하나뿐이다.
- **Hover / Focus:** 바탕색과 글자색이 0.3s ease-out(cubic-bezier(0.16, 1, 0.3, 1))으로 바뀐다. Accent는 hover에서 종이 바탕과 잉크 글자로 뒤집힌다. 끝의 방향 표시는 0.4s 동안 4px 오른쪽으로 민다. 포커스는 2px 강조색 테두리, 4px 띄움.
- **Print:** 버튼과 "Back to top" 링크는 인쇄에서 숨긴다.

### Chips
- **Style:** 알약, 1px Hairline 테두리, 칩 바탕(밝은 면에서는 Sunk Paper, 가라앉은 면에서는 Warm Paper), Geist Mono 12px, 안쪽 여백 4px 10px. UX 카드의 구현 칩은 11.5px, 3px 9px로 줄인다.
- **State:** 상태 없는 정적 태그다.

### Cards / Containers
- **Corner Style:** 12px.
- **Background:** UX 카드·기술 선택 카드는 Warm Paper, 지표 패널은 Sunk Paper.
- **Shadow Strategy:** 없음(Elevation & Depth 참고).
- **Border:** UX 카드·기술 선택 카드는 1px Hairline. 지표 패널은 테두리 없이 면 색으로 구분한다.
- **Internal Padding:** 카드 20px 22px(4열 UX 카드는 16px), 지표 패널 20px 22px.

### Navigation
- **목차 행:** 번호(Numeral, 강조색) / 프로젝트 이름(Archivo 500 60px)과 부제, 수상 알약 / 기간·인원·역할·요약 / 쪽 범위(Numeral, 보조 글자색). 행 전체가 프로젝트 첫 쪽으로 가는 링크이고, hover에서는 이름만 0.3s 동안 강조색으로 바뀐다. 목록 위에 1px 잉크 선, 행 사이에 1px Hairline. 900px 미만에서는 번호와 내용 두 열로 접히고 쪽 범위는 숨긴다.
- **수상 알약:** 강조색 바탕, 종이색 글자, Geist Mono 12px(대문자 아님), 트로피 아이콘, 6px 12px.
- **맨 위로:** 연락처 쪽의 Label 강조색 링크.

### Block Title (블록 제목)
쪽 안 묶음의 제목. Label 글자 아래 10px에 1px 선을 긋고, 14px 뒤에 내용이 온다. 묶음을 여는 자리(프로필, 스킬, 성과, 회고)는 잉크 선을 쓴다. 블록 제목은 그 자체가 제목이며, 다른 제목 위에 얹지 않는다.

### Project Overview (프로젝트 개요 쪽)
왼쪽 480px 글 칼럼 + 오른쪽 대표 화면. 글 칼럼은 위에서부터 프로젝트 이름(Project Name), 한 줄 부제(20px), 기간·인원·역할 정의 목록(역할은 강조색 600), 수상 알약, 왼쪽 2px 강조색 선을 단 문제 한 줄, '내가 만든 것' 번호 목록 3줄(16px, 행 사이 Hairline), 바닥의 기여 수치 3개(Archivo 600 40px 강조색 + 13px 이름).

### Project Pages (프로젝트 세 쪽)
- **개요:** 왼쪽 500px — 아이콘 + 이름(84px), 부제(25px), 기간·인원·역할(19px, 역할은 "FE"), 수상 알약, 바닥에 '기획 배경' 블록(헤드라인 30px + 점 목록 3줄 21px). 오른쪽 대표 화면(Device Showcase).
- **UI 개선:** 쪽 제목 + 한 줄 리드, 카드 3열(4개면 4열). 카드 = 브랜드 빛 위에 떠 있는 화면 + 번호·제목(28px, 4열 24px) + 한 문장(21px, 4열 19px). Before/After·칩·지표는 두지 않는다. 카드 묶음은 남는 높이 가운데.
- **아키텍처:** 쪽 제목 + 한 줄 리드, 가운데 큰 구조도(ArchDiagram, 본인 담당은 파랑), 아래 1px 잉크 선 위 설명 3줄(3열, 20px).
- 말투: 프로젝트 문구는 개조식(명사형으로 끝맺음, 예: "~로 분리", "~ 표시"). "~다"로 끝나는 서술과 "내가 맡았다" 같은 담당 문장은 쓰지 않는다 — 담당은 구조도 파란 상자와 역할 값(목차·개요에서 파랑)이 보여 준다.
- 문구 한도: 기획 배경 헤드라인 26자, 점 36자, UI 카드 제목 12자·문장 38자, 아키텍처 리드 36자·설명 34자.
### Architecture Diagram (구조도)
노드 210×66, 열 간격 86, 행 간격 50. 노드마다 content.js architecture.nodes[].icon(icons.js 이름)이 있으면 왼쪽 38px 흰 칸(9px 둥글림, 1px Hairline, 본인 담당은 파랑 45%)에 브랜드 색 로고(simple-icons hex, 너무 옅은 Hadoop·Pinia는 같은 계열로 진하게; 선 아이콘은 글자색)를 두고 글자는 x 64부터. 이름 18px, 보조 줄·간선 라벨 14.5px. 같은 두 노드를 오가는 간선 한 쌍은 위아래 9px씩 벌려 두 줄로. 좁은 화면 목록에서는 이름 앞에 20px 로고.
데이터 흐름을 왼쪽에서 오른쪽으로 그린 SVG. 배치는 archLayout.js가 계산한다(노드 150×60, 열 간격 96, 행 간격 34, 0.5행 단위 허용).
- **노드:** 6px 둥글림. 이름은 Archivo 600 16px, 보조 줄은 Noto Sans KR 13.5px 보조 글자색. 팀원 노드는 면 색 바탕에 1.2px Hairline. 본인 노드는 강조색 10% 틴트, 1.6px 강조색 테두리, 이름도 강조색. 외부 노드는 4 3 점선.
- **간선:** 1.4px 보조 글자색 직선에 끝 화살촉. 간선 라벨은 Noto Sans KR 13.5px 보조 글자색이고, 면 색 5px 테두리를 둘러 선 위에서도 읽힌다. 라벨은 다른 선·노드·라벨과 겹치지 않는 첫 자리에 놓고, 다른 선에 12px 이내로 붙어 어느 선의 라벨인지 헷갈리는 자리는 피한다.
- **그리는 순서:** 간선 → 노드 → 간선 라벨.
- **범례:** 그림 아래에 본인 담당 / 팀원 담당 / 외부 견본(14×10, 2px 둥글림)을 Label 대소문자 그대로 둔다.
- **900px 미만:** SVG와 범례를 감추고, 같은 노드를 담당별 목록(본인 담당 / 팀원 담당 / 외부)으로 보여 준다. 본인 묶음은 제목과 밑줄이 강조색이고, 노드마다 나가는 흐름을 "→ 대상 · 경로" 줄로 적는다.

### Level Bar (5단계 숙련도)
숙련도를 칸 다섯 개로 보여 주는 막대. 12×6px 칸 다섯 개를 3px 간격으로 놓고, 켜진 칸은 강조색, 꺼진 칸은 Hairline이며 1px 둥글림이다. 오른쪽 6px 뒤에 단계 이름(Geist Mono 11px 500 보조 글자색)을 둔다. 단계는 기초(튜토리얼 가능) / 초급(예제 참고 구현) / 중급(문서 보며 독립 개발) / 고급(프로젝트 주도 활용) / 전문가(코드 리뷰·멘토링). 스킬 쪽 머리에 다섯 단계 범례를 둔다. 스킬 행은 로고 아이콘, 기술 이름(Archivo 600 16px), 레벨 막대를 한 줄에 두고, 그 아래에 근거 문장(13px 보조 글자색)을 단다. 화면 낭독기에는 "숙련도 중급 (5단계 중 3)"처럼 읽힌다.

### Story Page (개발자가 된 이유)
프로필 다음 쪽(밝은 면, 머리줄 "(01) Profile — Why Developer"). 왼쪽 460px에 헤드라인(Archivo 600 46px, balance)과 3단계 흐름, 오른쪽에 웹디자인 작업 벽.
- **3단계 흐름:** 문제 해결 흐름과 같은 문법. 원 번호 36px를 2px Hairline 세로선이 잇고, 마지막 단계(지금)만 원을 강조색으로 채우고 태그도 강조색. 태그(Label) / 제목(Archivo 600 22px) / 설명(16px / 1.6 보조 글자색).
- **작업 벽:** 2행 × (넓은 칸 2 : 좁은 칸 1). 넓은 칸은 PC 첫 화면(왼쪽 위 기준으로 채움), 좁은 칸은 모바일 화면이나 긴 전체 페이지(위 기준). 칸은 10px 둥글림 + 1px Hairline. 칸 아래 이름(Archivo 600 16px) + 업종(13px 보조 글자색).
- **증거 줄:** 1px 잉크 선 아래 큰 숫자 "4 / 4"(Archivo 600 34px 강조색)와 "디자인한 사이트 모두 업체 제작 수주".
- **이미지:** src/assets/shots/design-*.jpg. Figma 파일의 작업 메모 프레임(계정 정보가 있을 수 있음)은 캡처하지 않는다.

### Device Showcase (화면 보여 주기 — components/Showcase · WebCard + 미리 구운 폰 이미지)
노트북 목업은 쓰지 않는다. 웹 화면과 모바일 화면을 다르게 보여 준다.
- **웹 카드(WebCard):** 스크린샷 비율 그대로(자르지 않음), 2px 잉크 테두리, 16px 둥글림, 아래로 길게 떨어지는 그림자 하나.
- **폰:** CSS로 그리지 않고 3D로 한 번 구운 투명 WebP(src/assets/shots/*-phone-*.webp, 생성: scratchpad tools/phone3d.mjs)를 평범한 이미지로 놓는다. 검은 아이폰(검은 테두리 + 얇은 회색 하이라이트, 다이내믹 아일랜드, 상태 표시줄 9:41), 위쪽이 살짝 멀어지게 눕히고, **기우는 쪽 옆면이 보인다**(오른쪽으로 기울면 오른쪽 두께, 왼쪽이면 왼쪽 — 참고: 본인이 준 BBOK 시안). 페이지에서 transform을 쓰지 않으므로 인쇄에서도 선명하다.
- **구도(Showcase, 무대 1.12:1, 위치는 모두 무대 폭 기준 %):** web-phones(카드 오른쪽 위 + 폰 두 대가 왼쪽 아래에서 반대로 기울어 겹침), web-art(카드 왼쪽 위 + 앞 오른쪽에 선 일러스트가 카드 오른쪽 아래를 살짝 가림), web-phone(카드 왼쪽 위 + 폰 한 대 앞 오른쪽). 폰 아래에는 기울지 않은 평평한 타원 바닥 그림자, 높이 뜬 폰의 그림자는 같은 바닥에 더 작고 옅게.
- **브랜드 빛:** 프로젝트·작업마다 브랜드 색 두 개(hero.glow, story.works[].tint)를 빛 덩어리 두 개로 뒤에 깐다 — 덩어리마다 자기 상자 안에 내접한 타원(closest-side)이라 가장자리에서 완전히 사라져 잘린 경계가 없다(blur 필터 없이 — 인쇄에서도 같게). 강조색 규칙의 유일한 예외이며, 화면 뒤에만 쓴다. UX 카드 화면 칸과 작업 칸도 같은 빛 위에 화면을 띄운다.

### Hero Composition (개요 쪽 대표 화면)
PC 화면은 자르지 않는다 — 칸 폭에 맞추고 높이는 원래 비율. (이전의 노트북 프레임·노트북 목업은 폐기 — Device Showcase 참고.) 앞에 겹칠 이미지(content.js hero.front)가 있으면 노트북을 86% 폭으로 두고, 기본은 왼쪽 아래 앞에 겹친다(hero.side = "right"면 노트북을 왼쪽, 일러스트를 오른쪽 앞에 40% 폭으로). hero.layout = "tilt"면 폰 두 대를 원근으로 기울여(26°/−12° 회전) 겹쳐 놓는다. 겹침 높이는 hero.overhang(칸 폭의 %). 투명 배경 이미지는 모양을 따라 drop-shadow. 그림 묶음은 오른쪽 칸 가운데에 놓이고 캡션이 아래에 붙는다. 프로젝트 이름 앞에는 아이콘(높이 76px, 목차는 52px)을 둔다.

### Profile Photo (프로필 사진)
2쪽 왼쪽 240px 폭, 2:3 세로 사진(10px 둥글림) — 증명사진 대신 달리는 모습. 연락처 쪽 큰 문장은 한글 두 줄(88px, 줄 간격 1.14)로 "끝까지 봐 주셔서 / 감사합니다."

### Screenshot Frame (대표 화면 틀)
개요 쪽 오른쪽 칸을 채운다. 10px 둥글림, 위·왼쪽 기준으로 잘라 낸다(object-fit: cover), 아주 옅은 아래 그림자 하나. 캡션은 Meta 보조 글자색으로 무엇의 화면인지와 데이터 성격(예시 시세, 시뮬레이터 데이터)을 적는다. 이미지가 없으면 같은 자리에 1px 점선 상자를 둔다.

## Do's and Don'ts

### Do:
- **Do** 새 쪽은 쪽 틀로 만든다. 1440×1018 캔버스, 여백 56px 96px 44px, 머리줄(섹션 번호 · 이름 · 쪽수)을 두고, 프로젝트 쪽에는 발줄도 단다.
- **Do** 컴포넌트 색은 면 문맥 변수(--bg, --fg, --fg-muted, --rule, --acc)로 칠해서, 밝은 면, 가라앉은 면, 어두운 면, 인쇄 네 곳에서 모두 확인한다.
- **Do** 개선 수치는 Before/After 막대로 보여 준다. '전'은 보조 글자색, '후'는 Signal Blue로 칠하고, 길이는 전·후·기준선 중 최댓값 기준(최소 2%)으로 잡고, 출처 메모를 단다.
- **Do** 본인·팀원·외부 구분은 The Mine-Is-Blue Rule 하나로 표시한다(파랑 선과 10% 틴트 / Hairline / 점선).
- **Do** 본문은 캔버스 19px 이상, 라벨은 14px 이상으로 쓴다(화면에서는 쪽이 창 높이에 맞춰 줄어들기 때문).
- **Don't** 프로젝트 쪽에 시간·속도·용량·기여율 숫자를 쓰지 않는다. 역할은 "FE" 한 단어.
- **Do** 묶음을 열 때는 블록 제목(Label + 1px 선)을 쓰고, 행은 1px Hairline으로 나눈다.
- **Do** 900px 미만에서 축소하면 읽히지 않는 그림은 구조도처럼 담당별 세로 목록으로 바꾼다.

### Don't:
- **Don't** 번지는 그라데이션은 화면 뒤 브랜드 빛 말고는 쓰지 않는다. blur 필터와 반투명 유리 면은 쓰지 않는다. 그림자는 떠 있는 화면(웹 카드·폰·일러스트) 말고는 쓰지 않는다. 종이에 인쇄해도 같은 쪽이어야 한다.
- **Don't** 노트북 목업을 쓰지 않는다. 웹은 떠 있는 카드, 모바일은 기기 프레임.
- **Don't** 글로 설명하려 하지 않는다. 항목은 한 줄, 개선은 화면 + 전→후로 보여 주고, 각주·감사 문구를 쓰지 않는다.
- **Don't** 두 번째 강조 색상을 들이지 않는다. 어두운 면의 Lifted Blue(#7c84ff)는 같은 파랑을 밝힌 것이지 새 색이 아니다.
- **Don't** 어두운 면에서 Signal Blue(#1f2cff)로 작은 글자를 쓰지 않는다(잉크 위 2.6:1). 강조 변수를 거쳐 Lifted Blue로 쓴다.
- **Don't** 900px 이상에서 쪽 안의 배치를 브레이크포인트로 바꾸지 않는다. 캔버스는 zoom으로만 크기가 바뀐다.
- **Don't** 쪽을 넘기려고 글자를 캔버스 기준 11px 아래로 줄이지 않는다. 내용을 덜어 내거나 쪽을 나눈다.
- **Don't** 제목 위에 작은 mono 라벨(아이브로, 키커)을 얹지 않는다. 쪽 위의 라벨은 머리줄 하나뿐이고, 블록 라벨은 선을 거느린 블록 제목으로만 쓴다.
- **Don't** 아이콘 자리에 글자 기호(→ ↑ ★)나 이모지를 쓰지 않는다. 아이콘은 Icon 컴포넌트의 인라인 SVG(브랜드 로고 채움, 1.75 선 아이콘, Adobe 도구용 글자 배지)만 쓴다. 문장 안의 화살표(292→150KB)는 글자이므로 괜찮다.
- **Don't** hover에만 정보를 맡기지 않는다. hover는 이름 색, 버튼 색, 화살표 이동 같은 확인 신호일 뿐이고, 인쇄에서는 사라진다.

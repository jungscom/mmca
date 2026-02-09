# UI 구현 및 정보 구조(IA) 명세서

본 문서는 프로젝트의 디렉토리 구조가 실제 서비스의 정보 구조와 어떻게 매핑되는지를 정의한 명세서입니다.

## 1. 프로젝트 디렉토리 구조 (Directory Tree)
```
프로젝트명 : MMCA
├─ cheong_list.html
├─ child_list.html
├─ css
│  ├─ ._exh_list.css
│  ├─ ._index.css
│  ├─ exh_detail.css
│  ├─ exh_list.css
│  ├─ fixed.css
│  ├─ index.css
│  ├─ login.css
│  ├─ reserve.css
│  ├─ reset.css
│  └─ style.css
├─ deok_list.html
├─ gwa_list.html
├─ image
│  ├─ cheong_exh1.png
│  ├─ cheong_exh2.png
│  ├─ cheong_exh3.png
│  ├─ cheong_exh4.png
│  ├─ child_exh1.png
│  ├─ deok_exh1.png
│  ├─ gwa_exh1.png
│  ├─ gwa_exh2.png
│  ├─ gwa_exh3.png
│  ├─ gwa_exh4.png
│  ├─ ic_baseline-apple.svg
│  ├─ mmca_cheongju.png
│  ├─ mmca_child.png
│  ├─ mmca_deoksugung.png
│  ├─ mmca_gwacheon.png
│  ├─ mmca_logo.png
│  ├─ mmca_logo2.png
│  ├─ mmca_seoul.png
│  ├─ seoul_exh1.png
│  ├─ seoul_exh2.png
│  ├─ seoul_exh3.png
│  ├─ seoul_exh4.png
│  ├─ seoul_exh5.png
│  ├─ seoul_exh6.png
│  ├─ simple-icons_naver.svg
│  └─ wpf_speech-bubble.svg
├─ js
│  ├─ ._jquery-4.0.0.min.js
│  ├─ exh_detail.js
│  ├─ exh_list.js
│  ├─ index.js
│  ├─ jquery-1.12.0.min.js
│  ├─ jquery-1.7.2.min.js
│  ├─ jquery-2.1.3.min.js
│  ├─ jquery-4.0.0.min.js
│  ├─ jquery-ui.min.js
│  ├─ jquery.easing.1.3.min.js
│  ├─ jquery.scrollTo.min.js
│  └─ reserve.js
├─ login.html
├─ pdf
│  └─ 2025+이중시선_브로슈어.pdf
├─ reserve.html
├─ seoul_exh1.html
├─ seoul_list.html
└─ total_list.html

```

## 2. 정보 구조(IA) 및 기능 매핑
|파일/폴더명|정보 구조상 역할|주요 구현 기능|
|-------------|------------------|---------------|
|index.html|메인페이지|전체 서비스의 진입점, 지역 선택 및 주요 섹션 안내|
|~list.html|지역별 전시 목록|지역별 전시 리스트 탐색|
|seoul_exh1.html|전시 상세 페이지|전시 상세 정보제공, 예약 페이지 연결|
|login.html|로그인 페이지|사용자 인증 UI
|reserve.html|예약페이지|관람 수량 선택 및 금액 계산
|css/|디자인시스템|UI 시각적 일관성 및 레이아웃 정의|
|js/|상호작용 로직|사용자 이벤트 처리 및 동적 기능 구현|
|image/|시각적 콘텐츠|브랜드 이미지 및 전시 이미지 제공|
|pdf/|부가 콘텐츠|전시 브로슈어 제공|


## 3. 구조 설계 원칙
- **자원 분리** : HTML, CSS, JavaScript를 폴더별로 명확히 분리하는 구조를 기반으로 설계하여 코드 충돌을 방지하고 유지보수 시 수정 범위를 명확하게 만든다.
  - HTML : 콘텐츠 구조와 의미 전달
  - CSS : 시각적 표현 및 레이아웃
  - JS : 사용자 상호작용 및 동작 제어
- **기능 중심 파일 구조** : 파일 및 폴더는 “기능 기준”으로 분류하여 프로젝트 구조만 보더라도 서비스 흐름을 이해할 수 있도록 구성하였다.
- **실제 사용자 흐름 기반 구조 설계** : 사용자의 실제 서비스 이용 흐름을 기준으로 구조를 설계하여 서비스 이해도를 높였다.
- **공통 요소 재사용** : Header / Footer / 버튼 / 카드 UI 등 반복되는 요소를 공통 스타일로 관리하였다.
  - UI 일관성 유지
  - 중복 코드 감소
  - 디자인 변경 시 효율적으로 수정 가능

## 4. 기술적 특징
- **인터랙션 중심 퍼블리싱 구현** : 정적 페이지에 다양한 사용자 인터랙션을 적용하여 단순 정보 사이트를 사용자와 상호작용하는 페이지로 개선하였다.
- **jQuery 기반 DOM 제어** : 순수 JavaScript 대비 간결한 코드로 DOM 탐색 및 이벤트 처리를 구현하였다.
- **스크립트 로딩 최적화** : 페이지별로 필요한 JavaScript만 로드하도록 구성하여 페이지 성능을 고려하였다.
- **시각 콘텐츠 중심 UI 구성** : 미술관 사이트 특성을 반영하여 이미지 중심의 카드형 UI를 적용하였다.
- **스타일 관리 체계 고도화** : CSS를 역할별·페이지별로 분리하여 스타일 관리 효율을 높였다.
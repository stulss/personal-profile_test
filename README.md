# 🌐 홍주형 통합 마스터 포트폴리오 (Master Portfolio Showcase)

DevOps · 정보보안 · 풀스택 엔지니어 홍주형의 공식 통합 웹 포트폴리오입니다.  
Vercel에 배포된 라이브 서비스 22개와 GitHub 공개 저장소 38개의 대표 성과를 카테고리별로 집약하여 제공합니다.

**공개 라이브 주소:** [https://stulss.github.io/personal-profile_test/](https://stulss.github.io/personal-profile_test/)

---

## ✨ 핵심 특징 및 주요 기능

- **마스터 쇼케이스 집약 (Master Projects Hub)**:
  - 9개 프로젝트 수록: **코어 4** (NEXUS WORK[팀 4명, 기여도 40%], NEXUS-GUARD[개인 독립 실행형, 100%], Team PM App, ZTNA 비밀금고) + **랩 5** (AI 컨텍스트 인계랩, Plan-Do-See 다이어리, 카드뉴스 메이커, 실시간 정보판, 딱 하나 이상함)
  - 프로젝트별 **3단 링크** 제공: `라이브 데모(App)` / `상세 포트폴리오(Showcase)` / `GitHub 소스코드(Repo)`
  - **카테고리 인터랙티브 필터**: 전체 / 보안 & AI / 엔터프라이즈 / 크리에이티브
  - 실전 검증 수치 및 트러블슈팅(프록시 헤더 복원, 번들 42.6% 최적화, ZTNA 판정 규칙 등) 명시
- **IT 역량 이력서 연계**:
  - `IT_역량이력서_수강전후_자가진단_작성_수정본.docx`의 4대 기술 도메인(보안·AI / 서버·DevOps / 프론트엔드 / 자동화·QA) 및 자가진단 숙련도와 일치
  - 코리아AI아카데미 SKT_ALEPH_A(출석률 96.8%, 63일 중 61일) 및 그린컴퓨터아카데미 교육 이력, 산학협력단/일학습병행 매니저 경력을 이력서 문구 기준으로 기재
- **편의 인터랙션**:
  - 원클릭 이메일 주소 복사 토스트 알림 기능 (`doffl9737@gmail.com`)
  - 완전 반응형 UI (데스크톱, 태블릿, 모바일) 및 부드러운 스크롤 애니메이션

---

## 📁 폴더 구조

```
personal-profile_test/
├── index.html                 # 마스터 포트폴리오 메인 페이지
├── css/
│   └── style.css             # 반응형 스타일 & 테마 & 필터/뱃지 확장
├── js/
│   └── script.js             # 네비게이션, 카테고리 필터링, 이메일 복사 인터랙션
├── assets/                   # 프로필 사진 1종 + 프로젝트 스크린샷 9종
│   ├── profile.jpg
│   ├── nexus-work.png
│   ├── nexus-guard.png
│   ├── team-pm-app.png
│   ├── ztna-vault.png
│   ├── ai-context-handover-lab.png
│   ├── plan-do-see-diary.png
│   ├── card-news-maker.png
│   ├── realtime-info-board-t04.png
│   └── odd-one-out.png
├── docs/
│   ├── CHANGELOG.md          # 버전별 변경 이력 (v2.6 갱신)
│   ├── CONTENT-GUIDE.md      # 콘텐츠 가이드
│   └── DEPLOYMENT.md         # 배포 가이드
├── 작업내역_체크리스트.md     # 작업 히스토리 및 진행 로그
└── README.md                  # 프로젝트 설명서
```

---

## 🚀 로컬 실행 방법

브라우저에서 `index.html`을 직접 열거나 로컬 웹서버를 구동합니다:

```bash
# PowerShell / Command Prompt
python -m http.server 8000
```
브라우저에서 `http://localhost:8000` 접속

---

## 📬 연락처 (Contact)

- **이메일**: [doffl9737@gmail.com](mailto:doffl9737@gmail.com)
- **GitHub**: [https://github.com/stulss](https://github.com/stulss)
- **포트폴리오(제출용)**: [https://personal-profiletest.vercel.app](https://personal-profiletest.vercel.app)
- **지원 포지션**: 네트워크 인프라 및 정보보안, 시스템 보안
- **취업 가능 시기**: 2026년 11월 (즉시 가능)

## 📝 주요 섹션 설명

### Hero (히어로)
- 프로필 사진(`assets/profile.jpg`), 이름, 한 줄 소개, 핵심 지표 4종(출석률 96.8% 등)
- GitHub 링크

### About (소개)
- 자신을 소개하는 한두 문단

### Skills (기술)
- 보유한 기술 스택을 태그 형태로 표시

### Career & Education (경력 & 교육)
- 타임라인 형식의 경력사항 및 학력
- 회사, 직책, 담당 업무 등 기록

### Projects (프로젝트)
- 코어 4개(NEXUS WORK, NEXUS-GUARD, Team PM App, 최부장의 비밀금고)와 랩 5개를 실제 화면으로 소개
- 프로젝트의 목적, 기술 스택, 역할·기여도, 검증 결과, 라이브 주소와 소스 주소를 함께 표시

### Contact (연락)
- 이메일 및 소셜 링크
- 협업 및 기회 제안 메시지

## 🎨 커스터마이징

### 색상 변경
`css/style.css`에서 `#007bff` (파란색)를 찾아 원하는 색상으로 변경합니다.

### 폰트 변경
`css/style.css`의 `body` 폰트 스택을 수정합니다.

### 레이아웃 조정
각 섹션의 padding, gap, 너비 등을 CSS에서 조정합니다.

## 📚 문서

- [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md) — 각 섹션의 TODO 항목 상세 설명
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) — GitHub Pages 배포 단계별 가이드
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) — 작업 이력 및 수정 기록

## 🐛 문제 발생 시

1. **이미지가 안 보임**: `assets/` 경로와 파일명을 확인
2. **스타일이 적용 안 됨**: `css/style.css` 경로 확인, 브라우저 캐시 초기화 (Ctrl+Shift+R)
3. **메뉴가 안 열림**: 브라우저 콘솔에서 JavaScript 오류 확인 (F12)

## 📞 추가 지원

GitHub Pages 배포 중 문제가 생기면:
- [GitHub Pages 공식 문서](https://pages.github.com/)
- [GitHub Pages 트러블슈팅](https://docs.github.com/en/pages/getting-started-with-github-pages)

## 📄 라이센스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**마지막 업데이트**: 2026-11-13

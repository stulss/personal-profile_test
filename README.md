# 🌐 Personal Portfolio Website

개인 프로필과 포트폴리오를 소개하는 단일 페이지 웹사이트입니다.

## ✨ 특징

- **반응형 디자인**: 데스크톱, 태블릿, 모바일 모두 대응
- **미니멀 & 클린**: 불필요한 요소를 제거한 깔끔한 디자인
- **순수 HTML/CSS/JS**: 프레임워크 없이 빠른 로딩과 최적화
- **GitHub Pages 배포 준비**: 쉬운 무료 배포 과정
- **스크롤 애니메이션**: 부드러운 스크롤 효과와 헤더 그림자
- **모바일 메뉴**: 반응형 네비게이션 메뉴

## 📁 폴더 구조

```
personal-profile/
├── index.html                 # 메인 HTML 파일
├── css/
│   └── style.css             # 스타일시트
├── js/
│   └── script.js             # JavaScript (인터랙션)
├── assets/                   # 이미지 및 리소스 폴더
├── docs/
│   ├── CONTENT-GUIDE.md      # 콘텐츠 입력 가이드
│   ├── DEPLOYMENT.md         # GitHub Pages 배포 가이드
│   └── CHANGELOG.md          # 변경 이력
└── README.md                  # 이 파일
```

## 🚀 로컬에서 실행하기

### 1. 폴더 열기
브라우저에서 `index.html`을 직접 열 수 있습니다:
- 파일 탐색기에서 `personal-profile` 폴더로 이동
- `index.html` 파일을 마우스 오른쪽 클릭
- "다른 프로그램으로 열기" → 브라우저 선택

### 2. 로컬 서버 사용 (선택사항)
Python이 설치되어 있으면 간단한 로컬 서버를 시작할 수 있습니다:

```bash
# personal-profile 폴더에서
python -m http.server 8000
# 또는 Python 2.x
python -m SimpleHTTPServer 8000
```

그 후 브라우저에서 `http://localhost:8000`으로 접속합니다.

## ✏️ 콘텐츠 작성하기

`index.html`의 `<!-- TODO: ... -->` 주석들을 찾아 자신의 정보로 교체하세요.

상세 가이드는 [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md)를 참고하세요.

### 주요 수정 항목
- **이름**: 헤더, 히어로 섹션, 푸터
- **소개**: 자기소개 문단, 한 줄 태그라인
- **기술**: Skills 섹션의 기술 태그
- **경력**: Career & Education 타임라인
- **프로젝트**: Projects 섹션의 카드 (3개)
- **연락처**: 이메일, GitHub, LinkedIn 링크

## 🌍 GitHub Pages로 배포하기

상세한 배포 가이드는 [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)를 참고하세요.

### 간단한 단계
1. 이 폴더를 GitHub 저장소로 만들기
2. `git init` 실행
3. GitHub에 저장소 생성 (`username.github.io` 추천)
4. 코드 푸시하기
5. GitHub Pages 활성화 (저장소 설정에서)

## 📝 주요 섹션 설명

### Hero (히어로)
- 프로필 사진, 이름, 한 줄 소개
- 소셜 미디어 링크 (GitHub, LinkedIn, Email)

### About (소개)
- 자신을 소개하는 한두 문단

### Skills (기술)
- 보유한 기술 스택을 태그 형태로 표시

### Career & Education (경력 & 교육)
- 타임라인 형식의 경력사항 및 학력
- 회사, 직책, 담당 업무 등 기록

### Projects (프로젝트)
- 진행한 프로젝트 3개를 카드로 표시
- 프로젝트 설명, 사용 기술, 링크 포함

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

1. **이미지가 안 보임**: 경로를 확인하거나 `https://via.placeholder.com` 링크를 사용
2. **스타일이 적용 안 됨**: `css/style.css` 경로 확인, 브라우저 캐시 초기화 (Ctrl+Shift+R)
3. **메뉴가 안 열림**: 브라우저 콘솔에서 JavaScript 오류 확인 (F12)

## 📞 추가 지원

GitHub Pages 배포 중 문제가 생기면:
- [GitHub Pages 공식 문서](https://pages.github.com/)
- [GitHub Pages 트러블슈팅](https://docs.github.com/en/pages/getting-started-with-github-pages)

## 📄 라이센스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**마지막 업데이트**: 2026-08-13

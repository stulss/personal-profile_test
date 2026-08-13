# 🚀 GitHub Pages 배포 가이드

이 문서는 GitHub Pages를 통해 개인 포트폴리오 웹사이트를 무료로 배포하는 단계별 가이드입니다.

---

## 📋 사전 준비사항

- GitHub 계정 (무료로 생성 가능: https://github.com/signup)
- Git 설치 (https://git-scm.com/download/)
- 텍스트 에디터 또는 IDE

---

## 📝 Step 1: GitHub 저장소 생성

### 1-1. GitHub에 로그인
1. https://github.com에 접속
2. 우측 상단의 `+` 아이콘 → `New repository` 클릭

### 1-2. 저장소 설정

**저장소명**을 다음 중 하나로 설정하세요:

#### 옵션 A: 추천 (username.github.io)
```
저장소명: username.github.io
(예: john-doe.github.io, kim-developer.github.io)
```
- 이 경우, 자동으로 `https://username.github.io`에서 접근 가능

#### 옵션 B: 일반 이름
```
저장소명: personal-profile (또는 다른 이름)
```
- 이 경우, `https://username.github.io/personal-profile`에서 접근

### 1-3. 저장소 옵션

```
☐ Public (공개)  ← 반드시 체크
☐ Private (비공개) ← 체크하지 않음

☐ Initialize this repository with:
  - README (체크 안 함, 나중에 자신의 README가 있으므로)
  - .gitignore (체크 안 함)
  - License (체크 안 함)
```

### 1-4. "Create repository" 클릭

저장소 생성 완료! 빈 저장소 페이지로 이동합니다.

---

## 🔧 Step 2: 로컬 폴더를 Git 저장소로 초기화

### 2-1. 폴더 위치 확인
`personal-profile` 폴더에서 명령줄(Command Prompt/PowerShell)을 엽니다.

**Windows**:
- 폴더에서 마우스 오른쪽 클릭 → "PowerShell 여기에서 열기" 또는 "터미널 여기에서 열기"

### 2-2. Git 초기화

```bash
git init
```

### 2-3. 파일 추가

```bash
git add .
```

### 2-4. 첫 번째 커밋

```bash
git commit -m "Initial commit: Personal portfolio website"
```

---

## 🔗 Step 3: GitHub 저장소에 연결

### 3-1. 저장소 URL 복사
GitHub 저장소 페이지에서 초록색 `Code` 버튼 클릭 → `HTTPS` 탭 → URL 복사
```
예: https://github.com/yourusername/username.github.io.git
```

### 3-2. 원격 저장소 추가

```bash
git remote add origin <복사한 URL>
```

**예시**:
```bash
git remote add origin https://github.com/john-doe/john-doe.github.io.git
```

### 3-3. 브랜치명 확인 및 설정
```bash
git branch -M main
```

---

## 📤 Step 4: 코드 푸시 (업로드)

### 4-1. 첫 번째 푸시

```bash
git push -u origin main
```

GitHub에 사용자명과 패스워드를 입력하라고 나타날 수 있습니다.
- **사용자명**: GitHub 계정 사용자명
- **패스워드**: Personal Access Token (PAT) 또는 GitHub 앱 비밀번호
  - 일반 패스워드로는 안 될 수 있습니다. PAT 생성: https://github.com/settings/tokens

### 4-2. 푸시 성공 확인

브라우저에서 GitHub 저장소 페이지를 새로고침하면:
- 파일들이 업로드되어 있을 것
- `index.html`, `css/`, `js/`, `docs/` 등이 보임

---

## ⚙️ Step 5: GitHub Pages 활성화

### 5-1. 저장소 설정 열기
1. GitHub 저장소 페이지에서 `Settings` 탭 클릭
2. 좌측 메뉴에서 `Pages` 클릭

### 5-2. Pages 설정

**Source** 섹션에서:
- Branch: `main` 선택
- Folder: `/ (root)` 선택
- `Save` 버튼 클릭

### 5-3. 배포 대기

GitHub Pages 활성화 후 자동으로 배포가 시작됩니다.
- 1~2분 기다린 후 페이지 새로고침
- 파란색 체크 표시와 URL이 나타남

**배포 완료 주소**:
- 옵션 A 저장소: `https://username.github.io`
- 옵션 B 저장소: `https://username.github.io/personal-profile`

---

## 🔄 Step 6: 이후 수정 사항 업데이트

콘텐츠를 수정한 후 배포하려면:

### 6-1. 변경사항 확인
```bash
git status
```

### 6-2. 변경사항 추가
```bash
git add .
```

### 6-3. 커밋
```bash
git commit -m "Update profile content"
```

### 6-4. 푸시
```bash
git push
```

변경사항이 자동으로 웹사이트에 반영됩니다! (1~2분 소요)

---

## ✅ 확인 체크리스트

- [ ] GitHub 계정 생성 완료
- [ ] 저장소 생성 완료
- [ ] 로컬 폴더에서 `git init` 실행
- [ ] 파일 추가 및 커밋 완료
- [ ] 원격 저장소 연결 완료
- [ ] `git push` 실행 완료
- [ ] GitHub Pages 활성화 완료
- [ ] 웹 주소에서 사이트 확인 완료

---

## 🐛 트러블슈팅

### 문제: "fatal: could not read username for 'https://github.com'"

**해결**: Git Credential Manager 설정
```bash
git config --global credential.helper manager
```

또는 Personal Access Token 사용:
1. GitHub Settings → Developer settings → Personal access tokens
2. "Generate new token" 클릭
3. `repo` 권한 선택 → Generate
4. 토큰 복사 → Git 푸시 시 패스워드 대신 입력

### 문제: "Page build warning: The site is missing a theme"

**해결**: 무시해도 됩니다. 커스텀 HTML/CSS를 사용하므로 테마는 필요 없음.

### 문제: 사이트가 배포되지 않았거나 오류 페이지

**확인 사항**:
1. GitHub Pages 설정에서 Branch가 `main`으로 설정되었나?
2. `index.html` 파일이 저장소의 루트에 있나?
3. CSS/JS 파일의 경로가 올바른가?
4. 모든 파일이 푸시되었나? (`git push` 완료)

### 문제: 이미지나 스타일이 적용되지 않음

**확인 사항**:
1. 파일 경로가 올바른가?
2. 상대 경로를 사용했나? (절대 경로 X)
3. 폴더명/파일명의 대소문자가 정확한가?
4. 브라우저 캐시 초기화 (Ctrl+Shift+R 또는 Cmd+Shift+R)

---

## 📚 참고 자료

- [GitHub Pages 공식 문서](https://pages.github.com/)
- [GitHub Pages 트러블슈팅](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites)
- [Git 기본 가이드](https://git-scm.com/book/ko/v2)
- [Personal Access Token 생성](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

## 💡 추가 팁

### 커스텀 도메인 설정 (선택사항)
자신의 도메인 (예: `myportfolio.com`)을 사용하려면:
1. 도메인 구입 (GoDaddy, Namecheap, Route53 등)
2. GitHub Pages Settings → Custom domain
3. 도메인 입력 후 DNS 레코드 수정

### HTTPS 자동 적용
GitHub Pages는 자동으로 HTTPS를 지원합니다.
- GitHub Pages 설정에서 "Enforce HTTPS" 체크 (자동으로 적용되므로 별도 작업 필요 없음)

### 사이트맵 및 SEO
검색 엔진 최적화를 위해 나중에:
- `sitemap.xml` 생성
- `robots.txt` 추가
- Google Search Console에 등록

---

**마지막 업데이트**: 2026-08-13

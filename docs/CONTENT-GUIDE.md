# 📝 콘텐츠 입력 가이드

`index.html`의 모든 `<!-- TODO: ... -->` 항목을 여기서 찾아보세요.  
각 항목을 자신의 정보로 교체하는 방법을 설명합니다.

---

## 1️⃣ 헤더 및 메타 정보

### `<title>` 태그 (Line 6)
```html
<title><!-- TODO: 이름 --> | Portfolio</title>
```
👉 **예**: `<title>John Doe | Portfolio</title>`

### `<meta description>` (Line 5)
```html
<meta name="description" content="<!-- TODO: 사이트 한 줄 설명 -->">
```
👉 **예**: `<meta name="description" content="Full-stack developer passionate about building web applications">`

---

## 2️⃣ 네비게이션 로고

### 헤더 로고 (Line 16)
```html
<span class="logo">Your Logo</span>
```
👉 **예**: `<span class="logo">JD</span>` (이름 약자)  
👉 또는: `<span class="logo">Portfolio</span>`

---

## 3️⃣ 히어로(Hero) 섹션

### 프로필 사진 (Line 37)
```html
<img src="https://via.placeholder.com/200" alt="프로필 사진" class="hero__image">
```
👉 자신의 사진으로 교체:
- 폴더에 사진 파일 추가 (예: `assets/profile.jpg`)
- `src="assets/profile.jpg"`로 변경

**권장사항**:
- 정사각형 이미지 (200x200px 이상)
- JPG 또는 PNG 형식
- 전문적인 표정의 얼굴 사진

### 이름 (Line 42-45)
```html
<h1 class="hero__name">
    Your Name
</h1>
```
👉 **예**: `<h1 class="hero__name">김개발</h1>`

### 한 줄 소개/태그라인 (Line 46-49)
```html
<p class="hero__tagline">
    Full-stack Developer | Problem Solver
</p>
```
👉 **예**:
- `Frontend Developer | React Specialist`
- `Backend Engineer | Python & Node.js`
- `iOS Developer | Swift & Objective-C`
- `데이터 과학자 | 머신러닝 전공`

### GitHub 링크 (Line 54)
```html
<a href="https://github.com" ...>
```
👉 **예**: `<a href="https://github.com/yourusername" ...>`

### LinkedIn 링크 (Line 58)
```html
<a href="https://linkedin.com" ...>
```
👉 **예**: `<a href="https://linkedin.com/in/yourprofile" ...>`

### 이메일 (Line 62)
```html
<a href="mailto:your.email@example.com" ...>
```
👉 **예**: `<a href="mailto:developer@example.com" ...>`

---

## 4️⃣ About(소개) 섹션

### 자기소개 문단 (Line 70-75)
```html
<p class="about__text">
    안녕하세요! 저는 웹 개발을 좋아하는 개발자입니다. ...
</p>
```
👉 **길이**: 150~300자 권장  
👉 **내용**: 자신의 경험, 관심 분야, 목표 등을 간단히 소개

**예시**:
```
저는 3년 이상의 풀스택 개발 경험을 가진 개발자입니다.
주로 React와 Node.js를 사용하여 확장 가능한 웹 애플리케이션을 만듭니다.
새로운 기술을 배우고, 팀과 협업하여 의미 있는 프로젝트를 만드는 것에 열정을 가지고 있습니다.
```

---

## 5️⃣ Skills(기술) 섹션

### 기술 태그 (Line 85-92)
```html
<span class="skill-tag">JavaScript</span>
<span class="skill-tag">React</span>
<span class="skill-tag">HTML/CSS</span>
...
```

👉 **원하는 만큼 추가/제거 가능**

**예시** (개발 분야별):

**웹 프론트엔드**:
```
HTML, CSS, JavaScript, React, Vue.js, TypeScript, Bootstrap, Tailwind CSS
```

**웹 백엔드**:
```
Node.js, Python, Django, Express, REST API, GraphQL, SQL, PostgreSQL
```

**모바일**:
```
iOS, Swift, Android, Kotlin, React Native, Flutter
```

**기타**:
```
Git, GitHub, Docker, AWS, CI/CD, Testing, Linux
```

---

## 6️⃣ Career & Education (경력 & 교육) 섹션

각 타임라인 아이템마다:

### 타임라인 날짜 (Line 103, 117, 131)
```html
<div class="timeline__date">2022 - Present</div>
```
👉 **예**:
- `2022 - Present` (현재 근무 중)
- `2020 - 2022` (종료된 기간)
- `2020` (졸업 연도)

### 직책/포지션 (Line 108, 122, 136)
```html
<h3 class="timeline__title">Senior Developer</h3>
```
👉 **예**:
- 경력: `Software Engineer`, `Senior Developer`, `Full-stack Developer`
- 교육: `Bachelor of Science in Computer Science`, `Master's Degree in AI`

### 회사명/학교명 (Line 113, 127, 141)
```html
<p class="timeline__subtitle">Tech Company Inc.</p>
```
👉 **예**:
- 회사: `Google Korea`, `Naver`, `삼성전자`
- 학교: `서울대학교`, `KAIST`, `명지대학교`

### 담당 업무/설명 (Line 114-116, 128-130)
```html
<p class="timeline__description">
    주요 기술 구축 및 팀 리드 업무를 담당하고 있습니다.
</p>
```
👉 **길이**: 1~2줄 (50~150자)  
👉 **예**:
- 경력: `React 기반 대시보드 개발 및 성능 최적화 담당`
- 교육: `데이터 구조 및 알고리즘 학습, 팀 프로젝트 다수 진행`

---

## 7️⃣ Projects (프로젝트) 섹션

각 프로젝트 카드마다:

### 프로젝트 이미지 (Line 150, 171, 192)
```html
<img src="https://via.placeholder.com/400x250" alt="프로젝트 1">
```
👉 **교체 방법**:
- 프로젝트 스크린샷을 `assets/` 폴더에 저장
- `src="assets/project1.png"`로 변경
- **권장**: 16:9 비율의 가로 이미지 (400x250px 이상)

### 프로젝트 이름 (Line 155, 176, 197)
```html
<h3 class="project-card__title">Project Title 1</h3>
```
👉 **예**:
- `E-commerce Platform`
- `Weather Forecast App`
- `Task Management Dashboard`

### 프로젝트 설명 (Line 160-163, 181-184, 202-205)
```html
<p class="project-card__description">
    이 프로젝트의 목표, 주요 기능, 사용한 기술을 간단하게 설명하세요.
</p>
```
👉 **길이**: 50~150자  
👉 **예**:
- `React와 Firebase를 사용한 실시간 협업 작업 관리 앱. 사용자 인증, 실시간 동기화, 알림 기능 포함.`
- `공개 날씨 API를 활용한 모바일 친화적 날씨 정보 앱. 위치 기반 검색, 7일 예보, 날씨 아이콘 시각화.`

### 사용 기술 태그 (Line 166-169, 187-190, 208-211)
```html
<span class="tag">React</span>
<span class="tag">Node.js</span>
```
👉 **추가/제거 가능** (1~5개 권장)

### 프로젝트 링크 (Line 170, 191, 212)
```html
<a href="#" class="project-card__link">View Project →</a>
```
👉 **예**:
- GitHub 저장소: `<a href="https://github.com/yourusername/project-name" ...>`
- 라이브 데모: `<a href="https://your-project-demo.com" ...>`
- 개인 블로그: `<a href="https://yourblog.com/projects/project-name" ...>`

**3개 프로젝트 모두 작성 필수**

---

## 8️⃣ Contact (연락) 섹션

### Contact 인사말 (Line 219-222)
```html
<p class="contact__intro">
    새로운 기회나 협업에 관심이 있으신가요? 편하게 연락주세요!
</p>
```
👉 **예**:
- `협업 및 새로운 프로젝트에 관심이 있습니다. 편하게 연락주세요!`
- `문의사항이나 협업 제안이 있으시면 아래로 연락주세요.`

### 이메일 버튼 (Line 224-227)
```html
<a href="mailto:your.email@example.com" class="contact-button">
    Send Email
</a>
```

### GitHub 버튼 (Line 228-231)
```html
<a href="https://github.com" target="_blank" class="contact-button secondary">
    GitHub Profile
</a>
```

---

## 9️⃣ 푸터 (Footer)

### 이름 (Line 242)
```html
Your Name
```
👉 **예**: `김개발`

---

## ✅ 체크리스트

완료 후 다음을 확인하세요:

- [ ] 페이지 제목과 메타 설명 입력
- [ ] 로고 텍스트 설정
- [ ] 프로필 사진 추가
- [ ] 이름, 한 줄 소개 입력
- [ ] 소셜 미디어 링크 추가 (GitHub, LinkedIn, Email)
- [ ] About 섹션 자기소개 작성
- [ ] Skills 태그 입력 (8개 이상 권장)
- [ ] Career & Education 타임라인 작성
  - [ ] 최소 1개 경력사항
  - [ ] 최소 1개 교육 기록
- [ ] 프로젝트 3개 모두 입력
  - [ ] 제목, 설명, 기술 태그
  - [ ] 이미지 및 링크
- [ ] Contact 섹션 정보 확인
- [ ] 푸터의 이름 확인
- [ ] 브라우저에서 모두 보기 좋은지 확인

---

## 💡 팁

1. **이미지 최적화**: 웹용 이미지는 압축해서 사용 (TinyPNG.com 추천)
2. **링크 확인**: 모든 외부 링크가 올바르게 작동하는지 테스트
3. **모바일 확인**: 브라우저 개발자 도구(F12)로 모바일 화면에서도 확인
4. **오타 검사**: 자신의 정보가 정확하게 입력되었는지 재확인

---

**마지막 업데이트**: 2026-08-13

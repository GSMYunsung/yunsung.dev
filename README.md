# yunsung.dev

프론트엔드 개발자 최윤성의 포트폴리오 & 기술 블로그

## Stack

- **Astro 6** — SSG, Content Collections, MDX
- **Tailwind CSS v4**
- **TypeScript**
- **Matter.js** — Hero 물리 시뮬레이션

## Project Structure

```
src/
├── components/
│   ├── portfolio/       # Hero, About, Projects, Skills, Contact
│   └── Nav.astro
├── content/
│   ├── blog/            # 기술 블로그 포스트 (.mdx)
│   └── projects/        # 프로젝트 상세 페이지 (.mdx)
├── layouts/
│   ├── BaseLayout.astro
│   ├── BlogLayout.astro
│   └── ProjectLayout.astro
├── pages/
│   ├── index.astro      # 포트폴리오 메인
│   ├── blog/
│   └── projects/
└── styles/
    └── global.css
```

## Commands

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 (localhost:4321)
npm run build     # 프로덕션 빌드 → dist/
npm run preview   # 빌드 결과물 로컬 미리보기
```

## Deploy

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 후 AWS S3에 배포합니다.

필요한 GitHub Secrets:

| Secret | 설명 |
|---|---|
| `AWS_ACCESS_KEY_ID` | IAM Access Key ID |
| `AWS_SECRET_ACCESS_KEY` | IAM Secret Access Key |
| `BUCKET_ID` | S3 버킷 이름 |
| `DISTRIBUTION_ID` | CloudFront 배포 ID |

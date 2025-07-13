# COTAM (코드탐정단)

> 코드탐정단은 게임처럼 즐기는 코드 리뷰 플랫폼으로써, 개발자가 의도적으로 만든 버그, 비효율 코드를 다른 사용자가 찾아내며, 실력을 겨루고 학습하는 게임화된 서비스입니다.

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0.0 이상
- pnpm 8.0.0 이상

### 설치 및 실행

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 🛠️ 개발 도구

### 코드 품질 관리

```bash
# ESLint 검사
pnpm lint

# 특정 파일/폴더 ESLint 검사
pnpm eslint src/

# Prettier 포맷팅
pnpm prettier --write .

# 특정 파일 Prettier 포맷팅
pnpm prettier --write src/
```

### VS Code 설정

프로젝트에는 다음 VS Code 확장 프로그램이 권장됩니다:

- **Prettier**: 코드 포맷팅
- **ESLint**: 코드 품질 검사
- **Tailwind CSS IntelliSense**: CSS 클래스 자동완성
- **TypeScript**: TypeScript 지원

## 🏗️ 기술 스택

### Frontend

- **Next.js 15.3.5**: React 프레임워크
- **React 19**: UI 라이브러리
- **TypeScript 5**: 타입 안전성
- **Tailwind CSS 4**: 유틸리티 우선 CSS 프레임워크

### 개발 도구

- **ESLint**: 코드 품질 검사
- **Prettier**: 코드 포맷팅
- **pnpm**: 패키지 매니저

### 라이브러리

- **axios**: HTTP 클라이언트
- **react-hook-form**: 폼 관리
- **zod**: 스키마 검증

## 📁 프로젝트 구조

```
src/
├── app/                 # Next.js App Router
├── components/          # 재사용 가능한 컴포넌트
├── pageContainer/       # 페이지 컨테이너
├── libs/               # 라이브러리 설정
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
└── styles/             # 스타일 관련
```

## 🔧 설정 파일

- **`.prettierrc`**: Prettier 포맷팅 규칙
- **`eslint.config.mjs`**: ESLint 검사 규칙
- **`.vscode/settings.json`**: VS Code 자동 포맷팅 설정

## 📝 코딩 컨벤션

### 코드 스타일

- **들여쓰기**: 2칸 스페이스
- **줄 길이**: 80자
- **따옴표**: 작은따옴표 사용
- **세미콜론**: 사용
- **후행 쉼표**: ES5 호환

### 자동 포맷팅

- **저장 시 자동 포맷팅**: Ctrl+S로 Prettier 실행
- **ESLint 자동 수정**: 저장 시 ESLint 오류 자동 수정

## 🐛 문제 해결

### 일반적인 문제

1. **줄 끝 문자 오류**: `pnpm prettier --write .` 실행
2. **ESLint 오류**: `pnpm eslint src/ --fix` 실행
3. **타입 오류**: TypeScript 컴파일러 확인

### VS Code 설정

- Prettier 확장 프로그램 설치 확인
- ESLint 확장 프로그램 설치 확인
- VS Code 재시작

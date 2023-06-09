//* TS 개발환경 설정

//* 1. Node.js 설치
// 공식 웹사이트(구글에서 Node.js 검색)를 통해 설치
// LTS(Long Term Support) 버전 설치 권장

//todo Node.js 설치 확인 명령어
//todo cmd(터미널 / 명령 프롬프트)창에서

//? node -v

// 최신 버전 18.16.1

// 2. NPM (Node Package Manager)
// Node.js의 기본 패키지 관리 도구
// Node.js설치 시 NP 자동 설치

//todo NPM 설치 확인 명령어
//? npm -v

// 최신 버전 9.8.0

// 환경 변수

// 재부팅
// windows: ctrl + shift + esc ( 프로세스, vsc작업 끝내기 )

// NPM의 기본 명령어
//? npm init : 새로운 Node.js 프로젝트를 시작하고, 기본값으로 package.json파일을 생성(-y 옵션을 추가하면 질문없이 기본값으로 package.json파일을 생성)

//? npm install : package.json 파일에 명시된 모든 의존성을 설치
//? npm uninstall : 패키지 제거

//! 타입스크립트 설치
//? npm install -g typescript
// -g : 패키지를 글로벌로 설치하라는 의미

// typescript 설치 확인 명령어
//? tsc -v

// 5.1.6

//! tsc 
// 타입스크립트 컴파일러(TSC: TypeScript Compiler)
// 타입스크립트 파일의 확장명 .ts -> .js로 변환하는 도구

//! tsc 컴파일 과정
//? tsc 파일이름.ts

//! 프로젝트 디렉토리 생성 후 package.json 파일 생성
//? npm init -y

//! tsconfig.json 파일 생성
//? npx tsc --init
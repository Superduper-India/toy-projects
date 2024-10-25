// 명령어
// 1. tsc ~.ts: ts파일을 컴파일 한다. => js파일 생성
// 2. node ~.js: js파일을 실행한다.
// 3. tsx ~.ts: ts파일을 컴파일하고 실행한다.

const a = 1;

// 모든 ts파일을 전역 모듈로 본다.
// 1. import, export 모듈 키워드를 사용하면 그때부터 독립된 격리된 모듈로 본다.
// export {};
// 2. "moduleDetection": "force" 설정을 해준다.

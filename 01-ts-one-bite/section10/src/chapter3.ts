// 조건부 타입 기반의 유틸리티 타입들
// Exclude, Extract, ReturnType

// 1. Exclude<T, U>
// T에서 U를 제거하는 타입

type Exclude<T, U> = T extends U ? never : T;
// 1단계
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2단계
// string |
// never

// 최종적으로, string | never 가 되는데,
// never는 공집합이므로 사라짐 => string

type A = Exclude<string | boolean, boolean>;

// 2. Exclude<T, U>
// T에서 U를 추출하는 타입

type Extract<T, U> = T extends U ? T : never;
// Extract<string, boolean> |
// Extract<boolean, boolean>

// never |
// boolean

// boolean

// 3. ReturnType<T>
// 타입변수 T에 할당된 함수 타입의 반환값 타입을 추출하는 타입

type B = Extract<string | boolean, boolean>;

type ReturnType<T extends (...args: any) => any> = T extends (
  ...agrs: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string

type ReturnB = ReturnType<typeof funcB>; // number

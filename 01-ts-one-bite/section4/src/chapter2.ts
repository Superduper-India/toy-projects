// 함수 타입 표현식과 호출 시그니쳐

// 1. 함수 타입 표현식
// 다음과 같이 함수 타입을 타입 별칭과 함께 별도로 정의할 수 있다.
type Operation = (a: number, b: number) => number;
// 다음과 같이 여러개의 함수가 동일한 타입을 갖는 경우에 유용하다.
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 2. 호출 시그니처
// 함수 타입 표현식과 동일하게 함수의 타입을 별도로 정의하는 방식
type Operation2 = {
  (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

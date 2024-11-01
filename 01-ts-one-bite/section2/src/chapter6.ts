// any
// - 특정 변수의 타입을 우리가 확실히 모를때 사용
// - 모든 타입의 값을 다 할당받을 수 있다.
// - 모든 타입의 변수에 다 anyType의 값을 집어넣을 수도 있다.
// - 그래서 타입 검사를 안하는 것과 똑같아서 런타임에 오류가 날 수 있다.
// - 그래서 타입스크립트의 이점을 포기하기 때문에 사용을 지양하는게 좋다.
let anyVar: any = 10;
anyVar = 'dddd';

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// - any타입과 다르게 변수에 할당할 수 없다.
// - 메서드나 연산도 사용할 수 없다.
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// 아래와 같이 타입 좁히기로 특정 경우에만 할당하여 사용할 수 있다.
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

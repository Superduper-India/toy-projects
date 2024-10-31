// number
// 자스에서 숫자를 의미하는 모든 타입을 모두 포함
// 아래와 같이 :뒤에 붙는걸 타입 주석 또는 타입 annotation이라고 함
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// string
let str1: string = 'hello';
let str2: string = 'hello';
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값
// 변수의 타입을 값 그 자체로 지정해버리면, 다른 값을 넣을 수 없다.
let numA: 10 = 10;

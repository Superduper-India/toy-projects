// 제네릭 (일반적인, 포괄적인)

// 제네릭이 필요한 상황?
// 다음과 같이 매개변수를 받고 해당 매개변수를 그대로 반환하는 함수가 있다면,
// 1. 매개변수에 다양한 자료형이 오므로 any로 타입 설정하는 경우
function func1(value: any) {
  return value;
}

let num1 = func1(10);
let str1 = func1('string');
// any로 타입 추론되어서 자료형에 상관없이 메서드 적용이 가능 => 런타임 오류 발생가능성
num1.toUpperCase();

// 2. 매개변수에 unknown으로 타입 설정을 한 경우,
function func2(value: unknown) {
  return value;
}

let num2 = func2(10);
let str2 = func2('string');
// num2이 Number타입이 분명함에도 숫자 메서드 못씀
// 그래서 번거롭게 타입 좁히기 해야함..
if (typeof num2 === 'number') num2.toFixed();

// 3. 제네릭을 사용해서 함수 타입을 지정하는 경우!!
// T => 타입변수
// 3-1. 함수를 호출할 때마다 인수에 따라서 타입변수의 타입이 결정된다.
function func3<T>(value: T): T {
  return value;
}

let num3 = func3(10);
let str3 = func3('str');

// 3-2. 작성자가 직접 지정하기
let arr = func3([1, 2, 3] as [number, number, number]);
let arr2 = func3<[number, number, number]>([1, 2, 3]);

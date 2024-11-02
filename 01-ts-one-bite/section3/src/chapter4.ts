// 대수 타입(Algebraic type)
// 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재한다.

// 1. 합집합(Union) 타입
// 합집합 타입들의 개수에는 제한이 없다.
let a: string | number | boolean;
a = 1;
a = 'hello';
a = true;
let arr: (number | string | boolean)[] = [1, 'hello', true];

// 아래는 객체 타입의 유니온 타입이다.
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

// ✅ 아래는 합집합에 포함된다.
let union1: Union1 = {
  name: '',
  color: '',
};

// ✅ 아래는 합집합에 포함된다.
let union2: Union1 = {
  name: '',
  language: '',
};

// ✅ 아래는 교잡합에 포함되므로, 합집합에 포함된다.
let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// ❌ 아래는 합집합에 포함되지 않는다.
// let union4: Union1 = {
//   name: '',
// };

// 2. 교집합(Intersection) 타입
let variable: number & string; // never 타입으로 추론된다

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
};

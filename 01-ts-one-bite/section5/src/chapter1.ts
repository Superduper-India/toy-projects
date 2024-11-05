// 인터페이스
// 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법
// 객체의 구조를 정의하는데 특화된 문법
// 즉, 상속 합침 등의 특수한 기능을 제공

interface Person {
  readonly name: string;
  age?: number;
  // 메서드 타입1. 함수 타입 표현식
  // sayHi: () => void;
  // 메서드 타입2. 호출 시그니처
  // 메서드 오버로딩을 구현하려면 이 방법만 가능하다.
  sayHi(): void;
  sayHi(a: number): void;
  sayHi(a: number, b: number): void;
}

// 인터페이스와 타입 별칭의 차이점
// 타입 별칭에서는 다음과 같이 유니온이나 인터섹션 타입을 정의할 수 있다.
// type Type1 = number | string;
// type Type2 = number & string;

// 하지만 인터페이스로 만든 타입은 안된다.
// interface Person {
//   name: string;
//   age: number;
// } | number // ❌

// 그래서 인터페이스로 만든 타입을 유니온, 인터섹션으로 사용하려면 다음과 같이 타입 별칭과 함께 사용하거나,
type Type1 = number | string | Person;
type Type2 = number & string & Person;

// 타입 주석에서 직접 사용해야 한다.
const person: Person & string = {
  name: '이정환',
  age: 27,
};

// 1. unknown타입 (전체 집합)
// unknown타입은 타입 계층도의 최상단에 위치한다.
// unknown타입은 모든 타입의 부모타입(슈퍼타입)이다.

function unknownExam() {
  // unknown타입 변수에는 모든 타입의 값을 할당할 수 있다. 즉, 업캐스팅 할 수 있다.
  // * 업캐스팅: 하위집합을 상위집합에 할당하는 것
  let a: unknown = 1; // number -> unknown
  let b: unknown = 'hello'; // string -> unknown
  let c: unknown = true; // boolean -> unknown
  let d: unknown = null; // null -> unknown
  let e: unknown = undefined; // undefined -> unknown
  let f: unknown = []; // Array -> unknown
  let g: unknown = {}; // Object -> unknown
  let h: unknown = () => {}; // Function -> unknown

  // 그리고 unknown타입의 값은 any를 제외한 어떤 타입의 변수에도 할당할 수 없다. 즉, 다운캐스팅 할 수 없다.
  // * 다운캐스팅: 상위집합을 하위집합에 할당하는 것
  let unknownValue: unknown;
  // let a: number = unknownValue; // 오류 : unknown 타입은 number 타입에 할당할 수 없습니다. ❌
}

// 2. never타입 (공집합 타입)
// never타입은 타입 계층도의 최하단에 위치한다.
// 공집합은 모든 집합의 부분 집합이다.
// 그래서 never타입은 모든 타입의 자식타입(서브타입)이다.
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 그래서 아래와 같은 업캐스팅이 가능하다.
  // * 업캐스팅: 하위집합을 상위집합에 할당하는 것
  let a: number = neverFunc(); // never -> number
  let b: string = neverFunc(); // never -> string
  let c: boolean = neverFunc(); // never -> boolean
  let d: null = neverFunc(); // never -> null
  let e: undefined = neverFunc(); // never -> undefined
  let f: [] = neverFunc(); // never -> Array
  let g: {} = neverFunc(); // never -> Object

  // 반대로 다운캐스팅은 불가능하다.
  // * 다운캐스팅: 상위집합을 하위집합에 할당하는 것
  // let a: never = 1; // number -> never ❌
  // let b: never = 'hello'; // string -> never ❌
  // let c: never = true; // boolean -> never ❌
  // let d: never = null; // null -> never ❌
  // let e: never = undefined; // undefined -> never ❌
  // let f: never = []; // Array -> never ❌
  // let g: never = {}; // Object -> never ❌
}

// 3. void
// 타입 계층도에서 void타입은 undefined타입의 슈퍼타입이다.
function voidExam() {
  // a. 아래와 같이 아무것도 반환하지 않는 함수의 반환값 타입으로 void타입을 쓴다.
  function noReturnFunc(): void {
    console.log('hi');
    return undefined;
  }
  // b. 아래는 업캐스팅이므로 가능하다.
  let voidVar: void = undefined;

  // 앞서 본 a와 b의 관계는 똑같다.
}

// 4. any
// any타입은 타입 계층도를 무시하는 치트키 타입이다.
// 그래서 왠만하면 사용하지 않는 것이 좋다!!!
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 아래는 다운캐스팅인데 성립한다.???
  anyVar = unknownVar;
  undefinedVar = anyVar;
  // ❌ 단, 아래와 같은 다운캐스팅은 안된다!!
  // never타입은 공집합이기 때문에 any타입조차 허용이 안된다!
  // neverVar = anyVar;
}

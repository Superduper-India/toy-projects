// [ts 문법]
// 자바스크립트 변수, 속성, 매개변수, 리턴값에 타입이 붙었다고 생각하면 됨
// 타입을 지워도 말이되는 js형태여야 한다.
// never, unknown, any타입 주의하기

// 1. 매개변수를 타이핑하는 방법
const a: string = '엄마야~';
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const g: {} = 5; // null과 undefined가 아닌 모든 타입

// 2. 함수를 타이핑하는 방법
function add(x: number, y: number) // 콜론
  : number {
  return x + y
}

// 타입 애일리어스(정의): type으로 타입을 선언하는 방식
// 네이밍룰 앞에 T안붙이기
type Type = (x: number, y: number) => number;
const add2: Type = (x, y) => x + y;

// 인터페이스: interface로 타입을 선언하는 방식
// 여러번 선언할 수 있고, 선언할 때마다 합쳐짐
// 네이밍룰 앞에 I안붙이기
interface Interface {
  (x: number, y: number): number;
}

// 3. 객체를 타이핑하는 방법
const obj: {
  lat: number, lon: number
} = {
  lat: 37.5,
  lon: 127.5
};

// 4. 배열을 타이핑하는 방법
const arr = ['123', '456', '789']; // 기본
const arr2: Array<number> = [123, 456]; // 꺽쇠는 제네릭이다..
const arr3: [number, number, string] = [123, 456, 'hello']; // 튜플

// 타입은 최대한 정확한게 중요하다. ts가 추론해주는 타입이 있으면 이건 그대로 사용하고,
// ts가 any로 추론하는 등 잘 추론하지 못하는 경우에만 직접 타이핑할 것
function add3(x: number, y: number) {
  return x + y;
}
const result = add(1, 2);

// 사라질 부분을 미리 생각해보기
function add4(x: number, y: number): number; // 통째로 사라질 예정
function add4(x, y) {
  return x + y;
}

let aa = 123;
aa = 'hello' as unknown as number; // as 뒷부분

// !의 사용은 지양하자. 대신 if를 사용하자
// (1) !의 역할은 아래변수가 무조건 존재하고, null이나 undefined가 아님을 보증함
const head = document.querySelector('#head')!;
// (2) 그런데 html코드에서 아래와 같이 id를 수정해버린다면..?!
<div id="header" > </div>
// (3) null의 속성에 접근하게 되고, 에러가 뜬다.
head.innerHTML = 'hello';
// (4) if를 사용하면 head면 true라 실행되고, header면 false라 실행안됨
if (head) {
  console.log(head);
}

// 템플릿 리터럴 타입이 존재
type World = 'world' | 'hell';
type Greeting = `hello ${World}`;

// 나머지 매개변수
function rest(...args: string[]) {
  console.log(args); // [1,2,3]
}

// 튜플: 타입의 길이와 배열의 길이를 맞춰준다
const tuple: [string, number] = ['1', 1];
tuple[2] = 'hello'; // 배열의 길이가 늘어나게 할당이 안된다
tuple.push('hello'); // 그런데 push메서드를 쓰는거 까지는 잡아주지 못한다

// 아래와 같이 object형태로 쓰면 컴파일링 후 코드가 남아있다
// 반면 enum은 사라짐
// 코드를 남길지 말지 고민되면 남기자
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const aaa = ODirection.Down;

// obj의 key, value만 타입으로 꺼낼때
const obj2 = {
  a: '123', b: 'hello', c: 'world',
} as const;
type Key = keyof typeof obj2;
type Value = typeof obj2[keyof typeof obj2];

// union (또는): 여러개 중에 하나만 있어야 한다
type B = { hello: 'world' } | { zero: 'cho' };
const union: B = { hello: 'world', zero: 'cho' };

// intersection (그리고): 모든 속성이 다 있어야 한다
// 그래서 확장의 개념으로 쓸 수 있다
type A = { hello: 'world' } & { zero: 'cho' };
const intersection: A = { hello: 'world', zero: 'cho' };

type TAnimal = { breath: true };
type TMammal = TAnimal & { breed: true };
type THuman = TMammal & { think: true };

const sunyoung: THuman = {
  breath: true,
  breed: true,
  think: true,
};

interface IAnimal {
  breath: true,
}
interface IMammal extends IAnimal {
  breed: true
}
const mammal: IMammal = {
  breath: true,
  breed: true,
}

// 좁은 타입과 넓은 타입
// intersection은 교집합, union은 전체집합
// any는 전체집합, never는 공집합이다
// 넓은타입에 좁은타입을 대입할 수 있지만, 좁은타입에 넓은타입을 대입할 순 없다.
type Small = string & number;
type Medium = string;
type Big = string | number;

// 객체는 속성이 많을수록 좁다
type NameObj = { name: string };
type AgeObj = { age: number };

// 넓은타입
type Big2 = NameObj | AgeObj;
const name3: Big2 = { name: 'sunyoung' };

// 좁은타입
type Small2 = NameObj & AgeObj;
const name2: Small2 = {
  name: 'sunyoung',
  age: 19,
}

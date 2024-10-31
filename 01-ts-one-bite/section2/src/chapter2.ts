// 배열
// 방법1.
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'im', 'india'];

// 방법2.
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양한 경우
// 아래와 같이 유니온 타입(|)을 사용한다.
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 타입스크립트에서만 특별히 제공되는 타입
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, '2', true];

// 튜플 타입을 사용할때 배열 메서드를 사용해서 요소를 추가하거나 제거하는 것은 에러가 발생하지 않아 주의가 요한다.
// tup1.push(1);
// tup1.pop();

// 튜플을 사용하면 배열을 사용할 때 인덱스의 위치에 따라서 넣어야 되는 값들이 이미 정해져 있고 그 순서를 지키는게 중요할 때 값을 잘못넣지 않도록 방지해줄 수 있다.
const users: [string, number][] = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
  [4, 'ddd'],
];

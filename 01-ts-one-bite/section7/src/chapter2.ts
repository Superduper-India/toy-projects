// 타입 변수 응용하기

// case 1.
// 2개의 타입 변수가 필요한 상황이라면, 다음과 같이 2개의 타입 변수를 사용해도 된다.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

// case 2.
// 배열타입을 인수로 받는 제네릭 함수를 만든다면,
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

// case 3.
// 배열의 타입을 튜플로 설정,
// 배열 n번 인덱스 요소의 타입만 알고 나머지는 몰라도 돼..
function returnFirstValue2<T, U>(data: [T, U, ...unknown[]]) {
  return data[1];
}

// 다양한 배열 타입을 인수로 받는 제네릭 함수를 만들어야 한다면..
let str = returnFirstValue2([1, 'hello', 'mynameis']);

// case 4.
// 함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는 경우
// T타입 변수는 length프로퍼티를 가진 타입의 확장이다 라는 의미
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength('123'); // ✅
getLength([1, 2, 3]); // ✅
getLength({ length: 1 }); // ✅
// getLength(undefined); // ❌
// getLength(null); // ❌

// map, forEach 메서드 타입 정의하기

// 1. map 메서드
const arr = [1, 2, 3];
const strArr = ['a', 'b', 'c'];

// 아래는 map메서드를 직접 구현한 함수
// 그래서 제네릭을 사용하여 타입을 정의한다.
// const newArr = arr.map((it) => it * 2);
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

// arr 요소에 여러가지 타입이 올 수 있다.
map(arr, (it) => it * 2);
map(strArr, (it) => it.toUpperCase());
// map메서드는 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야 한다.
map(strArr, (it) => parseInt(it));

// 2. forEach 메서드
const arr2 = [1, 2, 3];

// 아래 forEach메서드를 직접 구현한 함수
// arr2.forEach((it) => console.log(it));
function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it.toFixed()));

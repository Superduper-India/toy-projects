// 타입 좁히기
// 조건문 등을 이용해 넓은타입에서 좁은타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: number;
};

function func(value: number | string | Date | Person | null) {
  // value;
  // value.toFixed();
  // value.toUpperCase();

  // 조건문과 함께 타입을 좁힐 수 있는 표현들을 '타입가드'라고 부른다.
  if (typeof value === 'number') {
    // 1. typeof 연산자 활용
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // 2. instanceof 연산자 활용
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    // 3. in 연산자 활용
    // value라는 값에 'age'프로퍼티가 존재하는지 여부
    console.log(value);
  }
}

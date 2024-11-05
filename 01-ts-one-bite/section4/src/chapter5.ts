// 사용자 정의 타입 가드
// 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트의 문법이다.

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 다음과 같이 함수를 이용해 커스텀 타입 가드를 만들어 타입을 좁히는 것을 사용자 정의 타입 가드라고 한다.

// 1. Dog 타입인지 확인하는 타입 가드
// 반환값의 타입으로 animal is Dog 를 정의하면 이 함수가 true를 반환하면 조건문 내부에서는 이 값이 Dog 타입임을 보장한다는 의미
function isDog(animal: Animal): animal is Dog {
  // animal을 Dog타입으로 타입 단언
  return (animal as Dog).isBark !== undefined;
}

// 2. Cat 타입인지 확인하는 타입가드
// 반환값의 타입으로 animal is Cat 를 정의하면 이 함수가 true를 반환하면 조건문 내부에서는 이 값이 Cat 타입임을 보장한다는 의미
function isCat(animal: Animal): animal is Cat {
  // animal을 Cat타입으로 타입 단언
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    console.log(animal.isBark ? '짖습니다' : '안짖어요');
  } else {
    console.log(animal.isScratch ? '할큅니다' : '안할퀴어요');
  }
}

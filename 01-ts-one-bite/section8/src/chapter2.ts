// keyof 연산자

// interface Person {
//   name: string;
//   age: number;
// }

// case1. key의 타입을 문자열 리터럴로 지정해주어야 한다. (그냥 string으로 해주면 아무 값이나 들어올 수 있기 때문에 에러가 난다.)
// 그런데 아래같이 유니온 타입으로 key타입을 지정해주게 되면 person객체 프로퍼티가 늘어나는 경우 문제가 될 수 있다!!
// function getPropertykey(person: Person, key: 'name' | 'age') {
//   return person[key];
// }

// typeof 연산자를 활용하면 person객체의 타입을 추론할 수 있다.
type Person = typeof person;

// case2. keyof연산자를 사용하여 Person타입의 모든 프로퍼티의 key들을 유니온 타입으로 추출해 낼 수 있다.
function getPropertykey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: '이정환',
  age: 27,
};

getPropertykey(person, 'name');

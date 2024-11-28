// 맵드 타입(mapped type)
// 기존 객체타입을 기반으로 새로운 객체타입을 만든다.
// 인터페이스가 아닌 타입 별칭으로만 사용가능하다.

interface User {
  id: number;
  name: string;
  age: number;
}

// User타입의 모든 프로퍼티가 선택적 프로퍼티가 되게 한다.
interface PartialUser {
  id?: number;
  name?: string;
  age?: number;
}

// 아래는 User와 타입이 동일하다. 그리고, 모든 프로퍼티가 선택적 프로퍼티이다.
type PartialUser2 = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

// User의 프로퍼티가 늘어나는 경우 keyof연산자를 사용한다.
type PartialUser3 = {
  [key in keyof User]: boolean;
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  return {
    id: 1,
    name: '이정환',
    age: 27,
  };
}

const result = fetchUser();
result.id = 2;

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser3) {
  // ...수정하는 기능
}

updateUser({
  // id: 1,
  // name: '이정환',
  age: 25,
});

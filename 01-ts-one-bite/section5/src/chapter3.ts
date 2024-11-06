// 인터페이스 선언 합치기
// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면 인터페이스는 가능하다.
interface Person {
  name: string;
}

interface Person {
  // 선언을 합칠때에는 동일한 타입으로 동일한 이름의 프로퍼티를 정의해야 한다.
  name: string;
  age: number;
}

// 이렇게 동일한 이름의 인터페이스들이 합쳐지는 것을 선언 합침(Declaration Merging)이라고 한다. 따라서 다음과 같이 사용할 수 있다.
const person: Person = {
  name: '이정환',
  age: 27,
};

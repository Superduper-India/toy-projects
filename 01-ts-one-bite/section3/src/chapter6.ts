// 타입 단언
// 타입 단언은 업캐스팅, 다운캐스팅과는 다르게 타입스크립트 컴파일러에게 단언하는 것에 불과하다.
// 그래서 문법이 틀리더라도 오류가 발생하지 않기 때문에 확실할 때 사용해야한다.

type Person = {
  name: string;
  age: number;
};

// 빈 객체를 Person타입이라고 타입스크립트에게 단언한다.
let person = {} as Person;
person.name = '';
person.age = 23;

type Dog = {
  name: string;
  color: string;
};

// 타입 단언은 다음과 같이 초과 프로퍼티 검사를 피할때에도 요긴하게 쓰일 수 있다.
let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
} as Dog;

// [타입 단언의 규칙]
// A as B <- 단언식은 아래 두기자의 조건중 한가지를 반드시 만족해야 한다.
// - A가 B의 슈퍼타입이다
// - A가 B의 서브타입이다
let num1 = 10 as never; // ✅ never타입은 모든 타입의 서브타입이므로 단언이 가능
let num2 = 10 as unknown; // ✅ unknown타입은 모든 타입의 슈퍼타입이므로 단언이 가능
// let num3 = 10 as string; // ❌ 숫자타입과 문자열타입은 서로 부모자식 타입 관계를 갖지 않아서 단언이 불가능

// [다중 단언]
// 타입 단언은 다중으로도 가능하다. 다중 단언을 이용하면 앞서 살펴본 예제 중 불가능했던 단언을 다음과 같이 가능하도록 만들 수도 있다.
// 하지만 이 방법은 오류가 발생할 확률이 높아지므로 권장되지 않음

// 예시로 아래의 경우, 숫자타입의 값을 unknown타입으로 단언하고, unknown타입의 값을 string타입으로 단언한다.
let num4 = 10 as unknown as string;

// [const 단언]
// 특정 값을 const타입으로 단언하면 마치 변수를 const로 선언한 것과 비슷하게 타입이 변경된다.
let num5 = 10 as const; // const num5로 선언한 것과 같은 효과

let cat = {
  name: '야옹이',
  color: 'yellow',
} as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨. 일일이 타입의 프로퍼티에 readonly키워드를 붙여주지 않아도 됨

// cat.name = '';

// [non-null 단언]
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
};

// ❌ 옵셔널 체이닝을 사용하면 타입 선언이 성립하지 않는다.
// const len: number = post.author?.length;

// ✅ 값 뒤에 느낌표(!) 를 붙여주면 이 값이 undefined이거나 null이 아닐것으로 단언할 수 있다.
const len2: number = post.author!.length;

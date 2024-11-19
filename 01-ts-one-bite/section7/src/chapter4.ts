// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 제네릭 함수와는 달리
// 변수의 타입으로 정의할 때 반드시 꺽쇠와 함께
// 타입 변수에 할당할 타입을 명시해주어야 한다.
// 참고로, 타입 변수
// = 타입 파라미터
// = 제네릭 타입 변수
// = 제네릭 타입 파라미터
const keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

// 제네릭 인터페이스를 인덱스 시그니처와 함께 사용하기
interface Map<V> {
  [key: string]: V;
}

const stringMap: Map<string> = {
  name: 'value',
};

const booleanMap: Map<boolean> = {
  name: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

const stringMap2: Map2<string> = {
  name: 'dd',
};

// 제네릭 인터페이스의 활용 예시
interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

// interface User {
//   name: string;
//   profile: Student | Developer;
// }
// 위 타이핑을 제네릭 인터페이스로 변경
interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== 'student') {
  //   console.log('잘 못 오셨습니다');
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: '이정환',
  profile: {
    type: 'developer',
    skill: 'typescript',
  },
};

const studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: '가톨릭대학교',
  },
};

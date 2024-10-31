// 열거형(enum) 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과 사라지지 않고 자바스크립트 객체로 변환된다. 그래서 값을 사용할 수 있는 것이다.

// 1. 숫자형 enum
// enum 멤버에 숫자 값을 직접 할당하지 않아도 0 부터 1씩 늘어나는 값으로 자동으로 할당된다.
// enum Role {
//   ADMIN, // 0 할당(자동)
//   USER, // 1 할당(자동)
//   GUEST, // 2 할당(자동)
// }
// 자동 할당되는 값은 기본적으로 0부터 시작한다. 만약 이 값을 변경하고 싶다면 다음과 같이 시작하는 위치에 값을 직접 할당해주면 된다. 그럼 자동으로 그 아래의 멤버들은 1씩 증가된 값으로 할당된다.
enum Role {
  ADMIN = 10, // 10 할당
  USER, // 11 할당(자동)
  GUEST, // 12 할당(자동)
}

// 2. 문자형 enum
enum Language {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '이정환',
  role: Role.ADMIN, //관리자
  language: Language.korean,
};

const user2 = {
  name: '홍길동',
  role: Role.USER, // 회원
};

const user3 = {
  name: '아무개',
  role: Role.GUEST, // 게스트
};

console.log(user1, user2, user3);

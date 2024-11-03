// 타입 추론
// 타입스크립트는 타입이 정의되어 있지 않은 변수의 타입을 자동으로 추론한다. 이런 기능을 '타입 추론'이라고 한다.

// [타입 추론이 가능한 상황들]
// 1. 변수 선언
// 아래와 같이 일반적으로 변수를 선언하고 초기화하는 상황에서 자동으로 타입을 추론한다. 타입을 추론하는 기준은 변수의 초기값이다.
// let키워드를 사용하면 타입 넓히기로 타입을 추론해주기 때문에 더 범용적으로 이 변수를 사용할 수 있다.
let a = 10; // number 타입으로 추론
let b = 'hello'; // string 타입으로 추론
let c = {
  id: 1,
  name: '이정환',
  profile: {
    nickname: 'winterlood',
  },
  urls: ['https://winterlood.com'],
}; // id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론

// 2. 구조 분해 할당
let { id, name, profile } = c;
let [one, two, three] = [1, 'hello', true];

// 3. 함수의 반환값
// 함수 반환값의 타입은 return 문을 기준으로 잘 추론된다.
function func() {
  return 'hello'; // 반환값이 string 타입으로 추론된다
}

// 4. 기본값이 설정된 매개변수
// 기본값이 설정된 매개변수의 타입은 기본값을 기준으로 추론된다.
function func2(message = 'hello') {
  return 'hello';
}

// [주의해야 할 상황들]
// 1. const상수의 추론
// 상수는 초기화 때 설정한 값을 변경할 수 없기 때문에 특별히 가장 좁은 타입으로 추론된다.
const num = 10; // 10 Number Literal 타입으로 추론
const str = 'hello'; // "hello" String Literal 타입으로 추론

// [최적 공통 타입(Best Common Type)]
// 다음과 같이 다양한 타입의 요소를 담은 배열을 변수의 초기값으로 설정하면, 최적의 공통 타입으로 추론된다.
let arr = [1, 'string']; // (string | number)[] 타입으로 추론

// 타입 별칭
// 타입을 변수처럼 정의해서 사용할 수 있는 것
// 동일한 스코프에 중복된 이름으로 타입별칭을 선언하면 오류가 발생한다.

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: 'ddd',
  nickname: 'eeee',
  birth: 'ddd',
  bio: 'dsadasd',
  location: 'dsadas',
};

let user2: User = {
  id: 2,
  name: 'ddd',
  nickname: 'eeee',
  birth: 'ddd',
  bio: 'dsadasd',
  location: 'dsadas',
};

// 인덱스 시그니처
// 키와 밸류의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: string; // 인덱스 시그니처 타입
  Korea: string; // 특정 프로퍼티를 반드시 가져야할 때 추가하기, 대신 이 타입은 인덱스 시그니처 타입과 호환되어야 한다.
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 'dd',
};

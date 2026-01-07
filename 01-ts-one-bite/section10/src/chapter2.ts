// 맵드 타입 기반의 유틸리티 타입2
// Record, Pick, Omit

// 1. Pick타입
// => 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumnailURL'
  // 즉, 좌항이 우항의 슈퍼타입, 서브타입이 아니면 성립하지 않는다.
  [key in K]: T[key];
};

// Post타입으로부터 'title'과 'content'타입만 가져온 새로운 타이핑을 한다.
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: 'dd',
  content: 'dddd',
};

// 2. Omit타입
// => 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
// 앞서본 예제처럼 Pick타입에서 특정 프로퍼티를 일일이 추가하는 작업은 프로퍼티가 많아지면 어렵다.

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 우항을 하나씩 풀어보면,
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnailURL', 'title'>>
// Exclude는 T로부터 K를 제거하므로,
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>가 된다.

const noTitlePost: Omit<Post, 'title'> = {
  // ❌
  content: '',
  tags: [],
  thumbnailURL: '',
};

// 3. Record타입
// => 객체 타입을 만들어주는 유틸리티 타입
// 첫번째 타입 변수로 객체타입의 키, 두번째 타입 변수로 객체타입의 값을 받는다.

// 화면 크기에 따라 3가지 버전의 썸네일을 지원하고, 아래는 버전에 따른 타입이다.
// 하지만 버전이 늘어날 수록 중복코드를 추가하는 문제가 발생한다.
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

// 어떤 객체 타입일진 모르겠지만.. 어쨌든 객체 타입의 key값이 K에 들어올 것이다..
// 그리고 V는 그 값이 될 것.
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>;

// ㅇ

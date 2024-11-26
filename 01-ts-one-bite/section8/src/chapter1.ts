// 타입 조작 - 인덱스드 엑세스 타입
// 인덱스드 엑세스 타입을 사용하면 객체, 배열의 요소의 타입을 활용할 수 있다.

// 1. 객체의 인덱스드 엑세스 타입
interface Post {
  title: string;
  content: string;
  // 문제점: author타입에 프로퍼티가 추가되는 경우 일일히 아래 매개변수의 타입도 변경해줘야하는 번거로움이 발생한다.
  author: {
    id: number;
    name: string;
  };
}

// 아래와 같이 인덱스드 엑세스 타입을 사용하면 원본타입이 변경되어도 추가적인 작업이 필요 없다.
// []안에 들어가는 것을 인덱스라고 부르는데, []안에 들어갈 수 있는건 값이 아닌 타입이다.
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

printAuthorInfo(post.author);

// 2. 배열의 인덱스드 엑세스 타입
type PostList = {
  title: string;
  content: string;
  // 문제점: author타입에 프로퍼티가 추가되는 경우 일일히 아래 매개변수의 타입도 변경해줘야하는 번거로움이 발생한다.
  author: {
    id: number;
    name: string;
  };
}[];

// 아래와 같이 인덱스드 엑세스 타입을 사용하면 원본타입이 변경되어도 추가적인 작업이 필요 없다.
// []안에 들어가는 것을 인덱스라고 부르는데, []안에 들어갈 수 있는건 값이 아닌 타입이다.
function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

const num = 0;
// 배열타입으로부터 하나의 요소 타입만 가져오는 타이핑
// 다만, []안에 올 수 있는건 값이 아닌, 타입이므로 위의 num변수(숫자 리터럴) 값을 할당할 수는 없다.
const post2: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

printAuthorInfo2(post2.author);

// 3. 튜플의 인덱스드 엑세스 타입
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// 튜플타입은 길이가 정해져 있기 때문에 아래 타이핑은 에러가 난다.
type Tup3 = Tup[3];
// 모든 타입의 최적의 공통 타입을 뽑아온다.
type TupNum = Tup[number];

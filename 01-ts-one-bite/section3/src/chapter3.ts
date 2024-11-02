// 객체 타입의 호환성
// 모든 객체 타입은 각각 다른 객체 타입들과 슈퍼-서브 타입 관계를 갖는다. 따라서 업캐스팅은 허용하고, 다운캐스팅은 허용하지 않는다.

// 객체는 아래와 같이 프로퍼티가 더 적은 타입이 슈퍼타입이 된다.
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린',
  color: 'yellow',
};

let dog: Dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도',
};

animal = dog; // ✅ 업캐스팅: OK
// dog = animal; // ❌ 다운캐스팅: NO

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'reactjs',
};

book = programmingBook; // ✅ 업캐스팅: OK
// programmingBook = book; // ❌ 다운캐스팅: NO

// 초과 프로퍼티 검사란 변수를 객체 리터럴로 초기화 할 때 발동하는 타입스크립트의 특수한 기능이다. 이 기능은 타입에 정의된 프로퍼티 외의 다른 초과된 프로퍼티를 갖는 객체를 변수에 할당할 수 없도록 막는다.
let book2: Book = {
  // 오류 발생
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
};

// 따라서 다음과 같이 값을 별도의 다른 변수에 보관한 다음 변수 값을 초기화 값으로 사용하면 발생하지 않는다.
let book3: Book = programmingBook;

// 초과 프로퍼티 검사는 함수의 매개변수에도 동일하게 발생한다.
function func(book: Book) {}

func({
  // 오류 발생
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  // skill: 'reactjs',
});

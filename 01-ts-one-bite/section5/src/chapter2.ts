// 인터페이스 확장
// 하나의 인터페이스를 다른 인터페이스들이 상속받아 중복된 프로퍼티를 정의하지 않도록 도와주는 문법이다.

// 인터페이스, 타입 별칭으로 정의된 객체도 확장할 수 있다.
interface Animal {
  name: string;
  color: string;
}

// 인터페이스 도그는 인터페이스 애니멀을 확장(상속)하는 타입이다.
// 즉, Animal프로퍼티를 다 가지고 있는 상태에서 Dog프로퍼티를 추가한다.
interface Dog extends Animal {
  // 상속을 받는 부모타입의 프로퍼티를 다시 정의할 수도 있다.
  // 다만, 정의를 하는 타입이 원본 타입의 자식 타입이어야 한다.
  // 왜냐면 Animal타입이 Dog타입의 부모타입이어야 하기 때문이다.
  // name: 'ddd';
  isBark: boolean;
}

const dog: Dog = {
  name: '',
  color: '',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: '',
  isScratch: true,
};

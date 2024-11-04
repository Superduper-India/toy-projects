// 함수 타입의 호환성
// 함수 타입의 호환성이란 특정 함수 타입이 다른 함수 타입으로 괜찮은지 판단하는 것을 의미합니다.
// 다음 2가지 기준으로 함수 타입의 호환성을 판단하게 됩니다.
// - 두 함수의 반환값 타입이 호환되는가?
// - 두 함수의 매개변수의 타입이 호환되는가?

// 1. 반환값 타입의 호환
// 업캐스팅은 호환되지만, 다운캐스팅은 호환되지 않는다.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ✅ 업캐스팅 => 반환값 타입이 호환된다.
b = a; // ❌ 다운캐스팅 => 반환값 타입이 호환되지 않는다.

// 2. 매개변수의 타입의 호환
// 2-1. 매개변수의 개수가 같을 때
// 업캐스팅은 호환이 안되지만, 다운캐스팅은 호환된다.
// 그 이유는 뭘까?

// 부모(슈퍼) 타입
// 자식 타입 보다 타입이 넓다, 즉 프로퍼티가 적다.
type Animal = {
  name: string;
};

// 자식(서브) 타입
// 부모 타입 보다 타입이 좁다, 즉 프로퍼티가 많다.
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// case 1. ❌ 업캐스팅 (부모 <- 자식)
// 타입스크립트는 좌항의 타입을 기준으로 우항의 타입이 호환되는지 검사한다.
// 그래서 animalFunc가 기대하는 매개변수는 Animal타입이다.
// 그런데 dogFunc가 할당 되었으므로, Dog타입의 객체를 기대하고, color속성을 사용하려고 하여 런타임 오류가 발생 할 수 있다.
// 그렇기 때문에 타입스크립트는 안정성을 위해 업캐스팅 할당을 허용하지 않는다.
animalFunc = dogFunc;
let test1 = (animal: Animal) => {
  console.log(animal.name); // ✅
  console.log(animal.color); // ❌
};

// case 2. ✅ 다운캐스팅 (자식 <- 부모)
// 하지만 반대의 경우는 가능하다.
dogFunc = animalFunc;
let test2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅ 좌항의 매개변수 개수가 우항의 매개변수 개수보다 많으면 가능하다.
func2 = func1; // ❌ 좌항의 매개변수 개수가 우항의 매개변수 개수보다 적으면 불가능 하다.
// 그 외 매개변수의 타입이 다르면 아예 불가능 하다.

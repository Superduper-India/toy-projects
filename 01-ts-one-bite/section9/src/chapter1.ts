// 조건부 타입

// number는 string의 서브타입이 아니기 때문에 거짓 => number
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjA는 ObjB의 슈퍼타입이므로 ObjB가 ObjA를 확장하므로 참 => number
type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입
// 조건부 타입은 아래와 같이 제네릭과 함께 사용할 수 있다.
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 함수 내부에서는 반환타입을 알 수 없기 때문에 에러가 발생한다.
// 그렇기 때문에 오버로드 시그니쳐를 활용한다.
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else return undefined;
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);

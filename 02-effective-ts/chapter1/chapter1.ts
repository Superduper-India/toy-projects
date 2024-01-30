// 1 타입스크립트와 자바스크립트의 관계 이해하기

// function greet(who: string) {
//     console.log('Hello', who);
// }

// let city = 'new york city';
// console.log(city.toUpperCase());

// 타입 체커를 통과한 타입스크립트 프로그램이 자바스크립트의 상위집합이다.
// interface State {
//     name: string;
//     capital: string;
// }

// const states: State[] = [
//     { name: 'Alabama', capitol: 'Montgomery' },
//     { name: 'Alaska', capital: 'Juneau' },
//     { name: 'Arizona', capital: 'Phoenix' },
// ]

// for (const state of states) {
//     console.log(state.capital);
// }

// 타입스크립트의 타입 시스템은 자바스크립트의 런타임 동작을 '모델링'하기 때문에 
// 런타임 오류를 발생시키는 코드를 찾아내려고 한다. 
// 하지만 다음과 같이 타입 체커를 통과하면서도 런타임 오류를 발생시키는 코드는 존재할 수 있다.
// const names = ['Alice', 'Bob'];
// console.log(names[2].toUpperCase());


// 2 타입스크립트 설정 이해하기

// any타입을 사용하는 것에 있어서 주의하자
// noImplicitAny 설정은 가급적 true로 설정하는게 좋다.
// false인 경우는 js로 된 프로젝트를 ts로 전환하는 상황에서만 필요하다.

// function add(a, b) {
//     return a + b;
// }

// strictNullChecks 설정은 null과 undefined가 모든 타입에서 허용되는지 확인하므로,
// null과 undefined관련된 오류를 잡아내는데 많은 도움이 되지만, 코드 작성을 어렵게 한다.

// 그러므로 새 프로젝트의 경우는 strictNullChecks 설정이 true인게 좋지만, (특히 프로젝트의 규모가 클수록!)
// ts가 미숙하거나 js코드를 마이그레이션하는 중이라면 설정하지 않아도 좋다.

// stricNullChecks를 설정하려면 noImplicitAny를 먼저 설정해야한다.
// strictNullChecks, noImplicitAny를 모두 사용하려면 strict 설정을 하면 된다.

// null을 허용하는 경우,
// const x: number | null = null;


// 3 코드 생성과 타입이 관계없음을 이해하기

// (1) 타입 오류가 있는 코드도 컴파일이 가능하다.
// ts컴파일러는 아래의 두 가지 역할을 수행한다.
//  - 최신 ts/js를 브라우저에서 동작할 수 있도록 구버전의 js로 트랜스파일 한다.
//  - 코드의 타입 오류를 체크한다.

// 이 두 가지는 완벽히 독립적이다.
// 그렇기 때문에 아래와 같이 타입 오류가 있는 코드도 컴파일이 가능하다. 즉, 오직 코드 생성만이 '컴파일'이다.
// 만약 오류가 있을 때 컴파일하지 않으려면, noEmitOnError를 설정하면 된다.
// let aa = 'hello'
// aa = 1234

// 타입스크립트의 타입은 '제거 가능'하기 때문에 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 제거된다.
// 아래 예시는 instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없다.
// interface Square {
//     width: number;
// }
// interface Rectangle extends Square {
//     height: number;
// }
// type Shape = Square | Rectangle;

// function calculateArea(shape: Shape) {
//     if (shape instanceof Rectangle) {
//         return shape.width * shape.height;
//     } else {
//         return shape.width * shape.width;
//     }
// }

// (2) 런타임에는 타입 체크가 불가능하기 때문에 런타임에 타입 정보를 유지하는 방법이 별개로 필요하다. 아래부터는 그 예시들이다.
// 첫번째로, 아래 예시는 런타임에 타입 정보를 유지하기 위한 기법으로, 타입스크립트에서 흔히 볼 수 있다.
// 여기서 인터페이스는 타입으로만 사용 가능하지만, 클래스로 선언하면 타입과 값으로 모두 사용할 수 있다.
// interface Square2 {
//     kind: 'square';
//     width: number;
// }
// interface Rectangle2 {
//     kind: 'rectangle';
//     height: number;
//     width: number;
// }
// // 여기서 Shape타입은 '태그된 유니온'의 한 예이다.
// type Shape2 = Square2 | Rectangle2

// function calculateArea2(shape: Shape2) {
//     if ('height' in shape) {
//         // 타입이 Reactangle이다.
//         shape;
//         return shape.width * shape.height;
//     } else {
//         // 타입이 Square이다.
//         shape;
//         return shape.width * shape.width;

//     }
// }

// 두번째로, 아래 예시처럼 타입을 클래스로 만들어서 타입(런타임 접근 불가)와 값(런타임 접근 가능)을 둘 다 사용할 수 있다.
// class Square3 {
//     constructor(public width: number) { }
// }

// class Rectangle3 extends Square3 {
//     constructor(public width: number, public height: number) {
//         // toDo 여기서 super는 무엇인가?
//         super(width)
//     }
// }
// type Shape3 = Square3 | Rectangle3;

// function calculateArea3(shape: Shape3) {
//     if (shape instanceof Rectangle3) {
//         shape;
//         return shape.width * shape.height
//     } else {
//         shape;
//         return shape.width * shape.width
//     }
// }

// (3) 타입 연산은 런타임에 영향을 주지 않는다.
// 아래는 string 또는 number타입인 값을 항상 number로 정제하는 경우이다. 타입 체커를 통과하지만 잘못된 방법을 썼다.
// function asNumber(val: number | string): number {
//     // 여기서 as number는 타입 연산이고, 런타임 동작에는 아무런 영향을 미치지 않는다.
//     // return val as number
//     // 값을 정제하기 위해서는 런타임의 타입을 체크해야하고 자바스크립트 연산을 통해 변환을 수행해야 한다.
//     return typeof (val) === 'string' ? Number(val) : val;
// }

// (4) 런타임 타입은 선언된 타입과 다를 수 있다.

function turnLightOn() {
    console.log('불이 켜짐!')
}

function turnLightOff() {
    console.log('불이 꺼짐!')
}

// Unexpected token ':' 에러가 나는 이유? => ts파일은 노드 환경에서 바로 실행할 수 없다.
function setLightSwitch(value: boolean) {
    switch (value) {
        case true:
            turnLightOn();
            break;
        case false:
            turnLightOff();
            break;
        // 값과 일치하는 case문이 없다면, default문 아래의 코드가 실행된다.
        // 타입스크립트에서 아래 코드를 실행시킬 수 있는 방법은 무엇일까?
        default:
            console.log("실행되지 않을까 봐 걱정됩니다.")
    }
}

// setLightSwitch(true)

// 아래는 네트워크 호출로부터 받아온 값으로 함수를 실행하는 경우이다.
// api가 변경되거나 착오로 인해 lightSwitchValue가 실제로 문자열인 경우와 같이
// 타입스크립트에서는 런타임 타입과 선언된 타입이 맞지 않을 수 있다.

interface LightApiResponse {
    lightSwitchValue: boolean;
}
async function setLight() {
    const response = await fetch('/light')
    const result: LightApiResponse = await response.json();
    setLightSwitch(result.lightSwitchValue)
}

// (5) 타입스크립트 타입으로는 함수를 오버로드할 수 없다.

// 타입스크립트가 함수 오버로딩 기능을 지원하기는 하지만, 이는 타입 수준에서만 동작한다.
// : 여기서 함수 오버로딩이란, 동일한 함수명에 매개변수만 다른 여러 버전의 함수를 허용하는 것을 말한다.
// 즉, 하나의 함수에 대해 여러 개의 선언문을 작성할 수 있지만, 구현체는 오직 하나뿐이다.

// 아래의 두 선언문은 타입 정보를 제공할 뿐이다. 이 두 선언문은 타입스크립트가 자바스크립트로 변환되며 제거되며, 구현체만 남게 된다.
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a, b) {
    return a + b
}

const three = add(1, 2) // 타입이 number
const twelve = add('1', '2') // 타입이 string

// (6) 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

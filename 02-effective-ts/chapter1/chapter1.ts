// 1 타입스크립트와 자바스크립트의 관계 이해하기

function greet(who: string) {
    console.log('Hello', who);
}

let city = 'new york city';
console.log(city.toUpperCase());

// 타입 체커를 통과한 타입스크립트 프로그램이 자바스크립트의 상위집합이다.
interface State {
    name: string;
    capital: string;
}

const states: State[] = [
    { name: 'Alabama', capitol: 'Montgomery' },
    { name: 'Alaska', capital: 'Juneau' },
    { name: 'Arizona', capital: 'Phoenix' },
]

for (const state of states) {
    console.log(state.capital);
}

// 타입스크립트의 타입 시스템은 자바스크립트의 런타임 동작을 '모델링'하기 때문에 
// 런타임 오류를 발생시키는 코드를 찾아내려고 한다. 
// 하지만 다음과 같이 타입 체커를 통과하면서도 런타임 오류를 발생시키는 코드는 존재할 수 있다.
const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());


// 2 타입스크립트 설정 이해하기

// any타입을 사용하는 것에 있어서 주의하자
// noImplicitAny 설정은 가급적 true로 설정하는게 좋다.
// false인 경우는 js로 된 프로젝트를 ts로 전환하는 상황에서만 필요하다.

function add(a, b) {
    return a + b;
}

// strictNullChecks 설정은 null과 undefined가 모든 타입에서 허용되는지 확인하므로,
// null과 undefined관련된 오류를 잡아내는데 많은 도움이 되지만, 코드 작성을 어렵게 한다.

// 그러므로 새 프로젝트의 경우는 strictNullChecks 설정이 true인게 좋지만, (특히 프로젝트의 규모가 클수록!)
// ts가 미숙하거나 js코드를 마이그레이션하는 중이라면 설정하지 않아도 좋다.

// stricNullChecks를 설정하려면 noImplicitAny를 먼저 설정해야한다.
// strictNullChecks, noImplicitAny를 모두 사용하려면 strict 설정을 하면 된다.

// null을 허용하는 경우,
const x: number | null = null;


// 3 코드 생성과 타입이 관계없음을 이해하기

// ts컴파일러는 아래의 두 가지 역할을 수행한다.
//  - 최신 ts/js를 브라우저에서 동작할 수 있도록 구버전의 js로 트랜스파일 한다.
//  - 코드의 타입 오류를 체크한다.

// 이 두 가지는 완벽히 독립적이다.
// 그렇기 때문에 아래와 같이 타입 오류가 있는 코드도 컴파일이 가능하다. 즉, 오직 코드 생성만이 '컴파일'이다.
// 만약 오류가 있을 때 컴파일하지 않으려면, noEmitOnError를 설정하면 된다.
let aa = 'hello'
aa = 1234

// 타입스크립트의 타입은 '제거 가능'하기 때문에 자바스크립트로 컴파일되는 과정에서 모든 인터페이스, 타입, 타입 구문은 제거된다.
// 아래 예시는 instanceof 체크는 런타임에 일어나지만, Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없다.
interface Square {
    width: number;
}
interface Rectangle extends Square {
    height: number;
}
type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if (shape instanceof Rectangle) {
        return shape.width * shape.height;
    } else {
        return shape.width * shape.width;
    }
}

// 런타임에는 타입 체크가 불가능하기 때문에 런타임에 타입 정보를 유지하는 방법이 별개로 필요하다. 아래부터는 그 예시들이다.
// 첫번째로, 아래 예시는 런타임에 타입 정보를 유지하기 위한 기법으로, 타입스크립트에서 흔히 볼 수 있다.
interface Square2 {
    kind: 'square';
    width: number;
}
interface Rectangle2 {
    kind: 'rectangle';
    height: number;
    width: number;
}
// 여기서 Shape타입은 '태그된 유니온'의 한 예이다.
type Shape2 = Square2 | Rectangle2

function calculateArea2(shape: Shape2) {
    if ('height' in shape) {
        // 타입이 Reactangle이다.
        shape;
        return shape.width * shape.height;
    } else {
        // 타입이 Square이다.
        shape;
        return shape.width * shape.width;

    }
}

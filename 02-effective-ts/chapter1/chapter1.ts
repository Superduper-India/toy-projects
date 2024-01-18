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

// 런타임에는 타입 체크가 불가능하다.

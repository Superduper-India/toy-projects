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
const names = ['Alice', 'Bob'];
console.log(names[2].toUpperCase());

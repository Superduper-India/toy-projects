"use strict";
// [ts 문법]
// 자바스크립트 변수, 속성, 매개변수, 리턴값에 타입이 붙었다고 생각하면 됨
// 타입을 지워도 말이되는 js형태여야 한다.
// never, unknown, any타입 주의하기
// 1. 매개변수를 타이핑하는 방법
const a = '엄마야~';
const b = 5;
const c = true;
const d = undefined;
const e = null;
const g = 5; // null과 undefined가 아닌 모든 타입
// 2. 함수를 타이핑하는 방법
function add(x, y) {
    return x + y;
}
const add2 = (x, y) => x + y;
// 3. 객체를 타이핑하는 방법
const obj = {
    lat: 37.5,
    lon: 127.5
};
// 4. 배열을 타이핑하는 방법
const arr = ['123', '456', '789']; // 기본
const arr2 = [123, 456]; // 꺽쇠는 제네릭이다..
const arr3 = [123, 456, 'hello']; // 튜플
// 타입은 최대한 정확한게 중요하다. ts가 추론해주는 타입이 있으면 이건 그대로 사용하고,
// ts가 any로 추론하는 등 잘 추론하지 못하는 경우에만 직접 타이핑할 것
function add3(x, y) {
    return x + y;
}
const result = add(1, 2);
function add4(x, y) {
    return x + y;
}
let aa = 123;
aa = 'hello'; // as 뒷부분
// !의 사용은 지양하자. 대신 if를 사용하자
// (1) !의 역할은 아래변수가 무조건 존재하고, null이나 undefined가 아님을 보증함
const head = document.querySelector('#head');
// (2) 그런데 html코드에서 아래와 같이 id를 수정해버린다면..?!
id;
"header" > /div>;
// (3) null의 속성에 접근하게 되고, 에러가 뜬다.
head.innerHTML = 'hello';
// (4) if를 사용하면 head면 true라 실행되고, header면 false라 실행안됨
if (head) {
    console.log(head);
}
// 나머지 매개변수
function rest(...args) {
    console.log(args); // [1,2,3]
}
// 튜플: 타입의 길이와 배열의 길이를 맞춰준다
const tuple = ['1', 1];
tuple[2] = 'hello'; // 배열의 길이가 늘어나게 할당이 안된다
tuple.push('hello'); // 그런데 push메서드를 쓰는거 까지는 잡아주지 못한다
// 아래와 같이 object형태로 쓰면 컴파일링 후 코드가 남아있다
// 반면 enum은 사라짐
// 코드를 남길지 말지 고민되면 남기자
const ODirection = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
};
const aaa = ODirection.Down;
// obj의 key, value만 타입으로 꺼낼때
const obj2 = {
    a: '123', b: 'hello', c: 'world',
};
const union = { hello: 'world', zero: 'cho' };
const intersection = { hello: 'world', zero: 'cho' };
const sunyoung = {
    breath: true,
    breed: true,
    think: true,
};
const mammal = {
    breath: true,
    breed: true,
};
const name3 = { name: 'sunyoung' };
const name2 = {
    name: 'sunyoung',
    age: 19,
};
const literal = { hello: 'world', why: 'error' };
const literalObj = { hello: 'world', why: 'error' };
const solution = literalObj;
// void 
// 1. 함수의 리턴값인 경우: 리턴값이 없거나 undefined
function example() {
    return null;
}
example();
const example2 = {
    talk() { return 'abc'; }
};
// 3. 매개변수의 리턴값인 경우: 리턴값이 존재할 수 있지만 사용하지 않겠다
function example3(callback) {
    return null;
}
example3(() => { return '3'; });
let target = [];
forEach([1, 2, 3], el => target.push(el));
// unknown과 any의 차이
// unknown 당장은 타입을 잘 모르겠을때(나중에 타입 지정할거)
// any 타입검사를 포기
// 타입 좁히기(타입가드)
// as는 unknown일 경우, 
// 남이 만든 타입이 틀렸을 경우를 제외하고는 사용을 지양하자
function numOrStr(a) {
    // (a as number).toFixed(1);
    if (typeof a === 'number') {
        a.toFixed(1);
    }
}
numOrStr(123);
numOrStr('123');
function typeCheck(a) {
    if ('bbb' in a) {
        a.type;
    }
    else if ('ccc' in a) {
        a.ccc;
    }
    else {
        a.ddd;
    }
}
function catOrDog(a) {
    // if문안에 넣어서 타입 판별을 직접 만들 수 있다
    if (a.meow) {
        return false;
    }
    return true;
}
// 커스텀 타입가드 실전예제
const isRejected = (input) => input.status === 'rejected';
const isFulfilled = (input) => input.status === 'fulfilled';
const promises = await Promise.allSettled([Promise.resolve('a'), Promise.resolve('b')]);
const errors = promises.filter(isRejected);
const readonly = { a: 'hello', b: 'world' };
readonly.a = '123';
const example6 = { Human: 3, Mammal: 5, Animal: 5 };

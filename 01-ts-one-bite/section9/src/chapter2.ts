// 분산적인 조건부 타입

// 아래와 같이 유니온 타입을 쓰게 되면 분산적인 조건부 타입이 된다.
let c: StringNumberSwitch<number | string>;

// 분산적인 조건부 타입을 방지하려면 아래와 같이 타이핑하면 된다.
// type StringNumberSwitch<T> = [T] extends [number] ? string : number;
type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;
// StringNumberSwitch<number> | StringNumberSwitch<string>

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude<number, string>
// Exclude<string, string>

// 2단계
// number |
// never |
// boolean

// 결과(never은 공집합이므로 합집합에서는 제외된다.)
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// number extends string => never |
// string extends string => string |
// boolean extends string => never

// string

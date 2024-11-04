// 함수 타입 정의

// 1. 함수 선언식
// 함수의 반환값 타입은 자동으로 추론되기 때문에 다음과 같이 생략해도 된다.
function func(a: number, b: number) {
  return a + b;
}

// 2. 화살표 함수
const add = (a: number, b: number) => a + b;

// 3. 매개변수 기본값 설정하기
// 아래와 같이 매개변수에 기본값이 설정되어있으면 타입이 자동으로 추론된다. 이럴경우 타입 정의를 생략해도 된다.
// 단, 기본값과 다른 타입으로 설정하면 오류가 발생한다.
function introduce(named = '이정환') {
  console.log(`name : ${name}`);
}

// 기본값과 다른 타입의 값을 인수로 전달해도 오류 발생
// introduce(1);

// 4. 선택적 매개변수 설정하기
// 아래와 같이 매개변수의 이름뒤에 물음표(?)를 붙여주면 선택적 매개변수가 되어 생략이 가능하다.
// 주의할 점은 선택적 매개변수는 필수 매개변수 앞에 올 수 없다. (있을 수도, 없을 수도 있기 때문에!)
function introduce2(name = '이정환', tall?: number) {
  console.log(`name : ${name}`);
  // tall의 타입은 선택적 매개변수이므로 number | undefined이 된다. 그러므로 이 값이 number타입의 값일 거라고 기대하고 사용하려면 다음과 같이 타입 좁히기가 필요하다.
  if (typeof tall === 'number') {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce2('이정환', 156);
introduce2('이정환');

// 5. 나머지 매개변수
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

// 나머지 매개변수의 길이를 고정하고 싶다면 다음과 같이 튜플타입을 이용하면 된다.
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3); // ✅
getSum(1, 2, 3, 4); // ❌

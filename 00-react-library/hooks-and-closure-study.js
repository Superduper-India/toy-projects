// 아래는 리액트의 useState Hook의 아주 기본적인 형태의 복제본이다.
function useState(initialValue) {
  // value는 useState에 의해 만들어진 지역변수
  let value = initialValue

  // state는 내부함수이자 클로저
  function state() {
    return value
  }

  // setState는 내부함수이자 클로저
  function setState(newValue) {
    // value변수를 은닉하면서 변경
    value = newValue;
  }

  // 외부에서 사용하기 위해 함수들을 노출
  return [state, setState]
}

// 배열을 구조분해해서 사용
const [foo, setFoo] = useState(0);
// 0을 인수로 받아 initialValue가 출력
console.log('useState 기본예제:', foo());
// useState스코프 내부에 있는 value변수를 1로 변경
setFoo(1);
// 1을 인수로 받아 업데이트된 initialValue가 출력
console.log('useState 기본예제:', foo());

// 이로써 foo와 setFoo를 사용하여 useState스코프의 내부변수 value에 접근하고, 
// 조작(덮어쓰기)를 할 수 있다. 즉, 이 둘은 useState스코프(렉시컬 환경)에 대한 참조(접근 권한)을 갖고 있고,
// 이런 참조를 클로저라고 한다. React나 여타 다른 프레임워크의 관점에서 보면 이것은 '상태'라고 할 수도 있고, 실제로도 그렇다.

// 위의 useState복제본을 함수형 컴포넌트에 적용해보자.
function Counter() {
  const [count, setCount] = useState(0);

  return function () {
    // state반환값 +1
    setCount(count() + 1)
    // 변경된 state찍어보기
    console.log('useState 함수형 컴포넌트 예제:', count());
  }
}

const C = Counter();
C();
C();
C();


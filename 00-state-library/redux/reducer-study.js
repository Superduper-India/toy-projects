//리듀서란 무엇일까??
//리듀서 함수는  Array.reduce()메서드에 전달되는 콜백함수의 종류와 비슷해서 이름이 붙여졌다.

const numbers = [2, 5, 8]

// previousResult: addNumbers콜백함수가 마지막으로 반환한 값, currItem: numbers배열의 현재 항목
const addNumbers = (previousResult, currItem) => {
  console.log({ previousResult, currItem });
  return previousResult + currItem;
}

const initialValue = 0;

// 첫번째 인수 addNumbers콜백함수,
// 두번째 인수 initialValue 콜백이 처음 실행될 때 previousResult에 사용가능한 값이 없어서 초기값도 전달해야한다.
const total = numbers.reduce(addNumbers, initialValue)
console.log(total);

// redux의 리듀서 함수는 reduce callback함수와 같은 개념이다.
// 이전 결과(state)와 현재 항목(action객체)을 사용해서 해당 인수들을 기반으로 새 상태 값을 결정하고, 반환한다.

// redux actions 배열을 만들었다면, 
// reduce()를 호출해서 reducer함수를 인자로 넘겨주면, 같은 방식으로 최종 결과를 얻는다.
const actions = [
  { type: 'counter/increment' },
  { type: 'counter/increment' },
  { type: 'counter/increment' }
];

function counterReducer(state = initialState, action) {
  // 리듀서의 액션에 대한 관심사를 확인한다.
  if (action.type === 'counter/increment') {
    // 만약 맞다면, state를 복사한다.
    return {
      ...state,
      // 그리고 새로운 값으로 state의 복사본을 업데이트 한다.
      value: state.value + 1
    }
  }
  // 그렇지 않으면 존재하는 state값을 반환한다.
  return state
}

const initialState = { value: 0 };

const finalResult = actions.reduce(counterReducer, initialState);
console.log(finalResult);

// 리덕스 리듀서는 시간 경과에 따른 일련의 작업을 단일 상태로 줄인다.
// Array.reduce()와의 차이점은 해당 메서드는 한순간에 일어나지만, 리덕스는 실행 중인 앱의 수명 동안 일어난다.

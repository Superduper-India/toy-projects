# Redux
> ### 참고자료
>* [리덕스 공식문서](https://redux.js.org/)
>* [Redux에서 state를 업데이트하는 올바른 방법 (불변을 지켜야하는 이유)](https://www.howdy-mj.me/redux/right-way-to-update-state)

<br />

# 💡 핵심 개념
아래는 리덕스 3원칙이다.
* 전체 상태를 하나의 객체에 저장해서 **전역 상태관리**를 한다.
* 상태는 **불변 객체**이다.
* 상태는 **순수함수**(리듀서)에 의해서만 변경되어야 한다.

<br />

## 상태(state)
우리의 앱의 state가 평범한 object형태로 정의되어있다고 생각해보자. 예를들어, 투두 앱의 상태는 아래와 같을 것이다.
```jsx
// state
{
  todos: [{
    content: '눕기',
    isDone: true
  }, {
    content: '운동',
    isDone: false
  }],
  visibilityFilter: 'SHOW_DONE'
}
```
state는 위에서 말했듯이 항상 immutable(불변)해야한다. 즉, 상태값은 오직 액션객체에 의해서만 변경되어야하며, 원본을 변경해선 안된다. 왜일까?
- 원본이 변경되면 UI가 제대로 업데이트되지 않는 버그가 발생한다.
- 상태가 업데이트 된 이유와 방법을 이해하기 어렵다.
- 테스트 작성이 더 어려워진다.
- 리덕스의 의도와 사용패턴에 위배된다.

그렇다면 불변성을 지키면서 새로운 상태를 반환하는 방법엔 무엇이 있을까?
- map, filter, reducer등 기존 배열을 변경하지 않고 새로운 배열을 반환하는 메서드를 사용한다.
- 펼침(spread)연산자를 사용하여 복사본을 사용한다.
- Object.assign메서드를 사용해서 객체의 프로퍼티를 복사한다.

위의 방법들은 휴먼에러를 유발할 수 있다. 실수를 방지하기 위해선 아래와 같은 방법이 있다.
- immutable update logic이 있어 바로 state를 변경할 수 있도록 만들어진 리덕스 툴킷을 사용한다.
- 혹은 immer, immutable-js 라이브러리를 사용한다.

<br />

## 액션(action)
상태를 변경하기 위해, 액션을 디스패치해야한다. 액션은 무슨 일이 일어났는지 설명하는 그저 평범한 자바스크립트 객체이다. 액션은 마치 빵부스러기와 같아서 모든 변경사항을 액션으로 설명하면 앱에서 진행되는 작업을 명확하게 이해할 수 있다.
```jsx
// action
{ type: 'ADD_TODO', text: '청소하기' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }
```

## 리듀서(reducer)
마지막으로 상태와 액션을 함께 묶어주는 리듀서 함수를 작성한다.

리듀서는 순수함수다. 즉, 함수의 외부의 상태(전역 변수의 값을 수정하거나 api요청을 보내는 등)를 변경하지 않으면서 항상 동일한 인자(상태와 액션)을 받아 항상 똑같은 값(새로운 상태)을 리턴하는 함수다.

우선 아래와 같이 상태의 일부를 관리하는 작은 단위의 함수를 작성한다.
```jsx
function visibilityFilter(state = 'SHOW_ALL', action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return action.filter
  } else {
    return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) =>
        action.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}
```
그리고 위의 두 리듀서를 호출하여 앱의 전체 상태를 관리하는 또 다른 리듀서를 작성한다.
```jsx
function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
```
<br />

# 💡 Redux Essentials, Part 1: Redux 개요 및 개념
## 리덕스는 무엇인가?
리덕스는 "actions"라는 이벤트를 사용하여 앱의 상태를 관리하고 업데이트하기 위한 패턴 및 라이브러리이다.

기존에 리액트는 단방향 데이터 흐름으로 자식에서 부모로 데이터 전달이 어려운 부분이 있었다. 물론 부모에서 자식으로 props에 함수를 전달한 뒤 자식에서 함수를 호출하여 데이터를 변경하는 방법은 있다. 여기서 프롭스 드릴링 자체는 문제가 되지 않는다. 하지만 props를 전달해야 하는 컴포넌트가 많아질수록 코드를 추적하기 어려워지기 때문에 유지보수가 어려워진다.

이와 같은 점을 보완하기 위해 **전역 상태관리**를 할 수 있는 리덕스를 사용한다. 즉, 앱의 여러 부분에서 필요한 상태를 “전역”으로 관리하는데 도움이 된다. 상태가 예측 가능한 방식으로만 업데이트될 수 있도록 하는 규칙과 함께 전체 앱에서 사용해야 하는 상태에 대한 중앙 집중식 역할을 한다.

## 리덕스의 용어 및 개념
리덕스는 다음과 같이 구성되어있다. 그리고 이건 단방향 데이터흐름의 작은 예이다.
* **state**: 앱을 구동하는 진실의 출처
* **view**: 현재 상태에 기반한 UI의 선언적 설명
* **action**: 사용자 입력에 따라 앱에서 발생하는 이벤트
* 상태는 특정 시점의 앱 상태를 설명 => UI는 해당 상태를 기반으로 렌더링 => 어떤 일이 발생하면(예: 사용자가 버튼을 클릭하는 경우) 발생한 상황에 따라 상태가 업데이트 => 새로운 상태에 따라 UI가 다시 렌더링
<img src="./img/one-flow.png" width="80%"/>

그러나 이런 단방향 데이터 흐름은 동일한 상태를 공유하고 사용해야하는 구성요소가 여러개일 경우, 부모 구성요소로 ["Lifting State Up"
](https://reactjs.org/docs/lifting-state-up.html)하여 해결할 수 있지만 항상 도움이 되지 않는다.

이를 해결하는 방법은 구성 요소에서 상태를 추출해, 구성 요소 트리 외부의 중앙 위치에 배치하는 것이다. 이를 통해 모든 구성 요소는 트리의 위치에 관계없이 상태에 액세스하거나 작업을 트리거할 수 있다.

이로서 상태와 뷰를 분리해 독립성을 유지할 수 있다.

## 리덕스 앱의 데이터 플로우
아래 코드에서 root 리듀서함수를 통해 리덕스 스토어를 생성한다.
```jsx
//store.js
import { configureStore } from '@reduxjs/toolkit';
import root from './reducer';

// 이 코드에서 우리는 리듀서를 configureStore함수로 전달하고, 
// 이는 스토어 객체를 반환한다.
const store = configureStore({ reducer: root });

export default store;
```
스토어가 리듀서를 한 번 호출할 때 state의 반환 값은 undefined가 되기 때문에 initialState을 지정해서 액션이 발생하기 전에 이 케이스를 잘 처리해줘야 한다. 

그리고 ui가 처음 렌더링되면 컴포넌트는 리덕스 스토어의 현재 상태에 액세스해서 해당 데이터(현재 상태)를 사용해 무엇을 렌더링할지 결정한다. 또한 스토어를 구독해서 향후에도 상태가 변경됐는지 알 수 있다.

**리덕스에 저장된 데이터가 변경됐을때 컴포넌트 A가 변경된값을 가져오는 흐름인 "단방향 데이터 플로우"는 다음과 같다.**
- 사용자가 버튼을 클릭하는 것과 같이 앱에서 어떤 일(action)이 발생한다.
- 소스코드는 `dispatch({type: 'counter/increment'})`과 같이 리덕스 스토어에 작업을 전달한다.
- 스토어는 `이전state`, `현재action`을 인자로 `reducer`함수를 다시 호출하고, 반환값을 새로운 `state`로 저장한다.
- 스토어는 구독하고있는 ui의 모든 부분에 새로운 `state`를 전달하여 스토어가 업데이트됐음을 알린다.
- 스토어의 데이터가 필요한 각 ui의 구성요소(컴포넌트 A)는 변경이 필요한 상태부분을 확인한다.
- 변경된 데이터를 확인하는 각 구성요소(컴포넌트 A)는 새 데이터로 강제로 다시 렌더링하므로 화면에 표시되는 내용을 업데이트할 수 있다.
- 전체적인 흐름은 다음과 같다.
<img src="./img/redux.gif" width="80%"/>

<br/>

# Redux Toolkit
기존의 리덕스는 스토어의 구성이 너무 복잡하고, action creator등 너무 많은 상용구 코드 때문에 생기는 보일러 플레이트(반복되는 코드)문제가 있다. 리덕스 툴킷은 반복되는 코드를 줄여주고, 이에 따라 발생할 수 있는 휴먼 에러를 보완해준다.

그 외 부가적인 기능으로 thunk가 있다. 기존의 리덕스는 플로우가 동기적이기 때문에 thunk로 비동기 처리를 해줄 수 있다. redux saga기능의 일부를 갖고 있고, 비동기처리를 할 때 toolkit에서 extra 리듀서가 추가돼서 상태에 따라 성공인지 실패인지 펜딩인지 처리를 할 수 있다.

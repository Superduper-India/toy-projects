# 리덕스 떵크(Redux Thunk)
📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념
> ### 참고자료
> [리덕스 공식문서 - API 참조](https://redux.js.org/api/applymiddleware)
> [리덕스 공식문서 - Thunks](https://redux.js.org/usage/writing-logic-thunks)
<br/>
> [Redux Thunk Github](https://github.com/reduxjs/redux-thunk)

## 썽크란?
"thunk"란 단어는 "일부 지연된 작업을 수행하는 코드조각"을 의미하는 프로그래밍 용어다. 일부 논리를 지금 실행하는 대신 함수 본문이나 코드를 나중에 작업을 수행하도록 할 수 있다. 리덕스 앱에서 비동기 논리를 작성하기 위한 표준 접근 방식이며, 일반적으로 데이터 가져오기에 사용되지만 다양한 작업에 사용할 수 있으며 동기식 논리와 비동기식 논리를 모두 포함할 수 있다.

## 썽크의 사용법
리덕스 코드가 dispatch를 위한 객체를 생성하기 위해 action creator를 사용하는 것과 동일하게, dispatch되는 thunk함수를 생성하기 위해 thunk action creator를 사용한다. thunk action creator는 인수가 있을 수 있고, 새로운 thunk함수를 반환하는 함수다. 그리고 UI단에서 직접적으로 호출되기보단 store.dispatch()에 인수로 넘겨진다. thunk함수는 스토어의 dispatch method와 getState메서드 두개의 인수를 받는 함수이다.
```jsx
import getPost from './api.js'

// fetchTodoById는 썽크 액션 크리에이터다.
export function fetchTodoById(todoId) {
  // fetchTodoByIdThunk는 썽크 함수다.
  // 이 함수는 3가지 중첩 함수로 작성된다.
  // 아우터함수는 store API객체인 {dispatch, getState}를 받는다.
  // 중간함수는 next체인의 미들웨어(혹은 실제 store.dispatch메서드)를 받는다.
  // action이너함수는 미들웨어 체인을 통과할 때 각각 호출된다.
  return async function fetchTodoByIdThunk(dispatch, getState) {
    // 리듀서가 작업을 처리하는 즉시 상태가 동기식으로 업데이트되므로 dispatch후에 getState를 호출해서 업데이트된 상태를 가져올 수 있다.
    const firstState = getState() // 업데이트 전
    dispatch(firstAction());

    const secondState = getState() // 업데이트 후

    const response = await getPost(todoId)
    dispatch(todosLoaded(response.todos))
    dispatch(todosUpdated(response.todos)) // 여러번 dispatch를 호출할 수 있음
  }

  store.dispatch(fetchTodoByIdThunk)
}
```
아래는 화살표함수를 사용한 예제다.
```jsx
// thunk.jsx
export const fetchTodoById = todoId => async dispatch => {
  const response = await client.get(`/fakeApi/todo/${todoId}`)
  dispatch(todosLoaded(response.todos))
}
```
두 경우 모두 다른 리덕슨 액션을 디스패치하는 것과 동일하게 액션 크리에이터를 호출해서 thunk를 디스패치한다.
```jsx
// TodoComponent.jsx
function TodoComponent({ todoId }) {
  const dispatch = useDispatch()

  const onFetchClicked = () => {
    // 썽크 액션 크리에이터를 호출하고, 썽크 함수를 디스패치로 전달한다.
    dispatch(fetchTodoById(todoId))
  }
}
```

## 썽크를 사용하는 이유?
썽크를 사용하면 UI레이어와 별도로 다음과 같은 추가적인 Redux관련 로직을 작성할 수 있다.
* 비동기 요청 또는 임의 값 생성과 같은 부수효과(side effects)처리하기 (Q. 여기서 말하는 부수효과는 외부변수로 인해 인수가 바뀌는 경우를 말하는것?)
* 여러 작업을 디스패치하거나, getState메서드를 통해 리덕스 스토어의 state에 접근해야하는 로직

리덕스 리듀서엔 부수효과가 있어선 안되지만, 실제 앱엔 부수효과가 있는 로직이 필요하다. 그 중 일부는 컴포넌트 내부에 있을 수도 있지만 일부는 **UI레이아웃 외부에 있어야 할 수도 있다**. 썽크 및 기타 리덕스 미들웨어는 이런 부수효과를 추가할 수 있는 **외부 장소**를 제공한다.

어떤 의미에서 썽크는 어떤 리덕스 스토어가 사용될지 알 필요없이 리덕스 스토어와 상호 작용해야 하는 코드를 미리 작성할 수 있는 창구이다. 이렇게 하면 로직이 특정 리덕스 스토어 인스턴스에 바인딩되지 않고, 재사용 가능한 상태로 유지된다.

썽크는 결국 임의의 논리를 포함할 수 있는 범용 도구로, 다양한 용도로 사용될 수 있다. 가장 일반적인 사용사례는 아래와 같다. 썽크는 생명주기가 없는 단발성 기능이다.
* 컴포넌트에서 복잡해진 로직 옮기기
* ajax요청을 만들고 요청 결과에 따라 액션을 dispatch하는 것과 같은 비동기 로직을 만들 때
* 연속적으로 또는 타임라인에 따라 여러 작업을 전달해야하는 로직을 만들 때
* 액션에 다른 상태값을 포함시키기 위해 `getState`접근권한이 필요한 로직을 만들 때

## 미들웨어란?
미들웨어는 Redux를 확장하는 커스텀 기능이며, 스토어의 dispatch 메소드를 감싸준다. 미들웨어의 핵심기능은 composable하다는 것이다. 즉, 여러 미들웨어를 함께 결합할 수 있고, 여기서 각 미들웨어는 체인의 전후에 대한 지식이 필요하지 않다.

미들웨어의 가장 일반적인 사용 사례는 Rx같은 라이브러리에 대한 종속성이나 보일러 플레이트 코드없이 비동기 작업을 지원하는 것이다. 일반 작업 외에도 비동기 작업을 dispatch 할 수 있게 해준다. 미들웨어는 createStore에 포함되지 않았고, 리덕스 아키텍처의 근본적인 부분은 아니지만 핵심적으로 지원될 만큼 유용하게 쓰인다.

## 사용법
applyMiddleware는 Redux미들웨어 api를 준수하는 함수다. 아래 예시에서 보면, getState함수를 인수로 받는 스토어의 dispatch메서드(logger)를 applyMiddleware의 인수로 전달하고, 익명함수를 리턴한다. 해당 함수에는 미들웨어의 next 디스패치 메서드가 제공되며 next함수에 action을 인수로 전달해서 비동기적으로 값으로 반환하거나, 아예 호출되지 않을 수 있다. 체인의 마지막 미들웨어는 실제 store의 메서드를 매개변수로 수신해서 체인을 종료한다. 따라서 `({getState, dispatch}) => next => action`... ???

```jsx
import { createStore, applyMiddleware } from 'redux';
// todos 리듀서
import todos from './reducers';

function logger({ getState }) {
  return next => (action) => {
    console.log('will dispatch', action)

    // 미들웨어 체인의 다음 디스패치 방법을 호출한다.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // 미들웨어가 이를 변경하지 않는 한, 이는 작업 자체가 될 가능성이 높습니다.
    return returnValue
  }
}

const store = createStore(todos, ['Use Redux'], applyMiddleware(logger))

store.dispatch({
  type: 'ADD_TODO',
  text: 'Understand the middleware'
})
// 이 라인은 미들웨어에 의해 기록된다.
// dispatch예정: { type: 'ADD_TODO', text: 'Understand the middleware' }
// dispatch후 상태: [ 'Use Redux', 'Understand the middleware' ]
```

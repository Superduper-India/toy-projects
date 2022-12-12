# 리덕스 떵크(Redux Thunk)
📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념
> ### 참고자료
> [리덕스 공식문서 - API 참조](https://redux.js.org/api/applymiddleware)
> [리덕스 공식문서 - Thunks](https://redux.js.org/usage/writing-logic-thunks)
<br/>
> [Redux Thunk Github](https://github.com/reduxjs/redux-thunk)

## Thunks를 사용하는 이유?
썽크를 사용하면 UI레이어와 별도로 다음과 같은 추가적인 Redux관련 로직을 작성할 수 있다.
* 비동기 요청 또는 임의 값 생성과 같은 side effects처리하기 (아마 isLoading, isError같은 거일듯..?)
* 여러 작업을 디스패치하거나 Redux 스토어 상태에 액세스

즉, 임의의 논리를 포함할 수 있는 범용 도구로, 다양한 용도로 사용할 수 있다. 가장 일반적인 사용사례는 아래와 같다.
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

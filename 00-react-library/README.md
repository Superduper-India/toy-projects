# 리액트 라이브러리
📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념
> ### 참고자료
> [리액트 공식문서](https://reactjs.org/)
> [리액트 공식문서 베타](https://beta.reactjs.org/)
## JSX
JSX는 html에 js를 같이 사용하는 문법이다. 즉, javascript를 확장한 문법이다. 표현식이기 때문에 컴파일 후 JSX표현식은 일반 js객체로 평가된다.

Babel은 JSX를 `React.createElement()`호출로 컴파일한다. 즉, 아래 두 예제는 동일하다.
```jsx
const element = (
  <h1 className='greeting'>hello!</h1>
);
```
```jsx
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'hello!',
);
```
다음으로 `React.createElement()`는 아래 예제와 같은 객체를 생성한다. 그리고, 이는 리액트 앱의 가장 작은 빌딩 블록이며, "React 요소"라고 한다.

React-DOM는 아래 객체를 읽어서 DOM을 해당 React 요소와 일치하도록 구성하여 최신 상태로 유지하는 것이다.
```jsx
// Note: this structure is simplified
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```
<br />

## Rendering Elements
아래의 div태그를 "root" DOM 노드라고 하며, 내부의 모든 것이 React-DOM에 의해 관리된다.
```html
// index.html
<div id="root"></div>
```

element를 렌더링하려면 먼저 위의 DOM요소를 `ReactDOM.createRoot()`에 전달한 다음, element를 `root.render()`에 전달한다. 렌더링된 "root" DOM요소는 변경할 수 없다. React-DOM은 요소와 그 자식을 이전 요소와 비교하고, 변경된 부분만 DOM업데이트를 적용한다.
```jsx
const root = ReactDOM.createRoot(
  document.getElementById('root') // root DOM요소
);
const element = <h1>Hello, world</h1>;
root.render(element);
```
<br />

## Components and Props
컴포넌트를 사용하면 ui를 독립적이고 재사용 가능한 부분으로 분할하고, 각 부분을 개별적으로 생각할 수 있다. 개념적으로 컴포넌트는 입력값(props)를 받아서 화면에 보여질 element를 리턴하는 부분에서 js함수같다.

컴포넌트를 정의하는 가장 간단한 방법은 아래와 같이 js함수를 작성하는 것이다. 이를 **함수 컴포넌트**라고 한다.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
```

또한 아래와 같이 ES6 클래스를 사용해 컴포넌트를 정의할 수도 있다. 이를 **클래스 컴포넌트**라고 한다.
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

우리는 또한 아래와 같이 **사용자정의 컴포넌트**를 쓸 수 있다.
```jsx
function Welcome(props) { // {name: 'Sara'} as the props
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```
그리고 컴포넌트를 함수로 선언하든 클래스로 선언하든 자체 props(입력값)을 수정해선 안된다. 아래와 같이 동일한 입력에 대해 항상 동일한 결과를 반환하는 **순수함수**여야 한다. 즉, props값 자체를 변경하기 보단 복사후 변경하는걸 권장한다.
```jsx
function sum(a, b) {
  return a + b;
}
```
반대로 아래 함수는 입력값을 변경하기 때문에 순수하지 않다.
```jsx
function withdraw(account, amount) {
  account.total -= amount;
}
```

<br />

## 상태(State)
위에서 요소와 컴포넌트에 대해 알아봤다. 그럼 컴포넌트를 업데이트하려면 어떻게 해야할까? 컴포넌트에 "상태"를 추가해야한다. 

앞서본 props와 state의 차이점은 아래와 같다.
* props는 부모 컴포넌트가 데이터를 자식 컴포넌트에 전달하는 부분에서 함수에 전달하는 인자같다. 그리고 이름을 사용자가 지정할 수 있다.
* state는 컴포넌트의 메모리와 같다. 컴포넌트가 상호작용에 따라 정보를 추적해서 바꿀 수 있다. 그리고 컴포넌트에 의해서만 제어되므로 private하다.

위의 차이점에도 불구하고 props와 state는 함께 작동한다. 즉, 부모 컴포넌트는 자식 컴포넌트에게 props로 상태를 전달할 수 있다. 하지만 자식 컴포넌트는 전달받은 props값이 어디서 왔는지 알 수 없다. 이를 일반적으로 **"하향식" 또는 "단방향" 데이터 흐름**이라고 한다. 

그리고 아래는 `setState()`에 대해 알아야하는 세 가지이다.
* 상태는 직접 수정하면 안된다. 즉, 복사한 뒤에 수정해야한다.

* 상태 업데이트는 비동기로 동작한다. 즉, 순서대로 동작하지 않는다. 왜냐면 리액트는 성능을 위해 여러 호출을 단일 업데이트로 일괄처리할 수 있기 때문이다. `setState()`에 객체대신 함수를 사용한다면 동기적으로 동작할 수 있다. 이 함수는 이전 상태와 업데이트가 적용되는 시점의 속성(props)를 인자로 받는다. 이 함수의 컨셉은 리듀서 함수와 비슷하다.

* `setState()`를 호출하면 state중 업데이트된 값만 반영이 된다. 즉, `setState({comments})`는 `state.comments`만 대체한다.

<br />

## 훅과 클로저(Hooks and Closure)
> ### 참고자료
> [React Hook은 실제로 어떻게 동작할까?](https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/)

부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 상태를 갖고있는지 아닌지 알 수 없고, 함수 또는 클래스 컴포넌트로 정의됐는지 여부를 신경쓰지 않아야 한다. 이것이 상태가 종종 로컬 또는 캡슐화로 불리는 이유다. 상태를 소유한 컴포넌트 이외의 다른 컴포넌트에서는 상태에 접근할 수 없다. 즉, 리액트 훅들은 내부적으로 **클로저**처럼 구현되어있다.

모든 상태는 특정 컴포넌트에 의해 소유되고, 해당 상태에서 파생된 모든 데이터 혹은 UI는 트리에서 하위 컴포넌트에만 영향을 줄 수 있다. 아래는 모든 컴포넌트가 실제로 독립된 컴포넌트라는 것을 보여주는 예시다. 각각의 Clock은 자체 타이머를 설정하고 독립적으로 업데이트된다.
```jsx
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
```
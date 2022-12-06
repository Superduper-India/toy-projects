# 리액트 라이브러리
📃 공식문서를 읽으면서 공부한 내용을 정리하고, 토이프로젝트에 직접 적용해봅니다
<br />

# 💡 핵심 개념
> ### 참고자료
> [리액트 공식문서](https://reactjs.org/)
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
컴포넌트를 사용하면 ui를 독립적이고 재사용 가능한 부분으로 분할하고, 각 부분을 개별적으로 생각할 수 있다.

개념적으로 컴포넌트는 입력값(props)를 받아서 화면에 보여질 element를 리턴하는 부분에서 js함수같다.

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

우리는 또한 아래와 같이 **사용자정의 컴포넌트**를 쓸 수 있고, 리액트는 JSX속성과 자식요소를 이 컴포넌트의 객체(즉, props)로 전달한다. 그렇기 때문에 props의 이름은 맥락을 고려하기보다 컴포넌트의 관점에서 짓는 것을 추천한다.
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

> **참고**
>
> - [리액트 공식문서](https://react.dev/)
> - New Suspense SSR Architecture in React 18
>   - [원문](https://github.com/reactwg/react-18/discussions/37) / [해석본](https://itchallenger.tistory.com/656)

## Server-side Rendering

ssr을 사용하면 서버의 리액트 컴포넌트에서 html을 생성하고 해당 html을 사용자에게 전송하여 자바스크립트 번들이 로드되고 실행되기 전에 사용자가 페이지의 컨텐츠를 볼 수 있다. 리액트의 ssr은 다음 단계를 거친다.

1. 서버에서 **전체 앱**에 대한 데이터를 가져온다.
2. 서버에서 **전체 앱**을 html로 렌더링하여 응답으로 전송한다.
3. 클라이언트에서 **전체 앱**의 자바스크립트 코드를 가상dom으로 로드한다.
4. 클라이언트에서 **전체 앱**의 가상dom을 서버에서 생성한 html에 연결한다. ⇒ **hydration(수화)**

### 문제점

문제는 전체 컴포넌트에서 각 단계가 완료되어야 다음 단계를 진행할 수 있다는 것이다.
다음 예시에서 `Comments` 컴포넌트가 **많은 양의 데이터에 대한 api요청** 및 **복잡한 js로직**을 포함한다고 가정 했을때의 문제점은 다음과 같다.

```jsx
<Layout>
  <NavBar />
  <Sidebar />
  <RightPane>
    <Post />
    <Comments />
  </RightPane>
</Layout>
```

1. **서버에서 html로 렌더링**하기 전까지 서버에 전체 컴포넌트에 대한 모든 데이터가 준비되어 있어야 한다. 그렇기 때문에 서버 데이터에 `<Comments />` 컴포넌트를 포함하게 되면 전체 트리를 렌더링할 수 있을 때까지 **데이터 로드를 완료한 나머지 html(네브바, 사이드바, 글 콘텐츠 등)의 전송을 지연**시켜야 한다.
2. **리액트가 hydration을 시작**하려면, 클라이언트에서 리액트가 생성한 가상 dom과 서버에서 생성한 html(실제 dom의 초기 상태)가 일치해야 한다. 일치하지 않는다면, 리액트는 콘솔 경고를 표시하고 클라이언트에서 DOM을 강제로 덮어씌우거나 다시 생성한다. 이 부분은 다음과 같은 문제를 야기할 수 있다.

- 퍼포먼스 저하: 클라이언트가 불필요하게 DOM을 수정하게 된다.
- 사용자 경험 저하: UI가 갑작스럽게 변화하거나 깜빡일 수 있습니다.
- 디버깅 어려움: 일치하지 않는 트리로 인해 디버깅이 복잡해질 수 있습니다.

3. 그렇기 때문에 모든 html, js를 가져올때까지 기다리는게 좋다. 하지만 `<Comments />` 컴포넌트의 복잡한 js로직으로 인하여 로드하는데 시간이 걸리기 때문에 나머지 js(네브바, 사이드바, 글 콘텐츠 등)의 js코드가 로드되어도 hydration이 시작되지 않는다.

## Streaming SSR

React18의 Streaming SSR은 html을 부분적으로 생성하고, 이를 서버가 준비되는 대로 클라이언트로 즉시 스트리밍하는 방식이다.

1. 서버는 React트리를 순회하며, 렌더링이 가능한 부분부터 html청크로 생성한다.
2. html청크를 클라이언트에 스트리밍으로 전송한다.
3. 클라이언트는 받은 html을 즉시 dom에 반영하면서, 나머지 데이터는 계속 수신한다.
4. Suspense 컴포넌트는 데이터가 준비되지 않은 부분을 감싸고, 로딩 상태를 표시한다.

## Suspense

> **참고**
>
> - React 18의 Suspense
>   - [원문](https://github.com/reactjs/rfcs/blob/main/text/0213-suspense-in-react-18.md)
>   - [해석 및 요약](https://velog.io/@davin/React-18%EC%9D%98-Suspense)

Suspense는 데이터가 준비되지 않은 컴포넌트를 감싸며 로딩 상태를 처리한다.

즉, 서버는 Suspense를 활용해 데이터를 기다리지 않고 먼저 렌더링 가능한 html부분을 전송한다. 데이터가 준비되면 Suspense의 fallback상태를 해제하고, 나머지 html을 클라이언트로 전송한다.

특히, React18버전에서 Suspense는 다음과 같이 변경 사항이 있다.

- **항상 일관된 트리**를 커밋한다.
- 컨텐츠가 나타날 때 `useLayoutEffect()`가 실행된다.
- **스트리밍**을 이용한 SSR을 지원한다.
- **transition을 이용**하여 fallback UI를 방지한다.

아래 예제에서 `<Panel />`은 일반 컴포넌트이고 `<Comments />`는 lazy컴포넌트일때 하나씩 살펴보도록 한다.

```jsx
import { lazy, Suspense } from "react";
import Panel from "./Panel";

const Comments = lazy(() => import("./Comments"));

export default function App() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Panel>
        <Comments />
      </Panel>
    </Suspense>
  );
}
```

17버전에선,

- `<Panel />`을 DOM에 배치하되, `<Comments />`자리는 비워둔다. 그리고 `<Panel />`에 `display: none`속성을 추가한다.
- `Loading`fallback UI를 보여준다.
- `<Panel />`은 보이지 않지만, 기술적으로 마운트 된 상태이기 때문에 effect를 실행한다.
- `<Comments />`가 준비되면 `Loading`을 지우고 DOM에 이미 존재했던 `<Panel />`에 `<Comments />`를 배치하고, `<Panel />`의 `display: none`속성을 제거한다.

18버전에선,

- `<Panel />`을 DOM에 배치하지 않고 버린다.
- `Loading`fallback UI를 보여준다.
- `<Comments />`가 준비되면 `Loading`을 지우고 `<Panel />`과 `<Comments />`를 배치하고, effect를 실행한다.

즉, 컴포넌트가 완전히 준비됐을때 커밋하기 때문에 더욱 직관적이고, effect에서 항상 완전한 트리를 관찰 할 수 있게 되었다.

## Describing the UI

리액트는 ui를 렌더링하기 위한 자바스크립트 라이브러리이다. ui는 버튼, 텍스트, 이미지와 같은 작은 단위로 구성되며, 리액트를 사용하면 이들을 **재사용 가능**하고 **중첩 가능**한 **컴포넌트**로 재결합할 수 있다.

리액트는 JSX라는 구문 확장자를 사용하여 위 마크업을 표현한다. 리액트 컴포넌트는 렌더링 로직과 마크업이 서로 연관되어 있기 때문에 JSX를 사용하여 이를 그룹화한다.

이와 같이 리액트를 사용하면 마크업, css, js를 결합하여 재사용 가능한 ui요소인 컴포넌트로 사용할 수 있다.

```javascript
// 반환문은 아래와 같이 한 줄로 작성할 수도 있고,
function Profile() {
  const avatar = "https://i.imgur.com/MK3eW3As.jpg";
  const description = "Katherine Johnson";
  const name = 'Gregorio Y. Zara';

  // 아래와 같이 괄호없이 한 줄로 적거나, 여러줄로 적을 수 있다.
  // return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;

  // 중괄호를 사용하여 속성값을 동적으로 전달 할 수도 있다.
  return (
    <img
      src={avatar}
      alt={description}
    />
  );
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

// export default는 다른 파일에서 해당 함수를 가져올 수 있도록 쓰는 접두사이다.
// 함수명의 첫글자는 대문자여야 한다!
export default function Gallery() {
  // 아래와 같이 여러줄로 반환문을 작성하려면 괄호로 묶어야 한다.
  // 아래에서 태그는 html처럼 작성되었지만 실제로는 js인 jsx구문이며,
  // 이 구문을 사용하면 js안에 마크업을 삽일할 수 있다.
  return (
    <section>
      <!--중괄호를 사용하여 그 안에 자바스크립트를 사용할 수 있다.-->
      <h1>{name} is amazing scientist</h1>
      <!--뿐만 아니라 중괄호 안에 함수도 사용할 수 있다.-->
      <h1>{formatDate(today)}</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default function TodoList() {
  return (
    // 다음과 같이 중괄호안에 객체를 전달할 수도 있다.
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```

### 프롭스

리액트 컴포넌트는 다음과 같이 객체, 배열, 함수를 포함한 모든 프로퍼티값을 부모에서 자식으로 전달할 수 있다. 이러한 프로퍼티는 컴포넌트의 유일한 인자이다. 리액트 컴포넌트는 하나의 인자, 즉 props객체를 받는다.

이와 같은 프로퍼티는 읽기 전용으로 변경할 수 없기 때문에 상호작용이 필요한 경우 상태를 설정해야한다. 그러나 렌더링할 때마다 새로운 버전의 프로퍼티를 받는다.

```javascript
// 아래와 같이 프롭값에 기본값을 하면,
// size 프롭을 전달하지 않거나 size={undefined}일 때 기본값이 사용된다.
// 하지만 size={null}, size={0}과 같은 경우에는 기본값이 사용되지 않는다.
function Avatar({ person, size = 100 }) {
  // person and size are available here
}

export default function Profile() {
  return (
    <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
  );
}
```

하지만 아래처럼 전달되는 props가 많은 경우, 코드가 반복될 수 있다. 이렇게 하는게 가독성은 더 좋지만 때로는 간결함이 더 중요할 경우, 스프레드 구문을 사용할 수 있다. 하지만 자주 사용하지는 말자!

```javascript

function Avatar(props) {
  // props is available here
}

export default function Profile({ person, size, isSepia, thickBorder }) {

  return (
    <div className="card">
      <!--아래와 같이 스프레드 구문을 사용하여 간결하게 했다.-->
      <Avatar {...props} />
      <!--아래와 같이 각각 프롭을 넘길 수 있지만, 번거롭다.-->
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}
```

JSX태그 안에 컨텐츠를 중첩하면 부모 컴포넌트는 해당 컨텐츠를 `children`이라는 프로퍼티로 받는다. 예를 들어 아래 Card컴포넌트는 `<Avatar />`로 설정된 `children` 프로퍼티를 받아 렌더링한다.

```javascript
import Avatar from "./Avatar.js";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
```

### 조건부 렌더링

아래는 조건부 렌더링을 하는 예시이다.

```javascript
function Item({ name, isPacked }) {
  // example1.
  if (isPacked) {
    // isPacked={true}인 경우 체크 표시가 추가된 아래 jsx트리를 반환한다.
    return <li className="item">{name} ✔</li>;
    // 아무것도 렌더링하고 싶지 않을때는 아래와 같이 null을 반환하면 된다.
    // return null;
  }
  // 아래는 isPacked={false}인 경우 jsx트리를 반환한다.
  return <li className="item">{name}</li>;

  // example2.
  // 아래는 위 예제를 삼항연산자로 표현하는 방법이다.
  return <li className="item">{isPacked ? name + " ✔" : name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
```

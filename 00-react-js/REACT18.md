# 리액트18

> 참고자료: [원문](https://github.com/reactwg/react-18/discussions/37) / [해석본](https://itchallenger.tistory.com/656)

## Prev

ssr을 사용하면 서버의 리액트 컴포넌트에서 html을 생성하고 해당 html을 사용자에게 전송하여 자바스크립트 번들이 로드되고 실행되기 전에 사용자가 페이지의 컨텐츠를 볼 수 있다.

리액트의 ssr은 다음 단계를 거친다.

1. 서버에서 **전체 앱**에 대한 데이터를 가져온다.
2. 서버에서 **전체 앱**을 html로 렌더링하여 응답으로 전송한다.
3. 클라이언트에서 **전체 앱**의 자바스크립트 코드를 로드한다.
4. 클라이언트에서 **전체 앱**의 자바스크립트 로직을 서버에서 생성한 html에 연결한다. ⇒ **hydration(수화)**

문제는 각 단계가 전체 앱에 대해 완료되어야 다음 단계를 진행할 수 있다는 것이다. 다음 예시에서 `Comments` 컴포넌트가 **많은 양의 데이터에 대한 api요청** 및 **복잡한 js로직**을 포함한다고 가정 했을때의 문제점은 다음과 같다.

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

1. 서버에서 html로 렌더링하기 전까지 서버에 전체 컴포넌트에 대한 모든 데이터가 준비되어 있어야 한다. 그렇기 때문에 서버 데이터에 댓글 컴포넌트를 포함하게 되면 전체 트리를 렌더링할 수 있을 때까지 가져오기 완료한 나머지 html(네브바, 사이드바, 글 콘텐츠 등)의 전송을 지연시켜야 한다.
2. 리액트가 hydration을 시작하려면 클라이언트에서 컴포넌트가 생성한 트리가 서버에서 생성한 트리와 일치해야 하기 때문에 모든 html, js를 로딩 해야 한다. `<Comments />` 컴포넌트의 복잡한 js로직으로 인하여 로드하는데 시간이 걸리기 때문에 나머지 js(네브바, 사이드바, 글 콘텐츠 등)의 js코드가 로드되어도 hydration이 시작되지 않는다.

## Suspense

리액트18에선 `Suspense`를 사용하여 아래 각 단계에서 전체 앱 대신 **화면의 일부**만 완료 되어도 다음 단계를 진행할 수 있게 해준다. 즉, `Suspense`를 사용하면 일부 코드가 로드될 때까지 로더를 지정할 수 있다.

```html
Fetch data (server) → Render to HTML (server) → Load JS code (client) → Hydrate (client)
```

다음은 리액트18에서 나온 ssr 기능들이다.

### 서버에서 html 스트리밍

- `renderToString`에서 새로운 `renderToPipeableStream`메서드로 전환
- 사용예시는 다음과 같다.
  ```jsx
  // 컴포넌트
  <Layout>
    <NavBar />
    <Sidebar />
    <RightPane>
      <Post />
      <Suspense fallback={<Spinner />}>
        <Comments />
      </Suspense>
    </RightPane>
  </Layout>
  ```
- 모든 데이터를 가져오기 전에 서버에서 html을 스트리밍해서 `Comments` 컴포넌트의 데이터 페치가 완료되기 전에 `Spinner`컴포넌트를 보여준다.

  ```html
  <main>
      
    <nav>
          <!--NavBar -->
          <a href="/">Home</a>   
    </nav>
      
    <aside>
          <!-- Sidebar -->
          <a href="/profile">Profile</a>   
    </aside>
      
    <article>
          <!-- Post -->
          
      <p>Hello world</p>
        
    </article>
      
    <section id="comments-spinner">
          <!-- Spinner -->
          <img width="400" src="spinner.gif" alt="Loading..." />   
    </section>
  </main>
  ```

- 이후 `Comments` 데이터가 서버에서 준비되면, 리액트는 동일한 스트림에 추가 html을 전송하고 최소한의 인라인 `<script>`태그를 사용하여 해당 html을 올바른 위치에 배치한다.
  ```html
  <div hidden id="comments">
    <!-- Comments -->
    <p>First comment</p>
    <p>Second comment</p>
  </div>
  <script>
    // This implementation is slightly simplified
    document.getElementById('comments-spinner').replaceChildren(document.getElementById('comments'));
  </script>
  ```

### 클라이언트에서 부분적으로 hydration

- 서버에서 html을 스트링 함으로써 초기 html을 더 일찍 보낼 수 있지만, `Comments` 컴포넌트의 자바스크립트 코드가 로드될 때까지 클라이언트에서 hydration을 진행할 수 없다.
- 큰 번들을 피하기 위해 일반적으로 ‘코드 분할’을 사용한다. 코드 조각을 동기식으로 로드할 필요가 없도록 지정하면 번들러가 이를 별도의 `<script>`태그로 분할한다. `React.lazy`와 함께 코드 분할을 사용하여 메인 번들에서 주석 코드를 분리할 수 있다. 클라이언트 `createRoot` 내부에서 `Suspense`로 `Comments` 컴포넌트를 래핑함으로써 모든 코드가 로드되기 전에 부분적으로 수화한 페이지 먼저 인터랙티브하게 한다.

  ```jsx
  import { lazy } from 'react';

  const Comments = lazy(() => import('./Comments.js'));

  // ...

  <Suspense fallback={<Spinner />}>
    <Comments />
  </Suspense>;
  ```

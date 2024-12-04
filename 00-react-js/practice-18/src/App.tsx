import { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Panel from "./Panel";
import ErrorOccuredButton from "./ErrorOccuredButton";
import LazyComponent from "./LazyComponent";
import DataFetchingComponent from "./DataFetchingComponent";
import AsyncErrorOccuredButton from "./AsyncErrorOccuredButton";
import PromiseErrorButton from "./PromiseErrorButton";

const Comments = lazy(() => import("./Comments"));

function App() {
  // 아래와 같이 Error Boundary가 Suspense를 감싸는 경우,
  // 1. ✅ 동기 오류: Suspense내부에서 발생한 모든 동기 오류는 Error Boundary가 처리한다.
  // 2. ✅ 비동기 오류: Suspense에서 React.lazy를 통해 발생하는 비동기 로드 실패는 Error Boundary가 처리한다.
  // 3. ✅ 비동기 오류: 서드 파티 라이브러리를 사용하여 데이터 페칭을 하는 경우, 오류는 Error Boundary가 처리한다.
  // 4. ❌ 비동기 오류: 이벤트 핸들러 동작시 비동기 오류는 처리할 수 없다.
  // 5. ❌ 비동기 오류: 일반적인 Promise오류는 처리할 수 없다.
  return (
    <ErrorBoundary fallback={<div>에러가 발생했습니다! 🥹</div>}>
      <Suspense fallback={<div>Loading... 🥱</div>}>
        <h2>리액트 18버전입니다.</h2>
        <Panel>
          <Comments />
          {/* 동기 에러를 발생시키는 컴포넌트 */}
          <ErrorOccuredButton />
          {/* React.lazy를 통해 비동기 에러를 발생시키는 컴포넌트 */}
          {/* <LazyComponent /> */}
          {/* 서드 파티 라이브러리를 사용하여 데이터 페칭 에러를 발생시키는 컴포넌트 */}
          {/* <DataFetchingComponent /> */}
          {/* 이벤트 핸들러 동작시 비동기 에러를 발생시키는 버튼 컴포넌트 */}
          <AsyncErrorOccuredButton />
          {/* Promise에러를 발생시키는 버튼 컴포넌트 */}
          <PromiseErrorButton />
        </Panel>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;

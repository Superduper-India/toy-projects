import { lazy, Suspense } from "react";
import Panel from "./Panel";

const Comments = lazy(() => import("./Comments"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      리액트 18버전입니다.
      <Panel>
        <Comments />
      </Panel>
    </Suspense>
  );
}

export default App;

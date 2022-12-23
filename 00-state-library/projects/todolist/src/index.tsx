import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // store객체를 Provider구성요소로 전달, 이 객체는 구성요소 트리의 최상단에 렌더링
  // 이를 통해 앱에서 리액트-리듀스가 연결됐고, 구성 요소에서 스토어를 사용할 수 있다.
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

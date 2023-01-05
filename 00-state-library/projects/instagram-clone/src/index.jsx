import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/config/configStore';
import App from './App';

// 클라이언트를 새롭게 생성
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 클라이언트를 앱에 제공
  <QueryClientProvider client={queryClient}>
    {/*Provider를 앱에 제공*/}
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>
);

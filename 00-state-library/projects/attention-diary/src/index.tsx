import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

// 클라이언트를 새롭게 생성
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // 클라이언트를 앱에 제공
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);

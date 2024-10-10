import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import RouterList from './RouterList.tsx';
import { RecoilRoot } from 'recoil';

// 에러 : React 루트 엘리먼트를 만들 때 container가 null일 수 있어 발생하는 문제
const container = document.getElementById('root');

// 해당 container가 null일 때에 대해 예외 처리 해주기
if (!container) throw new Error('Failed to find root element');
const root = createRoot(container).render(
  <RecoilRoot>
    <BrowserRouter>
      {/* <App /> */}
      <RouterList />
    </BrowserRouter>
  </RecoilRoot>
);

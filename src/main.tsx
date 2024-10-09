// src/index.tsx

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // .jsx 대신 .tsx 확장자를 사용합니다.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

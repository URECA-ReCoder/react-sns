import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import '../index.css';
import moment from 'moment';
moment.locale('ko');

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

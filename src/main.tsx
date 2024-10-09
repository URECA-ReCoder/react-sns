import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import '../GlobalStyle';

import moment from 'moment';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
moment.locale('ko');

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

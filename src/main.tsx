import { createRoot } from 'react-dom/client';

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

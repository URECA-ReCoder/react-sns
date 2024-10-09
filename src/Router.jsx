import App from './App';
import { ROUTE } from '@constants/index';
import ChatIndividual from '@pages/ChatIndividual';
import NotFound from '@pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.CHATLIST} element={<App />} />
      <Route path={ROUTE.CHATINDIVIDUAL} element={<ChatIndividual />} />
      <Route path={ROUTE.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

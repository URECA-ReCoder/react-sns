import { Route, Routes } from 'react-router-dom';
import { ROUTE } from '@constants/index';
import ChatList from '@pages/chatList';
import ChatIndividual from '@pages/chatIndividual';
import NotFound from '@pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.CHATLIST} element={<ChatList />} />
      <Route path={ROUTE.CHATINDIVIDUAL} element={<ChatIndividual />} />
      <Route path={ROUTE.NOTFOUND} element={<NotFound />} />
    </Routes>
  );
};

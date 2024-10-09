// src/Router/Router.tsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatLists from '../components/pages/ChatLists';
import ChatScreen from '../components/pages/ChatScreen';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatLists />} />
        <Route path="/chat/:userId" element={<ChatScreen />} /> {/* 사용자 ID에 따라 채팅 화면으로 이동 */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

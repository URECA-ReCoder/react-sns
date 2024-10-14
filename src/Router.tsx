import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import MessageInputPage from './pages/MessageInputPage';
import ChatListPage from './pages/ChatListPage';
export const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
    children: [
      {
        path: '', // 기본 경로로 ChatListPage를 설정
        element: <ChatListPage />,
      },
      {
        path: 'message/:userId', // userId 파라미터 추가
        element: <MessageInputPage />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

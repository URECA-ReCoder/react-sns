import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatLists from '../components/pages/ChatLists';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ChatLists />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;

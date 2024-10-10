import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatList from './components/ChatList';
import ChatApp from './components/ChatApp';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatList />} /> 
        <Route path="/chat/:userId" element={<ChatApp />} /> 
      </Routes>
    </Router>
  );
};

export default AppRouter;

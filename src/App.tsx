import Header from '@pages/chatList/Header';
import { useState } from 'react';
import { chatAppData } from '@assets/chat';
import FindName from '@pages/chatList/FindName';
import List from '@pages/chatList/List';

function App() {
  return (
    <div>
      <Header />
      <FindName />
      <List />
    </div>
  );
}

export default App;

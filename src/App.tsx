import Header from '@pages/chatList/Header';
import { useState } from 'react';
import { chatAppData } from '@assets/chat';
import FindName from '@pages/chatList/FindName';
import List from '@pages/chatList/List';
import BottomTab from '@pages/chatList/BottomTab';

function App() {
  return (
    <div>
      <Header />
      <FindName />
      <List />
      <BottomTab />
    </div>
  );
}

export default App;

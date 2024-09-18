import Header from '@components/Header';
import MessageInput from '@components/MessageInput';
import ChatList from '@components/ChatList';
import { useState } from 'react';
import { chat } from '@assets/chat';

function App() {
  function handleNewChat(chat: Chat) {
    setChats((prevChats: ChatArray) => [...prevChats, chat]);
  }
  const [chats, setChats] = useState<ChatArray>(chat);
  const [alarmOff, setAlarmOff] = useState<boolean>(false);

  return (
    <div>
      <Header alarmOff={alarmOff} setAlarmOff={setAlarmOff} />
      <ChatList alarmOff={alarmOff} chats={chats} />
      <MessageInput alarmOff={alarmOff} handleNewChat={handleNewChat} />
    </div>
  );
}

export default App;

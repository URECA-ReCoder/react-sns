import Header from '@components/Header';
import MessageInput from '@components/MessageInput';
import useChat from '@hooks/useChat';
import ChatList from '@components/ChatList';
import { useState } from 'react';

function App() {
  const { chats, handleNewChat } = useChat();
  const [alarmOff, setAlarmOff] = useState(false);
  return (
    <div>
      <Header alarmOff={alarmOff} setAlarmOff={setAlarmOff} />
      <ChatList alarmOff={alarmOff} chats={chats} />
      <MessageInput alarmOff={alarmOff} handleNewChat={handleNewChat} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import chat from '@assets/chat';

function useChat() {
  const [chats, setChats] = useState(chat);
  function handleNewChat(chat) {
    setChats((prevChats) => [...prevChats, chat]);
  }

  return { chats, handleNewChat };
}

export default useChat;

/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import ChatData from '../assets/chatting.json';
import ChatHeader from '../Component/ChatHeader';
import Chatting from '../Component/Chatting';
import Input from '../Component/Input';
import { useChat } from '../hook/useChat';

function ChatRoom() {
  const [chats] = useState(ChatData.chats); // JSON 데이터를 상태로 저장
  const { inputValue, setInputValue, inputChatList, sendChat, items } =
    useChat();
  // id가 1인 유저 정보를 헤더에 전달
  const headerChat = chats.find((chat) => chat.index === 1);

  return (
    <div>
      {/* 헤더에 name과 id 전달 */}
      <ChatHeader name={headerChat.name} id={headerChat.id} />

      {/* 전체 채팅 리스트를 채팅 컴포넌트에 전달 */}
      <Chatting chats={chats} items={inputChatList} />
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sendChat={sendChat}
      />
    </div>
  );
}

export default ChatRoom;

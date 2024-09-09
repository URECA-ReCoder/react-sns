import React, { useState } from 'react';
import ChatData from '../assets/chatting.json';
import ChatHeader from './ChatHeader';
import Chatting from './Chatting';

function ChatRoom() {
  const [chats] = useState(ChatData.chats); // JSON 데이터를 상태로 저장

  // id가 1인 유저 정보를 헤더에 전달
  const headerChat = chats.find((chat) => chat.index === 1);

  return (
    <div>
      {/* 헤더에 name과 id 전달 */}
      <ChatHeader name={headerChat.name} id={headerChat.id} />

      {/* 전체 채팅 리스트를 채팅 컴포넌트에 전달 */}
      <Chatting chats={chats} />
    </div>
  );
}

export default ChatRoom;

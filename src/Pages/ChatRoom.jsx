/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import ChatData from '../assets/chatting.json';
import ChatHeader from '../Component/ChatHeader';
import Chatting from '../Component/Chatting';
import Input from '../Component/Input';
import { useChat } from '../hook/useChat';

function ChatRoom() {
  const [chats] = useState(ChatData.chats);
  const { inputValue, setInputValue, inputChatList, sendChat } = useChat();
  const headerChat = chats.find((chat) => chat.index === 1);

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow: hidden;
      `}
    >
      <ChatHeader
        name={headerChat.name}
        id={headerChat.id}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          background-color: white;
          padding: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        `}
      />

      <Chatting chats={chats} items={inputChatList} />

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sendChat={sendChat}
        css={css`
          position: fixed;
          padding: 10px;
          z-index: 10;
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        `}
      />
    </div>
  );
}

export default ChatRoom;

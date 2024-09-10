/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import ChatData from '../assets/chatting.json';
import ChatHeader from '../Component/ChatHeader';
import Chatting from '../Component/Chatting';
import Input from '../Component/Input';
import { useChat } from '../hook/useChat';
import { useFocus } from '../hook/useFocus';

function ChatRoom() {
  const [chats] = useState(ChatData.chats);
  const { inputValue, setInputValue, inputChatList, sendChat, back } =
    useChat();
  const { inputRef, chatContainerRef, scrollToBottom } = useFocus();

  // 메시지가 입력될 때마다 스크롤을 하단으로 이동
  useEffect(() => {
    scrollToBottom();
  }, [inputChatList]); // inputChatList가 변경될 때마다 스크롤

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
        name={chats[0].name}
        id={chats[0].id}
        back={back}
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

      <div
        ref={chatContainerRef} // 채팅 컨테이너에 대한 ref
        css={css`
          flex: 1;
          overflow-y: auto;
          margin-bottom: 80px;
        `}
      >
        <Chatting chats={chats} items={inputChatList} />
      </div>

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sendChat={sendChat}
        inputRef={inputRef} // 입력창에 대한 ref 전달
        css={css`
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          max-width: 430px;
          padding: 10px;
          background-color: white;
          z-index: 10;
          box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
        `}
      />
    </div>
  );
}

export default ChatRoom;

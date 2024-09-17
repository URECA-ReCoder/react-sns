/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import ChatData from '../../public/data/chatting.json';
import ChatHeader from '../components/ChatHeader';
import Chatting from '../components/Chatting';
import Input from '../components/Input';
import { useChat } from '../hook/useChat';
import { useFocus } from '../hook/useFocus';
import { useAlert } from '../hook/useAlert';

function ChatRoom() {
  const [chats] = useState(ChatData.chats);
  const {
    inputValue,
    setInputValue,
    inputChatList,
    sendChat,
    handleBack,
    alertBack,
    alertVideo,
  } = useChat();
  const { inputRef, chatContainerRef, scrollToBottom } = useFocus();
  // const { alertBack } = useAlert();
  // const { handleBack } = useButtonevent();

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
        alertBack={alertBack}
        alertVideo={alertVideo}
        // css={css`
        //   position: fixed;
        // `}
      />

      <div
        ref={chatContainerRef} // 채팅 컨테이너에 대한 ref
        css={css`
          flex: 1;
          overflow-y: auto;
        `}
      >
        <Chatting chats={chats} items={inputChatList} />
      </div>

      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        sendChat={sendChat}
        inputRef={inputRef} // 입력창에 대한 ref 전달
      />
    </div>
  );
}

export default ChatRoom;

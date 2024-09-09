import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import chatData from '../public/ChatData.json'; 
import userData from '../public/UserData.json'; 


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

export default function ChatApp() {
  return (
    <ChatContainer>
         <Header />
      <ChatMessages />
      <ChatInput />
    </ChatContainer>
  );
}

  
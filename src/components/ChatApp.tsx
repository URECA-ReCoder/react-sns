import { useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import chatData from '../assets/data/ChatData.json';
import userData from '../assets/data/UserData.json';
// User 및 Message 인터페이스 정의
interface User {
  id: number;
  userImage: string;
  userName: string;
}

interface Message {
  id: number;
  userId: number;
  time: string;
  text: string;
}

const ChatApp = () => {
  // 메시지와 사용자 데이터를 상태로 관리
  const [messages, setMessages] = useState<Message[]>(chatData);
  const [users, setUsers] = useState<{ [key: number]: User }>(() => {
    const usersMap: { [key: number]: User } = {};
    userData.forEach(user => {
      usersMap[user.id] = user;
    });
    return usersMap;
  });

  // 기본 사용자 ID
  const MY_ID = 0;

  // 메시지 전송 핸들러
  const handleSendMessage = (newMessageText: string) => {
    const newMessage: Message = {
      id: Date.now(),
      userId: MY_ID,
      time: new Date().toLocaleTimeString(),
      text: newMessageText
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  return (
    <ChatContainer>
      <Header />
      <ChatMessages messages={messages} users={users} />
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};

// 스타일 컴포넌트 하단 정의
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px; 
  overflow: hidden;
`;

export default ChatApp;

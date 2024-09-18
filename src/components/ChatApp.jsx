import { useState } from 'react';
import Header from './Header';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import chatData from '../assets/data/ChatData.json';
import userData from '../assets/data/UserData.json';

const ChatApp = () => {
  // 초기 상태를 JSON 데이터로 설정
  const [messages, setMessages] = useState(chatData);
  const [users, setUsers] = useState(() => {
    const usersMap = {};
    userData.forEach(user => {
      usersMap[user.id] = user;
    });
    return usersMap;
  });

  // 상수로 분리된 사용자 ID
  const MY_ID = 0;

  // 새로운 메시지를 추가하는 함수
  const handleSendMessage = (newMessageText) => {
    const newMessage = {
      id: Date.now(),
      userId: MY_ID, // 상수로 분리된 사용자 ID 사용
      time: new Date().toLocaleTimeString(),
      text: newMessageText
    };
    
    // 상태 업데이트: 이전 상태를 기반으로 새로운 메시지 추가
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

export default ChatApp;

// 스타일링 코드 최하단에 분리
import styled from 'styled-components';

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

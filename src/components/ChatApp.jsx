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
  height: 800px;
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // JSON 파일로부터 데이터를 가져와 상태 설정
    setMessages(chatData);
    
    // 사용자 데이터를 객체 형태로 변환하여 상태에 설정
    const usersMap = {};
    userData.forEach(user => {
      usersMap[user.id] = user;
    });
    setUsers(usersMap);
  }, []);

  // 새로운 메시지를 추가하는 함수
  const handleSendMessage = (newMessageText) => {
    const newMessage = {
      id: Date.now(), 
      userId: 0,
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

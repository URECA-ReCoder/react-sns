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
  // 새로운 메시지 객체 생성
  const newMessage = {
    id: messages.length + 1, // 메시지 ID는 현재 메시지 길이 + 1로 설정
    userId: 0, // 현재 사용자 ID (기본값은 0으로 설정)
    time: new Date().toLocaleTimeString(), // 현재 시간을 메시지 시간으로 설정
    text: newMessageText // 사용자가 입력한 메시지 텍스트
  };
 // 새로운 메시지를 기존 메시지 목록에 추가하여 상태 업데이트
    setMessages([...messages, newMessage]);
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

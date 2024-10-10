import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';
import { messageState, userState } from '../recoil/atoms';
import Header from './Header';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import chatData from '../assets/data/ChatData.json';
import userData from '../assets/data/UserData.json';
import styled from 'styled-components';  

const ChatApp = () => {
  const [messages, setMessages] = useRecoilState(messageState);
  const [users, setUsers] = useRecoilState(userState);
  const navigate = useNavigate();
  // URL에서 사용자 ID 가져오기
  const { userId } = useParams<{ userId: string }>();
  
  // 기본 사용자 ID
  const MY_ID = 0;

  // 메시지 전송 핸들러
  const handleSendMessage = (newMessageText: string) => {
    const newMessage = {
      id: Date.now(),
      userId: MY_ID,
      time: new Date().toLocaleTimeString(),
      text: newMessageText,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };
  
  const handleBackClick = () => {
    navigate('/');
  };

  // 애플리케이션 처음 로드 시 초기 데이터 설정
  useEffect(() => {
    const usersMap: { [key: number]: User } = {};
    userData.forEach((user) => {
      usersMap[user.id] = user;
    });

    setUsers(usersMap);
    
    // 선택된 사용자 ID에 해당하는 메시지만 가져오기
    const userMessages = chatData.filter(message => 
      message.userId === parseInt(userId) || message.userId === MY_ID
    );

    setMessages(userMessages);
  }, [setUsers, setMessages, userId]);

  return (
    <ChatContainer>
      <Header onBackClick={handleBackClick} /> 
      <ChatMessages messages={messages} users={users} />
      <ChatInput onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
};

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

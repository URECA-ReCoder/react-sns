import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #fff;
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const MessageContent = styled.div`
  max-width: 70%;
`;

const MessageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  font-size: 12px;
  color: #555;
`;

const MessageText = styled.div`
  background-color: ${props => props.isUser ? '#007bff' : '#f0f0f0'};
  color: ${props => props.isUser ? 'white' : '#333'};
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
`;

const ChatMessages = ({ messages, users }) => {
  const containerRef = useRef(null); // 메시지 리스트 컨테이너를 참조하기 위한 useRef 훅

  useEffect(() => {
    // 메시지가 업데이트될 때 스크롤을 컨테이너의 가장 아래로 이동
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <MessagesContainer ref={containerRef}>
      {messages.map((message) => {
        const user = users[message.userId] || {}; // 메시지에 해당하는 사용자 정보
        return (
          <Message key={message.id} style={{ justifyContent: user.id === 0 ? 'flex-end' : 'flex-start' }}>
            {user.id !== 0 && <UserImage src={user.userImage} alt={user.userName} />} 
            <MessageContent>
              <MessageInfo>
                <span>{user.userName}</span> 
                <span>{message.time}</span> 
              </MessageInfo>
              <MessageText isUser={user.id === 0}>{message.text}</MessageText> 
            </MessageContent>
            {user.id === 0 && <UserImage src={user.userImage} alt={user.userName} />} 
          </Message>
        );
      })}
    </MessagesContainer>
  );
};

export default ChatMessages;
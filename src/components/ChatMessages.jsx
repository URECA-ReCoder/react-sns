import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { USERID } from '../constants'; // userId 상수를 별도 파일에서 관리



const ChatMessages = ({ messages, users }) => {
  const containerRef = useRef(null); // 메시지 리스트 컨테이너를 참조하기 위한 useRef 훅

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // 메시지가 업데이트될 때마다 스크롤을 하단으로 이동

  return (
    <MessagesContainer>
      {messages.map((message) => {
        const user = users[message.userId] || {}; // 메시지에 해당하는 사용자 정보
        const isUser = user.id === USERID;

        return (
          <Message key={message.id} isUser={isUser}>
            {!isUser && <UserImage src={user.userImage} alt={user.userName} />}
            <MessageContent>
              <MessageInfo>
                <span>{user.userName}</span>
                <span>{message.time}</span>
              </MessageInfo>
              <MessageText isUser={isUser}>{message.text}</MessageText>
            </MessageContent>
            {isUser && <UserImage src={user.userImage} alt={user.userName} />}
          </Message>
        );
      })}
      <div ref={containerRef} /> {/* 스크롤이 끝까지 내려갈 수 있도록 ref 연결 */}
    </MessagesContainer>
  );
};

const MessagesContainer = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #fff;
  scroll-behavior: smooth;
`;

const Message = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: ${(props) => (props.isUser ? '0' : '10px')};
  margin-left: ${(props) => (props.isUser ? '10px' : '0')};
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
  background-color: ${(props) => (props.isUser ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isUser ? 'white' : '#333')};
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
`;

export default ChatMessages;

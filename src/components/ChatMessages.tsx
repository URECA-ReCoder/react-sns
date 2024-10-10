import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil'; 
import { messageState, userState } from '../recoil/atoms'; 
import { USERID } from '../constants';


const ChatMessages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Recoil 상태에서 messages와 users 가져오기
  const messages = useRecoilValue(messageState);
  const users = useRecoilValue(userState);

  // 메시지 업데이트 시 자동 스크롤
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <MessagesContainer>
      {messages.map((message) => {
        const user = users[message.userId]; 
        const isUser = user && user.id === USERID;

        return (
          <Message key={message.id} isUser={isUser}>
            {!isUser && <UserImage src={user?.userImage} alt={user?.userName} />}
            <MessageContent>
              <MessageInfo>
                <span>{user?.userName}</span>
                <span>{message.time}</span>
              </MessageInfo>
              <MessageText isUser={isUser}>{message.text}</MessageText>
            </MessageContent>
            {isUser && <UserImage src={user?.userImage} alt={user?.userName} />}
          </Message>
        );
      })}
      <div ref={containerRef} />
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

const Message = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  justify-content: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
`;

const UserImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>`
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

const MessageText = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isUser',
})<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.isUser ? 'white' : '#333')};
  padding: 8px 12px;
  border-radius: 15px;
  font-size: 14px;
  line-height: 1.4;
`;

export default ChatMessages;

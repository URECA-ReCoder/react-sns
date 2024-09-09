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

export default function ChatMessages() {
  return (
    <MessagesContainer>
      <Message>
        <UserImage src="/path/to/default/image.png" alt="User" />
        <MessageContent>
          <MessageInfo>
            <span>User Name</span>
            <span>Time</span>
          </MessageInfo>
          <MessageText isUser={false}>Message content</MessageText>
        </MessageContent>
      </Message>
    </MessagesContainer>
  );
}

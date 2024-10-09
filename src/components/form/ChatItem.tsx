import React from 'react';
import styled from 'styled-components';

interface ChatItemProps {
  profileImage: string;
  name: string;
  status: string;
  onClick: () => void;
}

const ChatItem: React.FC<ChatItemProps> = ({ profileImage, name, status,onClick }) => {
  return (
    <ChatItemContainer className="chat-item" onClick={onClick}>
      <img
        src={profileImage}
        alt={`${name} profile`}
        style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
      />
      <div className="chat-info">
        <p style={{ margin: 0, fontWeight: 'bold' }}>{name}</p>
        <p style={{ margin: 0, color: '#888' }}>{status}</p>
      </div>
    </ChatItemContainer>
  );
};

export default ChatItem;
const ChatItemContainer = styled.div`
display: flex;
align-items: center;
padding: 16px 20px;
`
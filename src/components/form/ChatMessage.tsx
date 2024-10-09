// components/form/ChatMessage.tsx
import React from 'react';

interface ChatMessageProps {
  chat: {
    id: string;
    name: string;
    message: string;
    time: string;
    profileImage: string; // 프로필 이미지 추가
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
  const isMe = chat.id === 'eonny'; // 임시언인지 확인

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isMe ? 'flex-end' : 'flex-start',
        alignItems: 'center',
        marginBottom: '12px',
      }}
    >
      {!isMe && (
        <img
          src={chat.profileImage} // 상대방의 프로필 이미지
          alt={chat.name}
          style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '8px' }}
        />
      )}
      <div style={{ maxWidth: '60%', textAlign: isMe ? 'right' : 'left' }}>
        <div
          style={{
            backgroundColor: isMe ? '#6245ff' : '#f0f0f0',
            color: isMe ? '#fff' : '#000',
            padding: '10px',
            borderRadius: isMe ? '14px 2px 14px 14px' : '2px 14px 14px 14px',
            fontSize: '14px',
          }}
        >
          {chat.message}
        </div>
        <small
          style={{
            display: 'block',
            marginTop: '4px',
            fontSize: '0.8rem',
            color: '#888',
          }}
        >
          {chat.time}
        </small>
      </div>
      {isMe && (
        <img
          src={chat.profileImage} // 본인의 프로필 이미지
          alt="Me"
          style={{ width: '36px', height: '36px', borderRadius: '50%', marginLeft: '8px' }}
        />
      )}
    </div>
  );
};

export default ChatMessage;

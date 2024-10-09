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
        alignItems: 'flex-end',
        marginBottom: '12px',
      }}
    >
      {/* 상대방 프로필 이미지 */}
      {!isMe && (
        <img
          src={chat.profileImage}
          alt={chat.name}
          style={{ width: '36px', height: '36px', borderRadius: '50%', marginRight: '8px' }}
        />
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMe ? 'flex-end' : 'flex-start',
          maxWidth: '240px',
        }}
      >
        <div
          style={{
            backgroundColor: isMe ? '#6245ff' : '#f0f0f0',
            color: isMe ? '#fff' : '#000',
            padding: '10px',
            borderRadius: isMe ? '14px 2px 14px 14px' : '2px 14px 14px 14px',
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
            display: 'inline-block',
          }}
        >
          {chat.message}
        </div>
        <div
          style={{
            fontSize: '0.7rem',
            color: '#888',
            marginTop: '4px',
          }}
        >
          {chat.time}
        </div>
      </div>

      {/* 본인 프로필 이미지 */}
      {isMe && (
        <img
          src={chat.profileImage}
          alt="Me"
          style={{ width: '36px', height: '36px', borderRadius: '50%', marginLeft: '8px' }}
        />
      )}
    </div>
  );
};

export default ChatMessage;

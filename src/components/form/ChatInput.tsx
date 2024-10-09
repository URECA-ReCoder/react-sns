// components/ChatInput.tsx
import React from 'react';

const ChatInput: React.FC = () => {
  return (
    <div style={chatInputStyle}>
      <input
        type="text"
        placeholder="메시지 보내기..."
        style={inputStyle}
      />
      <button style={buttonStyle}>
        <img src="/images/send.png" alt="Send" style={sendIconStyle} />
      </button>
    </div>
  );
};

const chatInputStyle: React.CSSProperties = {
  display: 'flex',
  width:'100%',
  padding: '10px',
  borderTop: '1px solid #ddd',
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  border: 'none',
  padding: '10px',
  fontSize: '1rem',
  borderRadius: '20px',
  outline: 'none',
};

const buttonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  marginLeft: '8px',
  cursor: 'pointer',
};

const sendIconStyle: React.CSSProperties = {
  width: '24px',
  height: '24px',
};

export default ChatInput;

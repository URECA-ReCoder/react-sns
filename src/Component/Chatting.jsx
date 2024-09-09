import React, { useState, useEffect } from 'react';
import ChatData from '../assets/chatting.json';
function Chatting() {
  const [chats] = useState(ChatData.chats);

  return (
    <div>
        
      {chats.map((chat, index) => (
        <div key={index} className="chat-message">
          <p>
            <strong>{chat.id}</strong> <span>{chat.time}</span>
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>{chat.message}</p>
        </div>
      ))}
    </div>
  );
}
export default Chatting;

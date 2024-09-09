import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
function Chatting({ chats }) {
  return (
    <div className="chat-container">
      {chats.map((chat) => (
        <div key={chat.id} className="chat-message">
          <p>
            <strong>{chat.name}</strong> <span>{chat.time}</span>
          </p>
          <p style={{ whiteSpace: 'pre-line' }}>{chat.message}</p>
        </div>
      ))}
    </div>
  );
}
export default Chatting;

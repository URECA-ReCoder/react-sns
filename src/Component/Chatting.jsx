import React, { useState, useEffect } from 'react';

function Chatting({ chats, items }) {
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
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
export default Chatting;

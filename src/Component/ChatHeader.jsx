import React from 'react';

function ChatHeader({ name, id }) {
  return (
    <div>
      <span>이미지</span>
      <span>
        <div>{name}</div>
        <div>{id}</div>
      </span>
      <span>비활성화</span>
      <span>비디오</span>
    </div>
  );
}

export default ChatHeader;

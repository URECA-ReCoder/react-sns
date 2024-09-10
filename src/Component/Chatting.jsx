import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import IU from '../assets/images/IU.png';
import Me from '../assets/images/Me.png';

const SpeechBubble1 = styled.div`
  background-color: #ffffff;
  max-width: 200px;
  color: black;
  padding: 10px;
  border-radius: 2px 12px 12px 12px;
  border: 1px solid #dfdfdf;
  text-align: left;
  align-self: flex-start;
`;

const SpeechBubble2 = styled.div`
  background-color: #6245ff;
  max-width: 200px;
  color: #ffffff;
  padding: 10px;
  border-radius: 12px 2px 12px 12px;
  text-align: right;
  align-self: flex-end;
  margin-left: auto;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 7px;
`;

const IdText = styled.div`
  text-align: right; /* 오른쪽 정렬 */
  margin: 0 5px 5px 0; /* 약간의 여백 추가 */
  color: gray;
  font-size: 12px;
`;
const TimeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: 10px;
  color: gray;
  margin: 0 3px;
`;
function Chatting({ chats, items }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {chats.map((chat) => {
        if (chat.index === 1) {
          return (
            <span
              key={chat.id}
              style={{
                display: 'flex',
              }}
            >
              <ProfileImg src={IU} />
              <div>
                <IdText style={{ textAlign: 'left' }}>{chat.id}</IdText>
                <SpeechBubble1 style={{ whiteSpace: 'pre-line' }}>
                  {chat.message}
                </SpeechBubble1>
              </div>
              <TimeStyle> {chat.time}</TimeStyle>
            </span>
          );
        } else {
          return (
            <span
              key={chat.id}
              style={{
                display: 'flex',
                alignSelf: 'flex-end',
                marginLeft: 'auto',
              }}
            >
              <TimeStyle>{chat.time}</TimeStyle>
              <div>
                <IdText>{chat.id}</IdText> {/* id를 오른쪽에 정렬 */}
                <SpeechBubble2 style={{ whiteSpace: 'pre-line' }}>
                  {chat.message}
                </SpeechBubble2>
              </div>
              <ProfileImg src={Me} />
            </span>
          );
        }
      })}
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Chatting;

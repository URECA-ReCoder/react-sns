import React from 'react';
import styled from '@emotion/styled';
import IU from '../../public/images/IU.png';
import Me from '../../public/images/Me.png';

const ChattingContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  margin-bottom: 70px;
`;

const SpeechBubble1 = styled.div`
  width: fit-content;
  max-width: 240px;
  color: black;
  display: flex;
  padding: 10px;
  border-radius: 2px 14px 14px 14px;
  border: 1px solid #dfdfdf;
  text-align: left;
  align-items: flex-end;
  white-space: pre-wrap;
  font-weight: 400;
  font-size: 14px;
`;

const SpeechBubble2 = styled.div`
  background-color: #6245ff;
  width: fit-content;
  max-width: 240px;
  color: #ffffff;
  padding: 10px;
  display: flex;
  border-radius: 14px 2px 14px 14px;
  text-align: left;
  align-self: flex-end;
  margin-left: auto;
  white-space: pre-wrap;
  font-size: 14px;
`;

const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;

const IdText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: right;
  margin: 0 5px 5px 0;
  color: #979797;
  font-size: 12px;
  letter-spacing: -0.4px;
`;

const TimeStyle = styled.span`
  display: flex;
  justify-content: flex-end;
  font-size: 10px;
  color: #b6b6b6;
  letter-spacing: -0.4px;
`;

function Chatting({ chats, items }) {
  return (
    <ChattingContainer>
      {/* 기존 JSON 데이터로 채팅 출력 */}
      {chats.map((chat: any) => {
        if (chat.index === 1) {
          return (
            <span
              key={chat.id}
              style={{
                display: 'flex',
                gap: '8px',
              }}
            >
              <ProfileImg src={IU} />

              <IdText style={{ textAlign: 'left' }}>
                {chat.id}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px',
                  }}
                >
                  <SpeechBubble1 style={{ whiteSpace: 'pre-line' }}>
                    {chat.message}
                  </SpeechBubble1>

                  <TimeStyle> {chat.time}</TimeStyle>
                </div>
              </IdText>
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
                gap: '8px',
              }}
            >
              <IdText>
                {chat.id}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '4px',
                  }}
                >
                  <TimeStyle>{chat.time}</TimeStyle>
                  <SpeechBubble2 style={{ whiteSpace: 'pre-line' }}>
                    {chat.message}
                  </SpeechBubble2>
                </div>
              </IdText>

              <ProfileImg src={Me} />
            </span>
          );
        }
      })}

      {/* Input된 객체 값들(items 배열) 출력 */}
      {items.map((item, index) => (
        <span
          key={index}
          style={{
            display: 'flex',
            alignSelf: 'flex-end',
            marginLeft: 'auto',
            gap: '8px',
          }}
        >
          <IdText>
            {item.id}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '4px',
              }}
            >
              <TimeStyle>{item.time}</TimeStyle>
              <SpeechBubble2 style={{ whiteSpace: 'pre-line' }}>
                {item.value}
              </SpeechBubble2>
            </div>
          </IdText>
          <ProfileImg src={Me} />
        </span>
      ))}
    </ChattingContainer>
  );
}

export default Chatting;

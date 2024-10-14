/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import { OtherMessageItem } from './OtherMessageItem.js';
import { MyMessageItem } from './MyMessageItem.js';
import { Message, User } from '../types.ts';

interface MessageListProps {
  users: User[];
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ users, messages }) => {
  const messageWindowRef = useRef<HTMLDivElement>(null); // messageWindowRef가 HTMLDivElement임을 명시

  // 메시지가 업데이트될 때 자동으로 하단으로 스크롤
  useEffect(() => {
    messageWindowRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // messages가 업데이트될 때마다 실행
  // 각각의 메세지를 포함한 메세지 리스트
  return (
    <>
      <div css={messageListWrapper}>
        {messages.map((message) => {
          const user = users.find((user) => user.userId === message.userId)!; // '!'를 추가해줌으로서 user는 반드시 존재한다.
          if (message.userId === '9_atns') {
            return (
              <MyMessageItem key={message.id} message={message} user={user} />
            );
          } else {
            return (
              <OtherMessageItem
                key={message.id}
                message={message}
                user={user}
              />
            );
          }
        })}
      </div>
      <div ref={messageWindowRef}></div>
    </>
  );
};

export default MessageList;

// emotion
const messageListWrapper = css`
  width: 100%;
  padding: 0 20px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

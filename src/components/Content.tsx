/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import userData from '../db/user.json';
import { useEffect, useRef } from 'react';

// 메시지 타입
interface messageType {
  id: number;
  userId: number;
  text: string;
  time: string;
}

// messages의 타입을 App.tsx의 messageType[]과 동일하게 맞춤
interface contentType {
  messages: messageType[];
}

// user 타입
interface userType {
  userId: number;
  userName: string;
  profile: string;
}

function Content({ messages }: contentType) {
  const getUserInfo = (userId: number) => {
    return userData.user.find((user) => user.userId === userId);
  };

  const contentRef = useRef<HTMLDivElement>(null); //  HTMLDivElement : <div> 요소를 조작할 때 사용할 수 있는 추가 속성을 제공

  // 메시지가 업데이트될 때 자동으로 하단으로 스크롤
  useEffect(() => {
    if (contentRef && contentRef.current)
      contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // messages가 업데이트될 때마다 실행

  return (
    <div css={contentStyle}>
      {messages.map((msg) => {
        const user = getUserInfo(msg.userId); // 메시지 작성자
        const isUser = msg.userId === 0; // 사용자 유저아이디 : 0

        return (
          <div key={msg.id} css={isUser ? minjiMsgBoxStyle : meMsgBoxStyle}>
            {/* 'user'은(는) 'undefined'일 수 있습니다. => 유저 정보가 있을 경우에만 표시 */}
            {user && <img src={user.profile} css={imgStyle} />}
            <div css={bubbleAndTimeStyle(isUser)}>
              <div>
                {/* 유저 정보가 있을 경우에만 이름 표시 */}
                {user && <div css={userNameStyle(isUser)}>{user.userName}</div>}
                <div css={bubbleStyle(isUser)}>{msg.text}</div>
              </div>
              <span css={timeStyle}>{msg.time}</span>
            </div>
            <div ref={contentRef}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;

// emotion/css

const contentStyle = css`
  width: 100%;
  max-width: 430px;
  /* padding-top, padding-bottom: 80px */
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
`;

const imgStyle = css`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 30px;
`;

const minjiMsgBoxStyle = css`
  display: flex;
  align-items: flex-end;
  margin: 20px 0;
  padding: 0px 20px;
  gap: 12px;
`;

const meMsgBoxStyle = css`
  display: flex;
  margin: 20px 0;
  padding: 0 20px;
  gap: 12px;
  align-items: flex-end;
  flex-direction: row-reverse;
`;

const bubbleStyle = (isUser: boolean) => css`
  background: linear-gradient(#ffffff, #68f33b);
  padding: 10px 15px 10px 15px;
  border-radius: ${isUser ? '0px 20px 20px 20px' : '20px 0px 20px 20px'};
  border: 1px solid;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  margin-top: 5px;
  max-width: 240px;
`;

const userNameStyle = (isUser: boolean) => css`
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  text-align: ${isUser ? 'left' : 'right'};
`;

const timeStyle = css`
  font-weight: 300;
  font-style: normal;
  font-size: 10px;
  color: gray;
`;

const bubbleAndTimeStyle = (isUser: boolean) => css`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  flex-direction: ${isUser ? 'row' : 'row-reverse'};
`;

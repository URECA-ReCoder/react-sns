/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import userData from '../db/user.json';
import { useEffect, useRef } from 'react';

function Content({ messages }) {
  const getUserInfo = (userId) => {
    return userData.user.find((user) => user.userId === userId);
  };

  const contentRef = useRef(null);

  // 메시지가 업데이트될 때 자동으로 하단으로 스크롤
  useEffect(() => {
    contentRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]); // messages가 업데이트될 때마다 실행

  return (
    <div css={contentStyle}>
      {messages.map((msg) => {
        const user = getUserInfo(msg.userId); // 메시지 작성자
        const isUser = msg.userId === 0; // 사용자 유저아이디 : 0

        return (
          <div key={msg.id} css={isUser ? minjiMsgBoxStyle : meMsgBoxStyle}>
            <img src={user.profile} css={imgStyle} />
            <div css={bubbleAndTimeStyle(isUser)}>
              <div>
                <div css={userNameStyle(isUser)}>{user.userName}</div>
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
  padding-top: 80px;
  padding-bottom: 80px;
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

const bubbleStyle = (isUser) => css`
  background: linear-gradient(#ffffff, #68f33b);
  padding: 10px 15px 10px 15px;
  border-radius: ${isUser ? '0px 20px 20px 20px' : '20px 0px 20px 20px'};
  border: 1px solid;
  font-family: 'Pretendard-Regular';
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  margin-top: 5px;
  max-width: 240px;
`;

const userNameStyle = (isUser) => css`
  font-family: 'Pretendard-Medium';
  font-weight: 500;
  font-style: normal;
  font-size: 14px;
  text-align: ${isUser ? 'left' : 'right'};
`;

const timeStyle = css`
  font-family: 'Pretendard-Light';
  font-weight: 300;
  font-style: normal;
  font-size: 10px;
  color: gray;
`;

const bubbleAndTimeStyle = (isUser) => css`
  display: flex;
  align-items: flex-end;
  gap: 2px;
  flex-direction: ${isUser ? 'row' : 'row-reverse'};
`;

Content.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    })
  ).isRequired,
};

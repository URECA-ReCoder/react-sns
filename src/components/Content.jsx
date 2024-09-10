/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import userData from '../db/user.json';
import messageData from '../db/data.json';

function Content() {
  const getUserInfo = (userId) => {
    return userData.user.find((user) => user.userId === userId);
  };

  return (
    <div css={contentStyle}>
      {messageData.message.map((msg) => {
        const user = getUserInfo(msg.userId); // 메시지 작성자
        const isUser = msg.userId === 0; // 사용자 유저아이디 : 0

        return (
          <div key={msg.id} css={isUser ? minjiMsgBoxStyle : meMsgBoxStyle}>
            <img src={user.profile} css={imgStyle} />
            <div css={bubbleAndTimeStyle(isUser)}>
              <div>
                <div css={userNameStyle}>{user.userName}</div>
                <div css={bubbleStyle(isUser)}>{msg.text}</div>
              </div>
              <span css={timeStyle}>{msg.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Content;

// emotion/css

const contentStyle = css`
  padding-top: 80px;
  padding-bottom: 80px;
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
  margin: 20px;
  gap: 12px;
  align-items: flex-end;
`;

const meMsgBoxStyle = css`
  display: flex;
  margin: 20px;
  gap: 12px;
  align-items: flex-end;
  text-align: right;
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
`;

const userNameStyle = css`
  font-family: 'Pretendard-Medium';
  font-weight: 500;
  font-style: normal;
  font-size: 15px;
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

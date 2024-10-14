/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Message, User } from '../types';
interface MyMessageItemProps {
  user: User;
  message: Message;
}
export const MyMessageItem: React.FC<MyMessageItemProps> = ({
  message,
  user,
}) => {
  return (
    <div>
      <div css={MyMessageItemWrapper}>
        <div css={MyMessageInfo}>
          <span css={userId}>{user.userId}</span>
          <div css={MyMessageTextItem}>
            <span css={userTime}>{message.time}</span>
            <div css={MyMessageText}>{message.text}</div>
          </div>
        </div>
        <img src={user.userImage} alt={user.userName} css={profileImage} />
      </div>
    </div>
  );
};

// emotion
const MyMessageItemWrapper = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 8px;
`;
const profileImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const MyMessageInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;
const userId = css`
  font-size: 14px;
  color: #979797;
`;

const MyMessageTextItem = css`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const MyMessageText = css`
  width: fit-content;
  max-width: 240px;
  padding: 12px;
  background: #e9e9e9;
  font-size: 18px;
  border-radius: 20px 5px 20px 20px;
`;
const userTime = css`
  font-size: 10px;
  color: #b6b6b6;
`;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Message, User } from '../types';

interface OtherMessageItemProps {
  user: User;
  message: Message;
}

export const OtherMessageItem: React.FC<OtherMessageItemProps> = ({
  message,
  user,
}) => {
  return (
    <div css={otherMessageItemWrapper}>
      <img src={user.userImage} alt={user.userImage} css={profileImage} />
      <div css={otherMessageInfo}>
        <span css={userId}>{user.userId}</span>
        <div css={otherMessageTextItem}>
          <div css={otherMessageText}>{message.text}</div>
          <span css={userTime}>{message.time}</span>
        </div>
      </div>
    </div>
  );
};

// emotion
const otherMessageItemWrapper = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;
const profileImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const otherMessageInfo = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const userId = css`
  font-size: 14px;
  color: #979797;
  justify-content: flex-start;
`;

const otherMessageTextItem = css`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const otherMessageText = css`
  width: fit-content;
  max-width: 240px;
  padding: 12px;
  background: #e9e9e9;
  font-size: 18px;
  border-radius: 5px 20px 20px;
`;
const userTime = css`
  font-size: 10px;
  color: #b6b6b6;
`;

import { css } from '@emotion/react';

interface ListItemProps {
  roomId: number;
  roomUsers: {
    userId: number;
    userName: string;
    profile: string;
  }[];
  lastMessage: string;
}

export default function ChatRoomListItem({
  roomId,
  roomUsers,
  lastMessage,
}: ListItemProps) {
  //userId == 0(사용자)이 아닌 대화상대 중 가장 첫번째 사용자의 정보를 가져옴
  const participants = roomUsers.filter((user) => user.userId !== 0);
  return (
    <>
      <a href={`/chat/${roomId}`}>
        <div css={listItemWrapper}>
          <img src={participants[0].profile} alt="profile" css={profileImg} />
          <div css={textWrapper}>
            <span css={userNameText}>{participants[0].userName}</span>
            <span css={lastMessageText}>{lastMessage}</span>
          </div>
        </div>
      </a>
    </>
  );
}

const listItemWrapper = css`
  width: 100%;
  padding: 16px 8px;
  display: flex;
  gap: 20px;
`;

const profileImg = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const textWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px 0;
  gap: 4px;
`;

const userNameText = css`
  font-size: 16px;
  font-weight: bold;
`;

const lastMessageText = css`
  font-size: 14px;
  color: var(--main-text-color);
`;

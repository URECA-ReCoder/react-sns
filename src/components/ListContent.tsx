/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import searchIcon from '/assets/searchIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { messageState, userState } from '../recoil/atoms';

export default function ListContent() {
  const nav = useNavigate();

  const onClickButton = (chatId: number) => {
    nav(`/chatroom/${chatId}`);
  };

  const users = useRecoilValue(userState); // Recoil 상태에서 유저 정보 가져오기

  const filteredUsers = users.filter((user) => user.userId !== 0); // '나'를 제외한 유저만 나오도록 필터링

  const messages = useRecoilValue(messageState); // Recoil 상태에서 메시지 가져오기

  return (
    <div css={contentStyle}>
      <div css={searchBoxStyle}>
        <img src={searchIcon} css={iconStyle} />
        <input css={inputStyle} />
      </div>
      {/* 메시지 목록 */}
      <div css={messageContainerStyle}>
        {filteredUsers.map((user) => {
          const userMessages = messages[user.userId] || []; // 유저 메시지 배열
          const lastMessage =
            userMessages.length > 0
              ? userMessages[userMessages.length - 1].text
              : '아직 메시지가 없습니다.';

          return (
            <div
              css={messageBoxStyle}
              onClick={() => onClickButton(user.userId)}
            >
              <img src={user.profile} css={profileStyle} />
              <div css={textStyle}>
                <span css={titleStyle}>{user.userName}</span>
                <span css={detailStyle}>{lastMessage}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// emotion/css

const contentStyle = css`
  max-width: 430px;
  height: calc(var(--vh, 1vh) * 100 - 103px);
  padding: 23px 23px 0 23px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
`;

const searchBoxStyle = css`
  background-color: white;
  border: 1px solid;
  border-radius: 20px;
  width: 370px;
  height: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const iconStyle = css`
  width: 14px;
`;

const inputStyle = css`
  border-width: 0;
  outline: none;
  width: 320px;
`;

const messageContainerStyle = css`
  padding: 10px 0;
`;

const messageBoxStyle = css`
  display: flex;
  width: 384px;
  padding: 15px 0;
  gap: 10px;
  border-bottom: 1px solid #e1e1e1;

  &:hover {
    cursor: pointer;
  }
`;

const profileStyle = css`
  width: 52px;
  height: 52px;
  border-radius: 40px;
  object-fit: cover;
  border: 1px solid;
  padding: 5px;

  background-clip: content-box;
`;

const textStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 290px;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: 600;
`;

const detailStyle = css`
  font-size: 14px;
  color: #848484ff;
`;

import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import bellImg from '@/assets/bell.svg';
import bellSlashImg from '@/assets/bell-slash.svg';
import videoImg from '@/assets/video.svg';
import backImg from '@/assets/back.svg';
import { IUser } from '../../../atom';

interface HeaderProps {
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  roomUsers: IUser[];
}

export default function ChatRoomHeader({
  isMuted,
  setIsMuted,
  roomUsers,
}: HeaderProps) {
  const navigate = useNavigate();
  function handleMute() {
    setIsMuted(!isMuted);
  }

  function handleBackClick() {
    navigate('/');
  }
  //우선 참여자가 1명이라고 가정
  const participant = roomUsers.find((user) => user.userId !== 0);

  return (
    <header css={header}>
      <div css={leftWrapper}>
        <img src={backImg} css={headerBtn} onClick={handleBackClick} />
        <div css={profileWrapper}>
          <img src={participant.profile} alt="profile" css={profileImage} />
          <div css={profileContent}>
            <span css={profileName}>{participant.nickName}</span>
            <span css={profileDesc}>{participant.userName}</span>
          </div>
        </div>
      </div>
      <div css={rightWrapper}>
        <span onClick={handleMute}>
          {isMuted ? (
            <img src={bellSlashImg} css={headerBtn} />
          ) : (
            <img src={bellImg} css={headerBtn} />
          )}
        </span>
        <img src={videoImg} css={headerBtn} />
      </div>
    </header>
  );
}

const header = css`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
`;

const leftWrapper = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const profileWrapper = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const profileImage = css`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const profileContent = css`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const profileName = css`
  font-weight: bold;
  font-size: 16px;
`;

const profileDesc = css`
  font-size: 12px;
  color: var(--main-text-color);
`;

const rightWrapper = css`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const headerBtn = css`
  width: 24px;
  height: 24px;
`;

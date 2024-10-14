/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserProfile } from './UserProfile';
import { Settings } from '../UI/Settings';

const Header = ({ userImage, userName, userId }) => {
  // 프로필, 알림 기능 있는 헤더바
  return (
    <div css={headerWrapper}>
      <UserProfile userImage={userImage} userName={userName} userId={userId} />
      <Settings />
    </div>
  );
};

export default Header;

// emotion
const headerWrapper = css`
  position: fixed;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  max-width: 428px;
  width: 100%;
  height: 80px;
  padding: 12px 16px;
  border-bottom: 1px solid #dbdbdb;
`;

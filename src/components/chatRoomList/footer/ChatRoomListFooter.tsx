import { css } from '@emotion/react';
import homeIcon from '@/assets/home.svg';
import searchIcon from '@/assets/search.svg';
import plusIcon from '@/assets/plus.svg';
import filmIcon from '@/assets/film.svg';
import carat from '@/assets/carat.png';

export default function ChatRoomListFooter() {
  return (
    <div css={footerWrapper}>
      <div css={footerButtonWrapper}>
        <img css={footerButton} src={homeIcon} alt="home" />
      </div>
      <div css={footerButtonWrapper}>
        <img css={footerButton} src={searchIcon} alt="search" />
      </div>
      <div css={footerButtonWrapper}>
        <img css={footerButton} src={plusIcon} alt="plus" />
      </div>
      <div css={footerButtonWrapper}>
        <img css={footerButton} src={filmIcon} alt="film" />
      </div>
      <div css={profileWrapper}>
          <img src={carat} alt="profile" css={profileImage} />
        </div>
    </div>
  );
}

const footerWrapper = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #f6f6f6;
  background: #fff;
`;

const footerButtonWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const footerButton = css`
  width: 28px;
  height: 28px;
`;

const profileWrapper = css`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const profileImage = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
`;
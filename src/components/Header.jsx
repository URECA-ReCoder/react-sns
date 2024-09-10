/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from '../assets/left.svg';
import Bell from '../assets/bell-ring.svg';
import Camcoder from '../assets/video-camera.svg';
import Profile from '../assets/minji.jpg';

function Header() {
  return (
    <div css={headerStyle}>
      <div css={leftIconStyle}>
        <img src={Arrow} css={iconStyle} />
        <div css={imgTextLayout}>
          <img src={Profile} css={imgStyle} />
          <div css={textStyle}>
            <span css={nameStyle}>민지</span>
            <span css={idStyle}>minji</span>
          </div>
        </div>
      </div>
      <div css={rightIconStyle}>
        <img src={Bell} css={iconStyle} />
        <img src={Camcoder} css={iconStyle} />
      </div>
    </div>
  );
}

export default Header;

// emotion/css

const headerStyle = css`
  width: 100%;
  max-width: 430px;
  background-color: #f9ff3c;
  /* border-bottom: 1px solid #1d1d1d; */
  display: flex;
  justify-content: space-between;
  padding: 24px 28px 24px 28px;
  position: fixed;
  box-sizing: border-box;
`;

const iconStyle = css`
  width: 36px;
  height: 36px;
`;

const leftIconStyle = css`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const rightIconStyle = css`
  display: flex;
  gap: 18px;
  align-items: center;
`;

const imgStyle = css`
  width: 42px;
  height: 42px;
  object-fit: cover;
  border-radius: 30px;
`;

const imgTextLayout = css`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const textStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const nameStyle = css`
  font-family: 'Pretendard-SemiBold';
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
`;

const idStyle = css`
  font-family: 'Pretendard-Light';
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  color: gray;
`;

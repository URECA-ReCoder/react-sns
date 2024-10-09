/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from '/assets/left.svg';
import Bell from '/assets/bell-ring.svg';
import Camcoder from '/assets/video-camera.svg';
import Profile from '/assets/minji.jpg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate();

  const onClickButton = (link) => {
    nav(link);
  };

  return (
    <div css={headerStyle}>
      <div css={leftIconStyle}>
        <img
          src={Arrow}
          css={iconStyle}
          onClick={() => onClickButton('/list')}
        />
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
  position: fixed;
  max-width: 430px;
  top: 0;
  width: 100%;
  background-color: #f9ff3c;
  display: flex;
  justify-content: space-between;
  padding: 24px 28px 24px 28px;
  box-sizing: border-box;
`;

const iconStyle = css`
  width: 36px;
  height: 36px;
  &:hover {
    cursor: pointer;
  }
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
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
`;

const idStyle = css`
  font-weight: 200;
  font-style: normal;
  font-size: 14px;
  color: gray;
`;

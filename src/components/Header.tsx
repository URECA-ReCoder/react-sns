/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from '/assets/left.svg';
import Bell from '/assets/bell-ring.svg';
import NoBell from '/assets/bell-no-ring.svg';
import Camcoder from '/assets/video-camera.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { doNotDisturbState, userState } from '../recoil/atoms';

function Header() {
  const nav = useNavigate();
  const { chatId } = useParams<{ chatId: string }>(); // 현재 채팅방 ID
  const users = useRecoilValue(userState);
  // 현재 채팅방에 맞는 사용자 정보 필터링
  const currentUser = users.find(
    (user) => user.userId === parseInt(chatId || '0', 10) // chatId가 undefined일 경우 '0' 사용
  );
  const [isDoNotDisturb, setIsDoNotDisturb] = useRecoilState(doNotDisturbState);

  const onClickButton = (link: string) => {
    nav(link);
  };

  const toggleDoNotDisturb = () => {
    setIsDoNotDisturb((prevState) => !prevState);
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
          {currentUser && (
            <>
              <img src={currentUser.profile} css={imgStyle} />
              <div css={textStyle}>
                <span css={nameStyle}>{currentUser.userName}</span>
                <span css={idStyle}>{currentUser.userEngName}</span>
              </div>
            </>
          )}
        </div>
      </div>
      <div css={rightIconStyle}>
        <img
          src={isDoNotDisturb ? NoBell : Bell}
          css={iconStyle}
          onClick={toggleDoNotDisturb}
        />
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
  align-items: flex-start;
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

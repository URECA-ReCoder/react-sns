/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from '../../assets/icons/arrow.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../recoil/atoms';

export const UserProfile = ({
  userImage,
  userName,
  userId,
}: {
  userImage: string;
  userName: string;
  userId: string;
}) => {
  const navigate = useNavigate();
  const handleGoToChatList = () => {
    navigate('/');
  };

  const users = useRecoilValue(userState);

  return (
    <div css={userProfileItems}>
      <img src={Arrow} css={arrowLeft} onClick={handleGoToChatList} />
      <img src={userImage} css={userProfileImage} />
      <section css={userWrapper}>
        {/* 이름과 아이디 */}
        <span css={userNameStyle}>{userName}</span>
        <span css={userIdStyle}>{userId}</span>
      </section>
    </div>
  );
}; // emotion
const userProfileItems = css`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const userProfileImage = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const userWrapper = css`
  display: flex;
  flex-direction: column;
`;
const userNameStyle = css`
  font-size: 18px;
`;
const userIdStyle = css`
  font-size: 12px;
  color: #979797;
`;
const arrowLeft = css`
  fill: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

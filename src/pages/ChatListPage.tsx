import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../assets/icons/arrow.svg';
import Search from '../assets/icons/search-black.svg';
import Home from '../assets/icons/home.svg';
import Plus from '../assets/icons/plus.svg';
import Video from '../assets/icons/video.svg';
import MyProfile from '/images/myprofile.jpeg';
import { useRecoilValue } from 'recoil';
import { userState, chatState } from '../recoil/atoms';

// 채팅방 목록 페이지
export default function ChatListPage() {
  const users = useRecoilValue(userState);
  const navigate = useNavigate();

  const handleChatClick = (userId) => {
    navigate(`/message/${userId}`);
  };

  return (
    <div css={chatWrapper}>
      <div css={headerWrapper}>
        <header css={header}>
          <button>
            <img src={Arrow} />
          </button>
          <span css={fontSize}>9_atns</span>
        </header>
        <div css={inputWrapper}>
          <img src={Search} css={searchIcon} />
          <input type="text" placeholder="이름 검색" css={inputBox} />
        </div>
      </div>
      <section>
        <ul>
          {users
            .filter((user) => user.userName !== '김윤일') // 사용자 '김윤일'은 채팅 목록에서 제외
            .map((user) => (
              <li
                key={user.userId}
                css={userProfileItems}
                onClick={() => handleChatClick(user.userId)}
              >
                <img
                  src={user.userImage}
                  alt={user.userName}
                  css={userProfileImage}
                />
                <div css={userWrapper}>
                  <span css={userNameStyle}>{user.userName}</span>
                  <span css={userId}>마지막 메세지</span>
                </div>
              </li>
            ))}
        </ul>
      </section>
      <nav css={navWrapper}>
        <div css={navIcons}>
          <img src={Home} />
        </div>
        <div css={navIcons}>
          <img src={Search} />
        </div>
        <div css={navIcons}>
          <img src={Plus} />
        </div>
        <div css={navIcons}>
          <img src={Video} />
        </div>
        <div css={navIcons}>
          <img src={MyProfile} css={navProfileWrapper} />
        </div>
      </nav>
    </div>
  );
}
const userProfileItems = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  gap: 20px;
`;
const userId = css`
  color: #979797;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;
const userNameStyle = css`
  font-size: 18px;
`;
const userWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px 0;
  gap: 4px;
`;
const userProfileImage = css`
  display: flex;
  flex-direction: row;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const navIcons = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const navProfileWrapper = css`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
const navWrapper = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 0 28px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #f6f6f6;
  background: #fff;
`;
const chat = css`
  outline: none;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;
const chatListWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 0 82px;
  overflow: scroll;
`;
const inputBox = css`
  padding: 4px;
  width: 80%;
`;
const searchIcon = css`
  width: 18px;
  height: 18px;
`;
const inputWrapper = css`
  display: flex;
  align-items: center;
  background: #f0f0f0;
  padding: 6px 12px;
  border-radius: 10px;
  gap: 4px;
`;
const fontSize = css`
  font-size: 24px;
  font-weight: bold;
`;
const header = css`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid #dbdbdb;
  gap: 10px;
`;
const headerWrapper = css`
  width: 100%;
  padding: 100px 20px 20px;
`;
// const arrowLeft = css`
//   width: 30px;
//   height: 30px;
//   cursor: pointer;
// `;

const chatWrapper = css`
  max-width: 430px;
  width: 100%; /* 부모 요소의 너비 설정 */
  border: 1px solid #dbdbdb;
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
`;

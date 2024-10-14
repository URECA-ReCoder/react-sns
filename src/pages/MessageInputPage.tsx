/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '../components/Layout/Header';
import MessageWindow from '../components/MessageWindow';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/atoms';
// 채팅창 화면
export default function MessageInputPage() {
  const { userId } = useParams();
  const users = useRecoilValue(userState);
  const currentUser = users.find((user) => user.userId === userId);

  return (
    <div css={wrapper}>
      {currentUser ? (
        <>
          <Header
            userName={currentUser.userName}
            userImage={currentUser.userImage}
            userId={currentUser.userId}
          />
          <MessageWindow userId={userId} />
        </>
      ) : (
        <div>유효한 사용자 ID가 없습니다.</div>
      )}
    </div>
  );
}

// emotion
const wrapper = css`
  max-width: 430px;
  width: 100%; /* 부모 요소의 너비 설정 */
  height: 100vh;
  border: 1px solid #dbdbdb;
`;

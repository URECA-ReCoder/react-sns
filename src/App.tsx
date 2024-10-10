/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './components/Header';
import Content from './components/Content';
import InputBox from './components/InputBox';
import GlobalStyle from './components/GlobalStyle';
import { useSetRecoilState } from 'recoil';
import { messageState } from './recoil/atoms';
import { useParams } from 'react-router-dom';

// 메시지 타입
interface messageType {
  id: number;
  userId: number;
  text: string;
  time: string;
}

function App() {
  const { chatId } = useParams<{ chatId: string }>(); // URL에서 chatId를 가져옴
  const setMessages = useSetRecoilState(messageState);

  function addMessage(text: string): void {
    const newMessage: messageType = {
      id: Date.now(),
      userId: 0, // 항상 0으로 설정(메시지를 추가하면 '내'가 추가하도록 설정)
      text: text,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    }; // '오전 12:00' 포맷으로 출력

    setMessages((prevMessages) => {
      const chatRoomId = parseInt(chatId || '1', 10);
      return {
        ...prevMessages,
        [chatRoomId]: [...(prevMessages[chatRoomId] || []), newMessage],
      };
    }); // 기존 메시지에 새로운 메시지 추가
  }

  return (
    <>
      <GlobalStyle />
      <div css={wrapperStyle}>
        <Header />
        <Content chatId={parseInt(chatId || '0', 10)} />
        <InputBox addMessage={addMessage} />
      </div>
    </>
  );
}

export default App;

// emotion/css

const wrapperStyle = css`
  width: 100%;
  max-width: 430px;
  background: linear-gradient(#f8ff2e, #ffffff 40%);
  border: 1px solid #1d1d1d;
  overflow: hidden;
`;

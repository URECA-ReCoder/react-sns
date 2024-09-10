import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import ChatRoom from './Pages/ChatRoom';

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
          format('woff');
        font-weight: 400;
        font-style: normal;
      }
      * {
        box-sizing: border-box;
        scrollbar-width: none;
        font-family: 'Pretendard-Regular';
      }
      html {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
      body {
        max-width: 430px;
        width: 100%;
        margin: 0;
        height: 100%;
        overflow: hidden;
        :focus {
          outline: none;
        }
      }
      button {
        border: none;
        cursor: pointer;
      }
    `}
  />
);

const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ContainerStyle>
        <ChatRoom />
      </ContainerStyle>
    </>
  );
}

export default App;

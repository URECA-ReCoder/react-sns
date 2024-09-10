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
      }
      body {
        width: 100%;
        max-width: 430px;
        justify-content: center;
        align-items: center;
        scrollbar-width: thin;
        margin: 0;
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
  padding: 10px;
  position: relative;
  display: flex;
  width: 480px;
  height: auto;
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

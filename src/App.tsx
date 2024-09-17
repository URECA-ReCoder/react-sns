// src/App.tsx
import React from 'react';
import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import ChatRoom from './Pages/ChatRoom';

// GlobalStyles 컴포넌트를 정의합니다
const GlobalStyles: React.FC = () => (
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

// ContainerStyle 컴포넌트를 정의합니다
const ContainerStyle = styled.div`
  display: flex;
  width: 100%;
  max-width: 430px;
  height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #c9c9c9;
`;

// App 컴포넌트를 정의합니다
const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <ContainerStyle>
        <ChatRoom />
      </ContainerStyle>
    </>
  );
};

export default App;

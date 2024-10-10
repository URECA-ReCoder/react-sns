import { css, Global } from '@emotion/react';
import 'normalize.css';
import { Route, Routes } from "react-router-dom";
import ChatRoomPage from './pages/ChatRoomPage';
import ChatRoomListPage from './pages/ChatRoomListPage';

const GlobalStyle = (): JSX.Element => <Global styles={globalStyle} />;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ChatRoomListPage />} />
        <Route path="/chat/:roomId" element={<ChatRoomPage />} />
      </Routes>
    </>
  );
}

const globalStyle: any = css`
  :root {
    --border-color: #d9d9d9;
    --other-bubble-color: #92A8D1;
    --my-bubble-color: #f7cac9;
    --main-text-color: #a6a6a6;
    --other-text-color: #fff;
    --my-text-color: #3a3a3a;
    --vh: 9.34px;
  }
  html, body {
    overflow: scroll; /*위아래는 고정!*/
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
    scrollbar-width: none;
    font-family: 'Roboto', sans-serif;
    letter-spacing: -.4px;
  }
  body {
    display: block;
  }
  input, textarea {
    outline: none;
    border: none;
  }
  button {
    border: none;
    cursor: pointer;
  }
  a {
    outline: none;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default App;

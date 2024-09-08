/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from './components/Header';
import Content from './components/content';
import InputBox from './components/InputBox';
import GlobalStyle from './components/GlobalStyle';

const wrapperStyle = css`
  width: 100vw;
  max-width: 430px;
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    rgb(247, 196, 218),
    rgb(239, 239, 239)
  );
`;

function App() {
  return (
    <div className="wrapper" css={wrapperStyle}>
      <GlobalStyle />
      <Header />
      <Content />
      <InputBox />
    </div>
  );
}

export default App;

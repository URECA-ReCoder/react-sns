/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        @font-face {
          font-family: 'Pretendard-Regular';
          src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
            format('woff');
          font-weight: 400;
          font-style: normal;
        }

        * {
          box-sizing: border-box;
          scrollbar-width: none; // 스크롤의 기본 스타일은 지우고 스크롤의 기능만 사용
          overscroll-behavior: none; // 스크롤이 오버되는 것을 막아준다.
        }
        html,
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: white;
          min-height: 100%;
          font-family: 'Pretendard-Regular';
          max-width: 430px;
        }
        button {
          border: none;
          background: none;
        }
        input,
        textarea {
          outline: none;
          border: none;
          background: none;
        }
        ul,
        li {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      `}
    />
  );
};

export default GlobalStyles;

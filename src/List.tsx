/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GlobalStyle from './components/GlobalStyle';
import ListHeader from './components/ListHeader';
import ListContent from './components/ListContent';

export default function List() {
  return (
    <>
      <GlobalStyle />
      <div css={wrapperStyle}>
        <ListHeader />
        <ListContent />
      </div>
    </>
  );
}

const wrapperStyle = css`
  width: 100%;
  max-width: 430px;
  height: 100%;
  background: linear-gradient(#f8ff2e, #ffffff 40%);
  border: 1px solid #1d1d1d;
`;

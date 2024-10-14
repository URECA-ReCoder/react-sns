/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div css={appStyle}>
      <Outlet />
    </div>
  );
}

const appStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

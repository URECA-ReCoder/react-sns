import { css } from '@emotion/react';

export const pageWrapper = css`
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 430px;
  border: 1px solid var(--border-color);
  height: 100vh;
`;
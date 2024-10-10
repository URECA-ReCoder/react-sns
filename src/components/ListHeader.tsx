/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Arrow from '/assets/left.svg';

export default function ListHeader() {
  return (
    <div css={headerStyle}>
      <img src={Arrow} css={iconStyle} />
      <div css={MsgBox}>
        <div css={Msg}>메시지</div>
      </div>
    </div>
  );
}

// emotion/css

const headerStyle = css`
  position: fixed;
  max-width: 430px;
  top: 0;
  width: 100%;
  background-color: #f9ff3c;
  display: flex;
  padding: 24px 28px 24px 28px;
  box-sizing: border-box;
`;

const iconStyle = css`
  width: 36px;
  height: 36px;
  position: absolute;
`;

const MsgBox = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  justify-content: center;
`;

const Msg = css`
  font-size: 20px;
  font-weight: 500;
`;

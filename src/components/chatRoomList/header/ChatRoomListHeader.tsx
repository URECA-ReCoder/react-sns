import { css } from '@emotion/react';
import backIcon from '@/assets/back.svg';

export default function ChatRoomListHeader() {
  return (
    <header css={header}>
      <div css={leftWrapper}>
        <img src={backIcon} css={headerBtn} />
        <span css={headerTitle}>{"Carat"}</span>
      </div>
    </header>
  );
}

const header = css`
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #fff;
`;

const headerTitle = css`
  font-size: 24px;
  font-weight: bold;
`;

const leftWrapper = css`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const headerBtn = css`
  width: 24px;
  height: 24px;
`;

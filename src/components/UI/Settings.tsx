/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Bell from '../../assets/icons/notification-bell.png';
import Video from '../../assets/icons/video-button.png';
export const Settings = () => {
  // 방해금지모드
  return (
    <div css={settingButtonWrapper}>
      <button>
        <img src={Bell} css={settingButton} />
      </button>
      <button>
        <img src={Video} css={videoButton} />
      </button>
    </div>
  );
};

// emotion
const settingButtonWrapper = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const settingButton = css`
  fill: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
const videoButton = css`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

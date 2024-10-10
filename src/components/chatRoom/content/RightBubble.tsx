import { css } from '@emotion/react';
import ContentProfile from './ContentProfile';

interface RightBubbleProps {
  content: string;
  name: string;
  profile: string;
  time: string;
}

export default function RightBubble({
  content,
  name,
  profile,
  time,
}: RightBubbleProps) {
  return (
    <div style={{ width: '100%' }}>
      <div css={rightBubbleContainer}>
        <div css={rightContentContainer}>
          <span css={rightName}>{name}</span>
          <div css={rightMessageContainer}>
            <span style={{ fontWeight: '300' }}>{time}</span>
            <div css={rightMessage}>{content}</div>
          </div>
        </div>
        <ContentProfile src={profile} />
      </div>
    </div>
  );
}

const rightBubbleContainer = css`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 8px;
`;

const rightContentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--main-text-color);
  font-size: 12px;
  font-weight: 500;
  justify-content: end;
`;

const rightMessageContainer = css`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const rightMessage = css`
  max-width: 200px;
  width: fit-content;
  padding: 12px;
  color: var(--my-text-color);
  background-color: var(--my-bubble-color);
  border-radius: 16px 4px 16px 16px;
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

const rightName = css`
  font-size: 16px;
  display: block;
  text-align: right;
`;

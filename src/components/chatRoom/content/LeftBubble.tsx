import { css } from '@emotion/react';
import ContentProfile from './ContentProfile';

interface LeftBubbleProps {
  content: string;
  name: string;
  profile: string;
  time: string;
}

export default function LeftBubble({
  content,
  name,
  profile,
  time,
}: LeftBubbleProps) {
  return (
    <div style={{ width: '100%' }}>
      <div css={leftBubbleContainer}>
        <ContentProfile src={profile} />
        <div css={leftContentContainer}>
          <span style={{ fontSize: '16px' }}>{name}</span>
          <div css={leftMessageContainer}>
            <div css={leftMessage}>{content}</div>
            <span style={{ fontWeight: '300' }}>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const leftBubbleContainer = css`
  width: 100%;
  display: flex;
  gap: 8px;
`;

const leftContentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--main-text-color);
  font-size: 12px;
  font-weight: 500;
`;

const leftMessageContainer = css`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const leftMessage = css`
  max-width: 200px;
  width: fit-content;
  padding: 12px;
  color: var(--other-text-color);
  background-color: var(--other-bubble-color);
  border-radius: 4px 16px 16px;
  font-size: 16px;
  font-weight: 400;
  white-space: pre-wrap;
`;

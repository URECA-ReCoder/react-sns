import { css } from '@emotion/react';

interface ContentProfileProps {
  src: string;
}

export default function ContentProfile({ src }: ContentProfileProps) {
  return <img src={src} alt="profile" css={profileImg} />;
}

const profileImg = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  object-fit: cover;
`;

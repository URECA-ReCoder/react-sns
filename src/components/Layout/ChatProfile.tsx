/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import Profile from '/images/mark.jpeg';

export const ChatProfile = () => {
  return (
    <div css={userProfileItems}>
      <img src={Profile} css={userProfileImage} />
      <section css={userWrapper}>
        {/* 이름과 아이디 */}
        <span css={userName}>이민형</span>
        <span css={userId}>마지막 메세지</span>
      </section>
    </div>
  );
};

// emotion
const userProfileItems = css`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 20px;
  gap: 20px;
`;
const userProfileImage = css`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #dbdbdb;
`;
const userWrapper = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 4px 0;
  gap: 4px;
`;
const userName = css`
  font-size: 18px;
`;
const userId = css`
  color: #979797;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;
const arrowLeft = css`
  fill: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Wrapper = css`
  width: 100%;
  padding: 16px 20px;
  display: flex;
  gap: 20px;
`;

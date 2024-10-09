/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import searchIcon from '/assets/searchIcon.svg';
import minji from '/assets/minji.jpg';
import { useNavigate } from 'react-router-dom';

export default function ListContent() {
  const nav = useNavigate();

  const onClickButton = (link) => {
    nav(link);
  };

  return (
    <div css={contentStyle}>
      <div css={searchBoxStyle}>
        <img src={searchIcon} css={iconStyle} />
        <input css={inputStyle} />
      </div>
      <div css={messageContainerStyle}>
        <div css={messageBoxStyle} onClick={() => onClickButton('/chatroom')}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
        <div css={messageBoxStyle}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
        <div css={messageBoxStyle}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
        <div css={messageBoxStyle}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
        <div css={messageBoxStyle}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
        <div css={messageBoxStyle}>
          <img src={minji} css={profileStyle} />
          <div css={textStyle}>
            <span css={titleStyle}>민지</span>
            <span css={detailStyle}>마지막 메시지</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// emotion/css

const contentStyle = css`
  width: 100%;
  max-width: 430px;
  padding: 104px 23px 0 23px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
`;

const searchBoxStyle = css`
  background-color: white;
  border: 1px solid;
  border-radius: 20px;
  width: 370px;
  height: 20px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const iconStyle = css`
  width: 14px;
`;

const inputStyle = css`
  border-width: 0;
  outline: none;
  width: 320px;
`;

const messageContainerStyle = css`
  padding: 10px 0;
`;

const messageBoxStyle = css`
  display: flex;
  width: 384px;
  padding: 15px 0;
  gap: 10px;
  border-bottom: 1px solid #e1e1e1;

  &:hover {
    cursor: pointer;
  }
`;

const profileStyle = css`
  width: 52px;
  height: 52px;
  border-radius: 40px;
  object-fit: cover;
  border: 1px solid;
  padding: 5px;

  background-clip: content-box;
`;

const textStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const titleStyle = css`
  font-size: 16px;
  font-weight: 600;
`;

const detailStyle = css`
  font-size: 14px;
  color: #848484ff;
`;

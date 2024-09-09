/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SubmitArrow from '../assets/submit.svg';

const wrapperStyle = css`
  border-top: 1px solid #1d1d1d;
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8ff2e;
  position: absolute;
  bottom: 0;
`;

const inputBoxStyle = css`
  width: 380px;
  height: 40px;
  border: 1px solid;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const formStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const inputStyle = css`
  width: 280px;
  border: 0;
  outline: none;
  font-family: 'Pretendard-Light';
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  color: gray;
`;

const submitBtnStyle = css`
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
`;

function InputBox() {
  return (
    <div css={wrapperStyle}>
      <div css={inputBoxStyle}>
        <form css={formStyle}>
          <input
            type="text"
            placeholder="메시지를 입력해주세요."
            css={inputStyle}
          />
          <img src={SubmitArrow} css={submitBtnStyle} />
        </form>
      </div>
    </div>
  );
}

export default InputBox;

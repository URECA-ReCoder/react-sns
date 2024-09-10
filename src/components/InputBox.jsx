/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SubmitArrow from '../assets/submit.svg';
import { useRef, useState } from 'react';

function InputBox() {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  function handleInputChange(e) {
    setText(e.target.value);
    // e.target에 있는 <input.../>으로부터 value 값을 가져옴
  }

  function onClickButton(){
     // 공백 입력 방지
     if (text.trim() === '') return;

    setText('');
    inputRef.current.focus(); // 버튼 누른 후에도 input box에 자동 포커싱
  }

  return (
    <div css={wrapperStyle}>
      <div css={inputBoxStyle}>
        <form css={formStyle}>
          <input
            type="text"
            placeholder="메시지를 입력해주세요."
            css={inputStyle}
            onChange={handleInputChange}
            autoFocus
          />
          <img src={SubmitArrow} css={submitBtnStyle} onClick={onClickButton}/>
        </form>
      </div>
    </div>
  );
}

export default InputBox;

// emotion/css

const wrapperStyle = css`
  border-top: 1px solid #1d1d1d;
  width: 100%;
  max-width: 430px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8ff2e;
  /* position: absolute; */
  bottom: 0;
  position: fixed;
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

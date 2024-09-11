/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types';
import SubmitArrow from '../../public/assets/submit.svg';
import { useRef, useState } from 'react';

function InputBox({ addMessage }) {
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  // form 제출 시 새로고침 방지
  const handleFormClick = (e) => {
    e.preventDefault();
  };

  // 입력값이 변경될 때 상태 업데이트
  function handleInputChange(e) {
    setText(e.target.value);
  }

  function onClickButton() {
    // 공백 입력 방지
    if (text.trim() === '') return;

    addMessage(text);

    setText('');
    inputRef.current.focus(); // 버튼 누른 후에도 input box에 자동 포커싱
  }

  function onCheckEnter(e) {
    if (e.key === 'Enter' && e.nativeEvent.isComposing == false) {
      e.preventDefault();
      addMessage(text);

      setText('');
      inputRef.current.focus(); // 버튼 누른 후에도 input box에 자동 포커싱
    }
  }

  return (
    <div css={wrapperStyle}>
      <div css={inputBoxStyle}>
        <form
          onSubmit={handleFormClick}
          onKeyDown={onCheckEnter}
          css={formStyle}
        >
          <input
            type="text"
            value={text}
            placeholder="메시지를 입력해주세요."
            css={inputStyle}
            onChange={handleInputChange}
            autoFocus
          />
          <img src={SubmitArrow} css={submitBtnStyle} onClick={onClickButton} />
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

InputBox.propTypes = {
  addMessage: PropTypes.func.isRequired,
};

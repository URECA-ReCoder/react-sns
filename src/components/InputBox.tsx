/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SubmitArrow from '/assets/submit.svg';
import { useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { doNotDisturbState } from '../recoil/atoms';
import { useParams } from 'react-router-dom';

interface inputBoxType {
  addMessage: (text: string) => void;
}

function InputBox({ addMessage }: inputBoxType) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isDoNotDisturb = useRecoilValue(doNotDisturbState);

  // 각 이벤트 핸들러에 맞는 event 지정(Form, Change, Keyboard ...)
  // form 제출 시 새로고침 방지
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addMessage(text);
    setText('');
  };

  // 입력값이 변경될 때 상태 업데이트
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function onClickButton() {
    // 공백 입력 방지
    if (text.trim() === '') return;

    addMessage(text);

    setText('');

    if (inputRef && inputRef.current) inputRef.current.focus(); // 버튼 누른 후에도 input box에 자동 포커싱
  }

  return (
    <div css={wrapperStyle}>
      <div css={inputBoxStyle}>
        <form onSubmit={handleFormSubmit} css={formStyle}>
          <input
            type="text"
            value={text}
            placeholder={
              isDoNotDisturb
                ? '메시지를 전송할 수 없습니다.'
                : '메시지를 입력해주세요.'
            }
            css={inputStyle}
            onChange={handleInputChange}
            disabled={isDoNotDisturb}
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
  font-weight: 200;
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

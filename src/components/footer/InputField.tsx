import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import { Message } from '../../sns';

type InputFieldProps = {
  isMuted: boolean;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

export default function InputField({ isMuted, messages, setMessages }: InputFieldProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === '') {
      alert('한 글자 이상 입력해주세요.');
      return;
    }
    handleAddMessage(input);
    setInput('');
    inputRef.current.focus();
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  function handleAddMessage(input: string) {
    let nowTime;
    try {
      nowTime = new Intl.DateTimeFormat('ko', { timeStyle: 'short' }).format(
        new Date()
      );
    } catch (error) {
      console.error('DateTime formatting failed:', error);
    }

    const newMessage = {
      id: messages.length + 1,
      status: 1,
      content: input,
      time: nowTime,
    };
    setMessages((prev) => [...prev, newMessage]);
  }

  return (
    <footer css={footerWrapper}>
      <form css={footerForm} onSubmit={handleForm}>
        <button css={searchBtn}>
          <img src="/assets/search.svg" css={btnImg} />
        </button>
        <textarea
          disabled={isMuted}
          spellCheck="false"
          id="message"
          placeholder={
            isMuted? "메시지 전송이 불가합니다": "메세지를 보내세요"
          }
          css={messageInput}
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
        <button css={sendBtn} type="submit">
          <img src="/assets/send.svg" css={btnImg} />
        </button>
      </form>
    </footer>
  );
}

const footerWrapper = css`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 8px 32px;
`;

const footerForm = css`
  width: 100%;
  border-radius: 24px;
  padding: 6px;
  background: #e3e3e35f;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const searchBtn = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--other-bubble-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const btnImg = css`
  width: 20px;
  height: 20px;
`;

const messageInput = css`
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 16px;
  background: none;
  resize: none;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const sendBtn = css`
  width: 52px;
  height: 36px;
  border-radius: 24px;
  background: var(--my-bubble-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;

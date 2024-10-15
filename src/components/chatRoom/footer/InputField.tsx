import { css } from '@emotion/react';
import { useState, useRef } from 'react';
import { IMessage } from '../../../atom';
import searchImg from '@/assets/search.svg';
import sendImg from '@/assets/send.svg';
import { useRecoilState } from 'recoil';
import { IRoom, messageState } from '../../../atom';
import { useParams } from 'react-router-dom';

interface InputFieldProps {
  isMuted: boolean;
  // setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
}

export default function InputField({
  isMuted,
}: InputFieldProps) {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useRecoilState<IRoom[]>(messageState);
  const inputRef = useRef(null);
  const { roomId } = useParams<{ roomId: string }>();

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
      userId: 0,
      content: input,
      time: nowTime,
    };

    setMessages((prev) => 
      prev.map((room) => {
        if (room.roomId === Number(roomId)) {
          return { ...room, messages: [ ...room.messages, newMessage] };
        }
        return room;
      })
    );
  }

  return (
    <footer css={footerWrapper}>
      <form css={footerForm} onSubmit={handleForm}>
        <span css={searchWrapper}>
          <img src={searchImg} css={btnImg} />
        </span>
        <textarea
          disabled={isMuted}
          spellCheck="false"
          id="message"
          placeholder={
            isMuted ? '메시지 전송이 불가합니다' : '메세지를 보내세요'
          }
          css={messageInput}
          onChange={handleInput}
          value={input}
          ref={inputRef}
        />
        <button css={sendBtn(isMuted)} type="submit" >
          <img src={sendImg} css={btnImg} />
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
  display: flex;
  align-items: center;
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

const searchWrapper = css`
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

const sendBtn = (isMuted: boolean) => css`
  width: 52px;
  height: 36px;
  border-radius: 24px;
  background: var(--my-bubble-color);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${isMuted ? 0.5 : 1};
  pointer-events: ${isMuted ? 'none' : 'auto'};
`;

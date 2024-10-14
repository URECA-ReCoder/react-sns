/** @jsxImportSource @emotion/react */
import { useState, useRef, FormEvent } from 'react';
import { css } from '@emotion/react';
import Search from '../assets/icons/search.png';
import Send from '../assets/icons/send.png';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // ref의 타입을 HTMLTextAreaElement 또는 null로 명시

  // form 제출 시 새로고침 방지
  const handleFormClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Enter로 줄바꿈 방지, 메세지 전송
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    //공백 입력 방지
    if (newMessage.trim() === '') return;

    onSendMessage(newMessage); // 부모 컴포넌트로 새로운 메세지 전송
    setNewMessage(''); // 입력 필드 초기화

    // ref는 항상 존재여부를 검사하고 사용해야 한다. (단축평가)
    textareaRef.current && textareaRef.current.focus();
  };

  const onCheckEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing == false) {
      e.preventDefault(); // Enter로 줄바꿈 방지, 메세지 전송
      handleSendMessage();

      setNewMessage('');
      textareaRef.current && textareaRef.current.focus(); // 메세지 전송 후 textarea에 포커스
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormClick}
        onKeyDown={onCheckEnter}
        css={messageInputForm}
      >
        <button css={searchButton}>
          <img src={Search} css={imageSize} />
        </button>
        <textarea
          value={newMessage}
          onChange={handleTextareaChange}
          css={messageInputText}
          placeholder="메세지 보내기..."
          autoFocus
        ></textarea>
        <button type="submit" css={submitButton} onClick={handleSendMessage}>
          <img src={Send} css={imageSize} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;

// emotion
const imageSize = css`
  width: 36px;
  height: 36px;
`;
const searchButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const submitButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const messageInputText = css`
  resize: none; // textarea 기본 스타일 삭제
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 16px;
  overflow: auto;
  background: none;
  font-size: 18px;
  letter-spacing: -0.4px;
  cursor: text;
`;
const messageInputForm = css`
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 6px;
  backdrop-filter: blur(8px);
  background: #e3e3e35f;
  border-radius: 24px;
  gap: 8px;
`;

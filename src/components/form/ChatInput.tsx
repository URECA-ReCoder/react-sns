import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isMuted: boolean; // 뮤트 상태를 나타내는 prop 추가
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isMuted }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() && !isMuted) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <InputContainer>
      <FormStyled onSubmit={(e) => e.preventDefault()}>
        <SearchButton disabled={isMuted}>
          <Icon src='/images/loupe.png' />
        </SearchButton>
        <InputStyled
          ref={inputRef}
          value={isMuted ? '메시지 전송이 불가능합니다' : message}
          onChange={handleInputChange}
          placeholder="메시지 보내기..."
          disabled={isMuted} // 뮤트 상태일 때 입력 비활성화
          style={isMuted ? { color: '#888' } : {}} // 뮤트 상태일 때 텍스트 색상 변경
        />
        <SendIconWrapper onClick={handleSendClick} disabled={isMuted}>
          <Icon src='/images/send.png' style={{ width: '20px', height: '20px' }} />
        </SendIconWrapper>
      </FormStyled>
    </InputContainer>
  );
};

// 스타일 정의
const InputContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  padding: 12px 8px 32px;
`;

const FormStyled = styled.form`
  width: 100%;
  border-radius: 24px;
  padding: 6px;
  background: #e3e3e35f;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const InputStyled = styled.textarea`
  flex: 1;
  height: 36px;
  padding: 8px 16px;
  resize: none;
  border: none;
  background: none; /* 배경색 제거 */
  color: #242424;
  font-weight: 400;
  letter-spacing: -0.4px;
  cursor: text;
  font-size: 16px;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: transparent; /* 배경색을 투명하게 설정 */
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  justify-content: center;
`;

const SearchButton = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SendIconWrapper = styled.button`
  width: 52px;
  height: 36px;
  border-radius: 24px;
  background-color: #6245ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`;

export default ChatInput;

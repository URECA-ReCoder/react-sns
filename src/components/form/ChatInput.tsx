// components/form/ChatInput.tsx
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';


interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  return (
    <InputContainer>
      <FormStyled onSubmit={(e) => e.preventDefault()}>
        <SearchButton>
          <Icon src="/images/search.png" />
        </SearchButton>
        <InputStyled
          ref={inputRef}
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="메시지 보내기..."
        />
        <SendIconWrapper onClick={handleSendClick}>
          <Icon src="/images/send.png" style={{ width: '20px', height: '20px' }} />
        </SendIconWrapper>
      </FormStyled>
    </InputContainer>
  );
};

// 스타일 정의 (유지)
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
  background: none;
  color: #242424;
  font-weight: 400;
  letter-spacing: -0.4px;
  cursor: text;
  font-size: 16px;
  border-radius: 20px;
  &:focus {
    outline: none;
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

const SendIconWrapper = styled.div`
  width: 52px;
  height: 36px;
  border-radius: 24px;
  background-color: #6245ff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default ChatInput;

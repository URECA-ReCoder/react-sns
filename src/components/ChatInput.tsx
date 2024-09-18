import { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // 컴포넌트가 렌더링될 때 입력 필드에 포커스
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // 메시지 전송 핸들러
  const handleSendMessage = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      onSendMessage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  // 엔터 키로 메시지 전송
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <InputContainer>
      <InputField
        ref={inputRef}
        type="text"
        placeholder="메시지 보내기..."
        onKeyPress={handleKeyPress}
      />
      <SendButton onClick={handleSendMessage}>send 📩</SendButton>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

const InputField = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 15px;
  margin-right: 10px;
  font-size: 14px;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #0056b3;
  }
`;

export default ChatInput;

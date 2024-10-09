import styled from 'styled-components';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  // 메시지 전송 핸들러
  const handleSendMessage = (input: HTMLInputElement) => {
    if (input.value.trim()) {
      onSendMessage(input.value);
      input.value = ''; 
    }
  };

  // 엔터 키로 메시지 전송
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, input: HTMLInputElement) => {
    if (e.key === 'Enter') {
      handleSendMessage(input);
    }
  };

  return (
    <InputContainer>
      <InputField
        type="text"
        placeholder="메시지 보내기..."
        onKeyPress={(e) => handleKeyPress(e, e.currentTarget)} 
        autoFocus 
      />
      <SendButton onClick={(e) => handleSendMessage(e.currentTarget.previousElementSibling as HTMLInputElement)}>send 📩</SendButton>
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

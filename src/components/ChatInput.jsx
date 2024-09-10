import  { useRef, useEffect } from 'react';
import styled from 'styled-components';
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


const ChatInput = ({ onSendMessage }) => {
  const inputRef = useRef(null);// 입력 필드를 참조하기 위한 useRef 훅

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSendMessage = () => {
    if (inputRef.current.value.trim()) {
      onSendMessage(inputRef.current.value);// 상위 컴포넌트로 메시지 전송
      inputRef.current.value = '';// 입력 필드를 초기화
    }
  };

  return (
    <InputContainer>
      <InputField ref={inputRef} type="text" placeholder="메시지 보내기..." />
      <SendButton onClick={handleSendMessage}>send 📩</SendButton>
    </InputContainer>
  );
};

export default ChatInput;

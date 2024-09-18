import { useRef, useEffect } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const inputRef = useRef(null); // 입력 필드를 참조하기 위한 useRef 훅

  useEffect(() => {
    inputRef.current.focus(); // 컴포넌트가 마운트되면 입력 필드에 포커스
  }, []);

  // 메시지 전송 핸들러 함수
  const handleSendMessage = () => {
    if (inputRef.current.value.trim()) { 
      onSendMessage(inputRef.current.value); // 상위 컴포넌트로 메시지 전송
      inputRef.current.value = ''; // 메시지 전송 후 입력 필드 초기화
    }
  };

  // Enter 키 입력 시 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(); // Enter 키를 누르면 메시지 전송
    }
  };

  return (
    <InputContainer>
      <InputField
        ref={inputRef}
        type="text"
        placeholder="메시지 보내기..."
        onKeyPress={handleKeyPress} // 키보드 이벤트 리스너 추가
      />
      <SendButton onClick={handleSendMessage}>send 📩</SendButton>
    </InputContainer>
  );
};

export default ChatInput;

// 스타일 코드 최하단으로 분리
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

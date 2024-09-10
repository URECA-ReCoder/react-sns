import React from 'react';
import styled from '@emotion/styled';
import send from '../assets/images/send.png';
import search from '../assets/images/search.png';
const InputContainer = styled.div`
  width: 100%;
  background-color: #e3e3e35f;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  gap: 8px;
  border-radius: 24px;
  padding: 6px;
`;

const InputStyled = styled.input`
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 16px;
  resize: none;
  border: none;
  background: none;
  color: #c2c2c2;
  font-weight: 400;
  letter-spacing: -0.4px;
  cursor: text;
  font-size: 18px;
  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  fill: none;
  stroke-width: 2;
  justify-content: center;
`;

const SearchIconWrapper = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  background-color: white; /* 하얀 원 배경 */
  border-radius: 50%; /* 원형으로 만들기 */
  display: flex;
  justify-content: center;
  align-items: center; /* 아이콘을 중앙에 정렬 */
`;
const SendIconWrapper = styled.div`
  width: 52px;
  height: 36px;
  border-radius: 24px; /* 원형으로 만들기 */
  background-color: #6245ff;
  display: flex;
  justify-content: center;
  align-items: center; /* 아이콘을 중앙에 정렬 */
`;

function Input({ value, onChange, sendChat }) {
  return (
    <InputContainer>
      <SearchIconWrapper>
        <Icon src={search} />
      </SearchIconWrapper>
      <InputStyled
        value={value}
        onChange={onChange}
        placeholder="메시지 보내기..."
      />
      <SendIconWrapper>
        <Icon src={send} onClick={sendChat} />
      </SendIconWrapper>
    </InputContainer>
  );
}

export default Input;

import React from 'react';
import styled from '@emotion/styled';
import send from '/public/images/send.png';
import search from '/public/images/search.png';
const InputContainer = styled.div`
  position: absolute; /* 화면 하단에 고정 */
  z-index: 2;
  bottom: 0;
  left: 50%; /* 가운데 정렬을 위한 시작점 */
  transform: translateX(-50%); /* 가운데 정렬 */
  width: 100%;
  max-width: 430px; /* 부모 요소의 max-width와 동일하게 설정 */
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
  display: flex;
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

const SearchButton = styled.button`
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

function Input({ value, onChange, sendChat, inputRef }) {
  return (
    <InputContainer>
      <FormStyled>
        <SearchButton>
          <Icon src={search} />
        </SearchButton>
        <InputStyled
          ref={inputRef}
          value={value}
          onChange={onChange}
          placeholder="메시지 보내기..."
        />
        <SendIconWrapper onClick={sendChat}>
          <Icon src={send} style={{ width: '20px', height: '20px' }} />
        </SendIconWrapper>
      </FormStyled>
    </InputContainer>
  );
}

export default Input;

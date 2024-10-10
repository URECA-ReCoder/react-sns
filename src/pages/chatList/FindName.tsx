import React, { useState } from 'react';
import styled from 'styled-components';
import { chatAppData } from '@assets/chat';
import userInfo from '@assets/userInfo.json';
import useChatStore from './stores/useFilterChatListStore';
import useFilterChatListStore from './stores/useFilterChatListStore';

function FindName() {
  const { handleFindChange } = useFilterChatListStore();

  return (
    <Wrapper>
      <input
        onChange={handleFindChange}
        type="text"
        placeholder="이름을 입력해주세요"
      />
      <button>검색</button>
    </Wrapper>
  );
}

export default FindName;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

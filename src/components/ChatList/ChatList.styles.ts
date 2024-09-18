import { HEADER_HEIGHT, INPUT_HEIGHT } from '@constants/index';
import styled from 'styled-components';

export const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - ${HEADER_HEIGHT + INPUT_HEIGHT}px);
  box-sizing: border-box;
  margin-top: ${HEADER_HEIGHT}px;
  padding: 10px;
`;

export const DoNotDisturb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  font-size: 20px;
  color: #aaa;
`;

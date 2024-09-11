import styled from 'styled-components';
import { INPUT_HEIGHT } from '@constants';

export const Wrapper = styled.div`
  width: 100%;
  height: ${INPUT_HEIGHT}px;
  background-color: #f1f1f1;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
`;

export const FindIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 20px;
  background-color: yellow;
  border-radius: 50%;
  padding: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  padding-left: 20px;
  font-size: 16px;
`;

export const SendIcon = styled.img`
  width: 18px;
  height: 18px;
  padding: 5px 10px;
  margin-right: 20px;
  background-color: yellow;
  border-radius: 30px;
`;

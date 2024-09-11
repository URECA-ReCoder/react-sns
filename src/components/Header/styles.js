import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const ActionIcon = styled.div`
  cursor: pointer;
  gap: 10px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

export const ChatPartner = styled.div`
  font-size: 16px;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
`;

export const ChatPartnerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TitleNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ChatPartnerName = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const ChatPartnerNickname = styled.div`
  color: #999;
  font-size: 10px;
`;

import styled from 'styled-components';

export const ChatItemWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${(props) =>
    props.id === props.userId ? 'row-reverse' : 'row'};
  margin: 10px 0;
`;

export const MyMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const PartnerMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: white;
`;

export const Chat = styled.div`
  max-width: 80%;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
  justify-content: ${(props) =>
    props.id === props.userId ? 'flex-end' : 'flex-start'};
  border-radius: ${(props) =>
    props.id === props.userId ? '15px 1px 15px 15px' : ' 1px 15px 15px 15px'};
  background-color: ${(props) =>
    props.id === props.userId ? 'blueviolet' : '#f1f1f1'};
  color: ${(props) => (props.id === props.userId ? 'white' : 'black')};
  margin: 0 10px;
`;

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ChatTimeMessageWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const ChatTime = styled.div`
  font-size: 12px;
  color: gray;
  margin-right: 10px;
`;

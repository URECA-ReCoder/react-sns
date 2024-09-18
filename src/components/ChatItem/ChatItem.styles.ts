import styled from 'styled-components';

export const ChatItemWrapper = styled.div<{ myId: number; userId: number }>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) =>
    props.userId === props.myId ? 'row-reverse' : 'row'};
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
  flex-direction: column;
  background-color: white;
`;

export const Chat = styled.div<{ myId: number; userId: number }>`
  max-width: 80%;
  min-height: 40px;
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
  justify-content: ${(props) =>
    props.userId === props.myId ? 'flex-end' : 'flex-start'};
  border-radius: ${(props) =>
    props.userId === props.myId ? '15px 1px 15px 15px' : ' 1px 15px 15px 15px'};
  background-color: ${(props) =>
    props.userId === props.myId ? 'blueviolet' : '#f1f1f1'};
  color: ${(props) => (props.userId === props.myId ? 'white' : 'black')};
  margin: 0 10px;
`;

export const ProfileImage = styled.img<{ src: string }>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const ChatTimeMessageWrapper = styled.div`
  display: flex;
  align-items: end;
`;

export const ChatTime = styled.div`
  font-size: 12px;
  color: gray;
`;

export const Nickname = styled.div`
  font-size: 12px;
  color: gray;
  margin: 5px 10px;
`;

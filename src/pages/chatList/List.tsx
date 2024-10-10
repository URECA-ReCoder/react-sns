import React from 'react';
import { chatAppData } from '@assets/chat';
import styled from 'styled-components';
import userInfo from '@assets/userInfo.json';
import useFilterChatListStore from './stores/useFilterChatListStore';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants';

function List() {
  const { filteredChatRooms } = useFilterChatListStore();
  const navigate = useNavigate();

  const navigateToChatIndividual = (roomId: string) => {
    const chatIndividualRoute = ROUTE.CHATINDIVIDUAL.replace(':id', roomId);
    navigate(chatIndividualRoute);
  };

  return (
    <Container>
      {filteredChatRooms.map((chat, index) => {
        const userInfos = userInfo.find((user) => user.userId === chat.roomId);
        return (
          <Card
            key={index}
            onClick={() => navigateToChatIndividual(chat.roomId)}
          >
            <ProfileImage src={userInfos?.image} alt="profile" />
            <RightSide>
              <Info>
                <Name>{userInfos?.name}</Name>
              </Info>
              {chat.messages[chat.messages.length - 1].message}
            </RightSide>
          </Card>
        );
      })}
    </Container>
  );
}
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  background-color: #ffffff;
  width: 100%;
  max-width: 400px;
  border-bottom: 0.5px solid #e0e0e0;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-size: 1.2em;
  margin: 0;
  font-weight: bold;
`;

const Nickname = styled.p`
  font-size: 0.9em;
  color: #888;
`;

export default List;

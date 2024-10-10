import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'; 
import userData from '../assets/data/UserData.json'; 
import chatData from '../assets/data/chatData.json'; 

const ChatList = () => {
  const navigate = useNavigate();

  const handleChatClick = (userId: number) => {
    navigate(`/chat/${userId}`);
  };

  const filteredUsers = userData.filter(user => user.id !== 0);

  // 마지막 메시지를 찾는 함수
  const getLastMessage = (userId: number) => {
    const userMessages = chatData.filter(message => message.userId === userId);
    if (userMessages.length === 0) return '메시지가 없습니다'; 
    return userMessages[userMessages.length - 1].text; 
  };

  return (
    <Container>
      <Header>
        <BackButton>◀</BackButton>
        <Title>jisu</Title>
      </Header>
      <SearchInput type="text" placeholder="이름 검색" />
      <UserList>
        {filteredUsers.map((user) => (
          <UserItem key={user.id} onClick={() => handleChatClick(user.id)}>
            <UserImage src={user.userImage} alt={user.userName} />
            <UserInfo>
              <UserName>{user.userName}</UserName>
              <UserMessage>{getLastMessage(user.id)}</UserMessage> 
            </UserInfo>
          </UserItem>
        ))}
      </UserList>
      <Footer>
        <FooterIcon src="/images/home.svg" />
        <FooterIcon src="/images/search.svg" />
        <FooterIcon src="/images/plus.svg" />
        <FooterIcon src="/images/video.svg"/>
        <FooterIcon src="/images/su.png"/>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 800px; 
  max-width: 400px; 
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ddd;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 0;
`;

const SearchInput = styled.input`
  padding: 10px;
  margin: 15px;
  border-radius: 25px;
  border: 1px solid #ddd;
  font-size: 14px;
`;

const UserList = styled.div`
  padding: 15px;
  margin-top: 5px;
  flex: 1; 
  overflow-y: auto; 
`;

const UserItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #f5f5f5;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const UserMessage = styled.span`
  font-size: 14px;
  color: gray;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
`;

const FooterIcon = styled.img`
  width: 30px; 
  height: 30px; 
  border-radius: 35%; 
  object-fit: cover; 
`;

export default ChatList;

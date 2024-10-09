import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../form/Header';
import ChatMessage from '../form/ChatMessage';
import ChatInput from '../form/ChatInput';
import Container from '../form/Container';
import styled from 'styled-components';

const ChatScreen: React.FC = () => {
  const { userId } = useParams<{ userId: string }>(); // URL에서 userId 파라미터를 가져옵니다.
  const [chatData, setChatData] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<{ name: string; profileImage: string } | null>(null);
  const [me, setMe] = useState<{ name: string; profileImage: string } | null>(null);

  useEffect(() => {
    fetch('/data/chatData.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedUser = data.users.find((user: any) => user.id === userId);
        if (selectedUser) {
          setUserInfo({ name: selectedUser.name, profileImage: selectedUser.profileImage });
          setChatData(selectedUser.chats);
        }
        // 내 정보 설정
        setMe({ name: data.me.name, profileImage: data.me.profileImage });
      })
      .catch((error) => console.error('Error fetching chat data:', error));
  }, [userId]);

  return (
    <ChatScreenContainer>
      {userInfo && <Header title={userInfo.name} profileImage={userInfo.profileImage} />}
      <ChatMessages>
        {chatData.map((chat, index) => (
          <ChatMessage
            key={index}
            chat={{ ...chat, profileImage: chat.id === 'eonny' ? me?.profileImage : userInfo?.profileImage }}
          />
        ))}
      </ChatMessages>
      <ChatInput />
    </ChatScreenContainer>
  );
};

const ChatScreenContainer = styled(Container)`
  max-width: 430px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

const ChatMessages = styled.div`
  width: 100%;
  flex: 1;
  padding: 16px;
  overflow-y: scroll;
`;

export default ChatScreen;

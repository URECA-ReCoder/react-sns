import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../form/Header';
import ChatMessage from '../form/ChatMessage';
import ChatInput from '../form/ChatInput';
import Container from '../form/Container';
import styled from 'styled-components';

const ChatScreen: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [chatData, setChatData] = useState<any[]>([]);
  const [newChats, setNewChats] = useState<any[]>([]);
  const [userInfo, setUserInfo] = useState<{ name: string; profileImage: string } | null>(null);
  const [me, setMe] = useState<{ name: string; profileImage: string } | null>(null);
  const [isMuted, setIsMuted] = useState(false); // 뮤트 상태를 위한 state
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/data/chatData.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedUser = data.users.find((user: any) => user.id === userId);
        if (selectedUser) {
          setUserInfo({ name: selectedUser.name, profileImage: selectedUser.profileImage });
          setChatData(selectedUser.chats);
        }
        setMe({ name: data.me.name, profileImage: data.me.profileImage });

        const savedChats = JSON.parse(localStorage.getItem(`chat-${userId}`) || '[]');
        setNewChats(savedChats);
      })
      .catch((error) => console.error('Error fetching chat data:', error));
  }, [userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData, newChats]);

  const handleSendMessage = (message: string) => {
    if (isMuted || !message.trim()) return;

    const newMessage = {
      id: 'eonny',
      name: me?.name || 'Me',
      message: message,
      time: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      profileImage: me?.profileImage || '',
    };

    const updatedNewChats = [...newChats, newMessage];
    setNewChats(updatedNewChats);

    localStorage.setItem(`chat-${userId}`, JSON.stringify(updatedNewChats));
  };

  const handleBellClick = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <ChatScreenContainer>
      {userInfo && (
        <Header
          title={userInfo.name}
          showIcons={true}
          profileImage={userInfo.profileImage}
          onBellClick={handleBellClick}
        />
      )}
      <ChatMessages>
        {chatData.map((chat, index) => (
          <ChatMessage
            key={`chat-${index}`}
            chat={{ ...chat, profileImage: chat.id === 'eonny' ? me?.profileImage : userInfo?.profileImage }}
          />
        ))}
        {newChats.map((chat, index) => (
          <ChatMessage
            key={`new-chat-${index}`}
            chat={{ ...chat, profileImage: chat.id === 'eonny' ? me?.profileImage : userInfo?.profileImage }}
          />
        ))}
        <div ref={messagesEndRef} />
      </ChatMessages>
      <ChatInput onSendMessage={handleSendMessage} isMuted={isMuted} />
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
  padding-bottom: 80px;
  overflow-y: auto;
`;

export default ChatScreen;

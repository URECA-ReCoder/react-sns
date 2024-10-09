// components/ChatLists.tsx
import React, { useEffect, useState } from 'react';
import ChatItem from '../form/ChatItem';
import SearchBar from '../form/SearchBar';
import Header from '../form/Header';
import Footer from '../form/Footer';
import Container from '../form/Container';

const ChatLists: React.FC = () => {
  const [chatData, setChatData] = useState<{ users: any[]; me: any }>({ users: [], me: {} });

  useEffect(() => {
    fetch('/data/chatData.json')
      .then((response) => response.json())
      .then((data) => setChatData(data))
      .catch((error) => console.error('Error fetching chat data:', error));
  }, []);

  return (
    <Container className="chat-lists" >
      <Header />
      <SearchBar />
      <div className="chat-items">
        {chatData.users.map((user) => (
          <ChatItem
            key={user.id}
            profileImage={user.profileImage}
            name={user.name}
            status={user.status}
          />
        ))}
      </div>
      <Footer profileImage={chatData.me.profileImage} />
    </Container>
  );
};

export default ChatLists;

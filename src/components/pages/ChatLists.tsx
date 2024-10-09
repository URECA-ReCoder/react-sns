// components/ChatLists.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatItem from '../form/ChatItem';
import SearchBar from '../form/SearchBar';
import Header from '../form/Header';
import Footer from '../form/Footer';
import Container from '../form/Container';

const ChatLists: React.FC = () => {
  const [chatData, setChatData] = useState<{ users: any[]; me: any }>({ users: [], me: {} });
  const navigate = useNavigate();
  useEffect(() => {
    fetch('/data/chatData.json')
      .then((response) => response.json())
      .then((data) => setChatData(data))
      .catch((error) => console.error('Error fetching chat data:', error));
  }, []);
  // 특정 아이템을 클릭했을 때 호출되는 함수
  const handleChatItemClick = (userId: string) => {
    navigate(`/chat/${userId}`); // 해당 사용자의 chat screen으로 이동
  };
  return (
    <Container className="chat-lists">
      <Header title="채팅 목록" /> {/* Header를 '채팅 목록'이라는 제목으로 사용 */}
      <SearchBar />
      <div className="chat-items">
        {chatData.users.map((user) => (
          <ChatItem
            key={user.id}
            profileImage={user.profileImage}
            name={user.name}
            status={user.status}
            onClick={() => handleChatItemClick(user.id)} // 클릭 이벤트 추가
          />
        ))}
      </div>
      <Footer profileImage={chatData.me.profileImage} />
    </Container>
  );
};

export default ChatLists;

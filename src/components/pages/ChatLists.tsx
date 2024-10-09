import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatItem from '../form/ChatItem';
import SearchBar from '../form/SearchBar';
import Header from '../form/Header';
import Footer from '../form/Footer';
import Container from '../form/Container';

const ChatLists: React.FC = () => {
  const [chatData, setChatData] = useState<{ users: any[]; me: any }>({ users: [], me: {} });
  const [searchTerm, setSearchTerm] = useState<string>(''); // 검색어를 위한 상태
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

  // 검색어가 변경되었을 때 호출되는 함수
  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  // 검색어를 기준으로 chatData를 필터링합니다.
  const filteredUsers = chatData.users.filter(
    (user) =>
      user.name.includes(searchTerm) || // 이름에 검색어가 포함되는지 확인
      user.status.includes(searchTerm) // 상태에 검색어가 포함되는지 확인
  );

  return (
    <Container className="chat-lists">
      <Header title="채팅 목록" />
      <SearchBar onSearchChange={handleSearchChange} />
      <div className="chat-items">
        {filteredUsers.map((user) => (
          <ChatItem
            key={user.id}
            profileImage={user.profileImage}
            name={user.name}
            status={user.status}
            onClick={() => handleChatItemClick(user.id)}
          />
        ))}
      </div>
      <Footer profileImage={chatData.me.profileImage} />
    </Container>
  );
};

export default ChatLists;

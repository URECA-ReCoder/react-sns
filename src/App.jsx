import Header from '@components/Header';
import MessageInput from '@components/MessageInput';
import PartnerMessage from '@components/ChatItem/PartnerMessage';
import MyMessage from '@components/ChatItem/MyMessage';
import { userInfo } from './constants/userInfo';
import useChat from '@hooks/useChat';
import { useEffect } from 'react';

function App() {
  const { chats, handleNewChat } = useChat();
  useEffect(() => {
    console.log(chats);
  }, [chats]);
  return (
    <div>
      <Header />
      {chats.map((item, index) => {
        return item.id === userInfo.userId ? (
          <MyMessage
            id={item.id}
            key={index}
            nickname={item.nickname}
            profileImage={item.image}
            message={item.message}
          />
        ) : (
          <PartnerMessage
            key={index}
            nickname={item.nickname}
            profileImage={item.image}
            message={item.message}
          />
        );
      })}
      <MessageInput handleNewChat={handleNewChat} />
    </div>
  );
}

export default App;

import Header from '@components/Header';
import MessageInput from '@components/MessageInput';
import PartnerMessage from '@components/ChatItem/PartnerMessage';
import MyMessage from '@components/ChatItem/MyMessage';
import { userInfo } from './constants/userInfo';
import useChat from '@hooks/useChat';

function App() {
  const { chats } = useChat();
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
      <MessageInput />
    </div>
  );
}

export default App;

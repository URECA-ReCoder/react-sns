import Header from '@components/Header';
import MessageInput from '@components/MessageInput';
import useChat from '@hooks/useChat';
import ChatList from '@components/ChatList';

function App() {
  const { chats, handleNewChat } = useChat();

  return (
    <div>
      <Header />
      <ChatList chats={chats} />
      <MessageInput handleNewChat={handleNewChat} />
    </div>
  );
}

export default App;

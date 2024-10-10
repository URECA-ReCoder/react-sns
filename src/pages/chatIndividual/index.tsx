import Header from '@pages/chatIndividual/Header';
import MessageInput from '@pages/chatIndividual/MessageInput';
import ChatList from '@pages/chatIndividual/ChatList';
import { useState } from 'react';
import { chatAppData } from '@assets/chat';
import { useParams } from 'react-router-dom';

function ChatIndividual() {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <div>채팅방을 선택해주세요.</div>;
  }
  const partnerId = parseInt(id);
  const chatRoomInfo = chatAppData.find(
    (chatRoom) => chatRoom.roomId === partnerId
  );
  if (!chatRoomInfo) {
    return <div>존재하지 않는 채팅방입니다.</div>;
  }

  function handleNewChat(chatAppData: Message) {
    setChats((prevChats: Message[]) => [...prevChats, chatAppData]);
  }
  const [chats, setChats] = useState<Message[]>(chatRoomInfo.messages);

  return (
    <div>
      <Header />
      <ChatList partnerId={partnerId} />
      <MessageInput />
    </div>
  );
}

export default ChatIndividual;

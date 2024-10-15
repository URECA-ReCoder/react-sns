import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, messageState } from '../atom';
import { useParams } from 'react-router-dom';

import ChatRoomHeader from '../components/chatRoom/header/ChatRoomHeader';
import ChatRoomContent from '../components/chatRoom/content/ChatRoomContent';
import InputField from '../components/chatRoom/footer/InputField';
import * as s from './Page.styles';

export default function ChatRoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const roomValue = useRecoilValue(messageState).find(room => room.roomId === Number(roomId));

  // recoil의 useRecoilValue를 사용하여 atom의 상태를 가져오고, params로 받은 roomId를 통해 해당 방의 메시지를 가져옴.
  // const [messages, setMessages] = useState(roomValue.messages);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const roomUsers = roomValue.joinedUsers.map(userId => useRecoilValue(userState).find(user => user.userId === userId));

  return (
    <div css={s.pageWrapper}>
      <ChatRoomHeader isMuted={isMuted} setIsMuted={setIsMuted} roomUsers={roomUsers} />
      <ChatRoomContent isMuted={isMuted} roomUsers={roomUsers} />
      <InputField isMuted={isMuted} />
    </div>
  );
}




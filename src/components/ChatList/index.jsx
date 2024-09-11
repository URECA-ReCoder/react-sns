import MyMessage from '@components/ChatItem/MyMessage';
import PartnerMessage from '@components/ChatItem/PartnerMessage';
import { HEADER_HEIGHT, INPUT_HEIGHT } from '@constants/index';
import { userInfo } from '@constants/userInfo';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

function ChatList({ chats }) {
  const chatListRef = useRef(null);
  useEffect(() => {
    chatListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);
  return (
    <ChatListWrapper>
      {chats.map((item, index) => {
        return item.id === userInfo.userId ? (
          <MyMessage key={index} message={item} />
        ) : (
          <PartnerMessage key={index} message={item} />
        );
      })}
      <div ref={chatListRef}></div>
    </ChatListWrapper>
  );
}

const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: calc(100vh - ${HEADER_HEIGHT + INPUT_HEIGHT}px);
  box-sizing: border-box;
  margin-top: ${HEADER_HEIGHT}px;
`;
export default ChatList;

import MyMessage from '@components/ChatItem/MyMessage';
import PartnerMessage from '@components/ChatItem/PartnerMessage';
import { userInfo } from '@constants/userInfo';
import { findPartnerInfo } from '@utils/findPartnerInfo';
import { useEffect, useRef } from 'react';
import * as S from './styles';

function ChatList({ chats, alarmOff }) {
  const chatListRef = useRef(null);
  const { partnerName } = findPartnerInfo(userInfo.userId);
  useEffect(() => {
    chatListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats, alarmOff]);
  return (
    <S.ChatListWrapper>
      {chats.map((item, index) => {
        return item.id === userInfo.userId ? (
          <MyMessage key={index} message={item} />
        ) : (
          <PartnerMessage key={index} message={item} />
        );
      })}
      {alarmOff && (
        <S.DoNotDisturb>
          {partnerName}님이 방해금지모드를 설정하여 <br />
          메시지를 전송할 수 없습니다.
        </S.DoNotDisturb>
      )}
      <div ref={chatListRef}></div>
    </S.ChatListWrapper>
  );
}

export default ChatList;

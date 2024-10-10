import MyMessage from '@pages/chatIndividual/ChatItem/MyMessage';
import PartnerMessage from '@pages/chatIndividual/ChatItem/PartnerMessage';
import { findPartnerList } from '@utils/findPartnerInfo';
import { useEffect, useRef } from 'react';
import * as S from './ChatList.styles';
import { myInfo } from '@constants/myInfo';

interface ChatListProps {
  chats: ChatArray;
  alarmOff: boolean;
  partnerId: number;
}

function ChatList({ partnerId, chats, alarmOff }: ChatListProps) {
  const chatListRef = useRef<HTMLDivElement>(null);
  const partnerList = findPartnerList(partnerId);
  console.log(partnerList);

  useEffect(() => {
    if (chatListRef.current)
      chatListRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats, alarmOff]);
  return (
    <S.ChatListWrapper>
      {chats.map((item, index) => {
        return item.userId === myInfo.userId ? (
          <MyMessage key={index} message={item} />
        ) : (
          <PartnerMessage key={index} message={item} />
        );
      })}
      {alarmOff && (
        <S.DoNotDisturb>
          {partnerList.map((partner) => partner.partnerName)} 님이
          방해금지모드를 설정하여 <br />
          메시지를 전송할 수 없습니다.
        </S.DoNotDisturb>
      )}
      <div ref={chatListRef}></div>
    </S.ChatListWrapper>
  );
}

export default ChatList;

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useRef } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { chatState, userState } from '../recoil/atoms';

const MessageWindow = ({ userId }: { userId: string }) => {
  // 메세지 입력창을 포함한 모든 대화창
  const users = useRecoilValue(userState);
  const chatData = useRecoilValue(chatState);
  const setChatData = useSetRecoilState(chatState);

  // userId를 사용하여 해당 사용자의 chatId 찾기
  const currentUser = users.find((user) => user.userId === userId);
  const userChatId = currentUser ? currentUser.chatId : null;

  // userChatId를 사용하여 해당 채팅방의 메시지를 찾기
  const currentChat = chatData.find((chat) => chat.chatId === userChatId);

  const handleSendMessage = (newMessageText: string) => {
    // newMessageText의 타입을 string으로 명시
    const currentTime = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const newMessage = {
      id: currentChat?.messages.length + 1 || 1,
      userId: '9_atns', // 현재 로그인된 사용자를 가정
      text: newMessageText,
      time: currentTime,
    };

    if (currentChat) {
      const updatedChats = chatData.map((chat) => {
        if (
          chat.chatId ===
          (Array.isArray(userChatId) ? userChatId[0] : userChatId)
        ) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
          };
        }
        return chat;
      });
      setChatData(updatedChats);
    }
  };

  return (
    <div css={i}>
      {/* 메세지 목록 렌더링 */}
      <MessageList messages={currentChat?.messages || []} users={users} />
      <div css={messageInput}>
        {/* 메세지 입력 */}
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default MessageWindow;

// emotion
const i = css`
  padding: 100px 0 0;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
`;
const messageInput = css`
  position: fixed;
  z-index: 2;
  bottom: 0;
  max-width: 428px;
  width: 100%;
  padding: 12px 8px 32px;
`;

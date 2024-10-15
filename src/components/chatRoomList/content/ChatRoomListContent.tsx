import { css } from '@emotion/react';
import searchIcon from '@/assets/search.svg';
import { useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState, messageState } from '../../../atom';
import ChatRoomListItem from './ChatRoomListItem';

export default function ChatRoomListContent() {
  const [chatInput, setChatInput] = useState('');
  const inputRef = useRef(null);
  const users = useRecoilValue(userState);
  const [messages, useMessages] = useRecoilState(messageState);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (chatInput === '') {
      alert('한 글자 이상 입력해주세요.');
      return;
    }
    setChatInput('');
    if (inputRef.current) inputRef.current.focus();
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatInput(e.target.value);
  };

  return (
    <main css={contentWrapper}>
      <form css={footerForm} onSubmit={handleForm}>
        <span css={searchWrapper}>
          <img src={searchIcon} css={btnImg} />
        </span>
        <textarea
          spellCheck="false"
          placeholder="이름검색"
          css={messageInput}
          onChange={handleInput}
          value={chatInput}
          ref={inputRef}
        />
      </form>
      <div css={itemWrapper}>
      {
        messages.map(room => {
          const roomUsers = room.joinedUsers.map(userId => users.find(user => user.userId === userId));
          return (
            <ChatRoomListItem
              key={room.roomId}
              roomId={room.roomId}
              roomUsers={roomUsers}
              lastMessage={room.messages[room.messages.length - 1].content}
            />
          );
        })
      }
      </div>
    </main>
  );
}

const contentWrapper = css`
  width: 100%;
  padding: 12px 8px 32px;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 78px;
  overflow: scroll;
`;

const footerForm = css`
  width: 100%;
  border-radius: 12px;
  padding: 2px;
  background: #e3e3e35f;
  backdrop-filter: blur(8px);
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const searchWrapper = css`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const btnImg = css`
  width: 20px;
  height: 20px;
`;

const messageInput = css`
  display: flex;
  flex: 1;
  height: 36px;
  padding: 8px 8px;
  background: none;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.4px;
`;

const itemWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  overflow: scroll;
`;
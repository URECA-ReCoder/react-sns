import { css } from '@emotion/react';
import { IUser, IMessage } from '../../../atom';
import LeftBubble from './LeftBubble';
import RightBubble from './RightBubble';
import { useRecoilState } from 'recoil';
import { messageState } from '../../../atom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ContentProps {
  isMuted: boolean;
  roomUsers: IUser[];
}

export default function ChatRoomContent({
  isMuted,
  roomUsers
}: ContentProps) {
  let isLeftBubble: boolean = false;
  const participant = roomUsers.find((user) => user.userId !== 0);
  const user = roomUsers.find((user) => user.userId === 0);
  const [allmessages, setAllMessages] = useRecoilState(messageState);
  const {roomId} = useParams<{roomId: string}>();
  const messages = allmessages.find(room => room.roomId === Number(roomId)).messages;

  return (
    <div css={contentWrapper}>
      {messages.map((item, index) => {
        isLeftBubble = item.userId === 0 ? false : true;
        return isLeftBubble ? (
          <LeftBubble
            key={index}
            content={item.content}
            name={participant.userName}
            profile={participant.profile}
            time={item.time}
          />
        ) : (
          <RightBubble
            key={index}
            content={item.content}
            name={user.userName}
            profile={user.profile}
            time={item.time}
          />
        );
      })}
      {isMuted ? (
        <div css={mutedMessage}>
          <hr css={mutedLine} />
          {participant.userName.toUpperCase()} 님이 방해 금지 모드를 설정하여
          메시지를 전송할 수 없습니다.{' '}
        </div>
      ) : null}
    </div>
  );
}

const contentWrapper = css`
  width: 100%;
  padding: 100px 20px 100px;
  gap: 20px;
  overflow: scroll;
  flex: 1;
  flex-direction: column;
`;

const mutedMessage = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  color: var(--main-text-color);
  padding: 32px 64px;
  white-space: pre-wrap;
`;

const mutedLine = css`
  border: 0.3px solid #d9d9d9;
  width: 100%;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 32px;
`;

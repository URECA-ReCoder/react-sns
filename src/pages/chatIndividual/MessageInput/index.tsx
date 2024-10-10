import { find, send } from '@assets/png';
import * as S from './MessageInput.styles';
import { useRef } from 'react';
import createMessageData from '@utils/createMessageData';
import { useAlarmStore } from '../stores/useAlarmStore';
import { useChatStore } from '../stores/useNewChatStore';
import { useParams } from 'react-router-dom';

function MessageInput() {
  const { alarmOff } = useAlarmStore();
  const { setNewChats } = useChatStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams<{ id: string }>();
  const sendMessage = () => {
    if (!inputRef.current?.value || inputRef.current === null) {
      return;
    }
    const newChat = createMessageData(inputRef.current.value);
    setNewChats(parseInt(id!), newChat);
    inputRef.current.value = '';
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <S.Wrapper>
      <S.FindIcon src={find} />
      <S.StyledInput
        disabled={alarmOff}
        onKeyDown={handleKeyPress}
        ref={inputRef}
        autoFocus
        placeholder={
          alarmOff ? '메시지 전송이 불가합니다' : '메시지 보내기 ...'
        }
      />
      <S.SendIcon src={send} onClick={sendMessage} />
    </S.Wrapper>
  );
}

export default MessageInput;

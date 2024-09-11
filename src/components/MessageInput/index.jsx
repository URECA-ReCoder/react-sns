import { find, send } from '@assets/png';
import * as S from './styles';
import { useRef } from 'react';
import createMessageData from '@utils/createMessageData';

function MessageInput({ alarmOff, handleNewChat }) {
  const inputRef = useRef(null);

  const sendMessage = () => {
    if (!inputRef.current.value) {
      return;
    }
    handleNewChat(createMessageData(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const handleKeyPress = (e) => {
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

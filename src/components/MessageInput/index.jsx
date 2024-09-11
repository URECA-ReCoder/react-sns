import { find, send } from '@assets/png';
import * as S from './styles';
import { useRef } from 'react';
import createMessageData from '@utils/createMessageData';

function MessageInput({ handleNewChat }) {
  const inputRef = useRef(null);

  const sendMessage = () => {
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
        onKeyDown={handleKeyPress}
        ref={inputRef}
        autoFocus
        placeholder="메시지 보내기 ..."
      />
      <S.SendIcon src={send} onClick={sendMessage} />
    </S.Wrapper>
  );
}

export default MessageInput;

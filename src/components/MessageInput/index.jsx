import { find, send } from '@assets/png';
import * as S from './styles';

function MessageInput() {
  return (
    <S.Wrapper>
      <S.FindIcon src={find} />
      <S.StyledInput placeholder="메시지 보내기 ..." />
      <S.SendIcon src={send} />
    </S.Wrapper>
  );
}

export default MessageInput;

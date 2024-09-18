import parseTimeStamp from '@utils/parseTimeStamp';
import * as S from './styles';
import { userInfo } from '@constants/userInfo';

function MyMessage({ message }) {
  const time = parseTimeStamp(message.timestamp);
  const { id, nickname, message: text, image } = message;

  return (
    <S.ChatItemWrapper id={id} userId={userInfo.userId}>
      <S.ProfileImage src={image} />
      <S.MyMessage>
        <S.Nickname>{nickname}</S.Nickname>
        <S.ChatTimeMessageWrapper>
          <S.ChatTime>{time}</S.ChatTime>
          <S.Chat userId={userInfo.userId} id={id}>
            {text}
          </S.Chat>
        </S.ChatTimeMessageWrapper>
      </S.MyMessage>
    </S.ChatItemWrapper>
  );
}

export default MyMessage;

import parseTimeStamp from '@utils/parseTimeStamp';
import * as S from './styles';
import { userInfo } from '@constants/userInfo';

function PartnerMessage({ message }) {
  const time = parseTimeStamp(message.timestamp);
  const { id, nickname, message: text, image } = message;
  return (
    <S.ChatItemWrapper userId={userInfo.userId} id={id}>
      <S.ProfileImage src={image} />
      <S.PartnerMessage>
        {nickname}
        <S.ChatTimeMessageWrapper>
          <S.Chat userId={userInfo.userId} id={id}>
            {text}
          </S.Chat>
          <S.ChatTime>{time}</S.ChatTime>
        </S.ChatTimeMessageWrapper>
      </S.PartnerMessage>
    </S.ChatItemWrapper>
  );
}

export default PartnerMessage;

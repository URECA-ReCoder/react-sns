import * as S from './ChatItem.styles';
import { myInfo } from '@constants/myInfo';
import 'moment/locale/ko';
import moment from 'moment';

function MyMessage({ message }: { message: Chat }) {
  const time = moment(message.timestamp).format('a hh:mm');
  const { userId: messageUserId, message: text } = message;
  const { userId: myId, image, nickname } = myInfo;
  return (
    <S.ChatItemWrapper userId={messageUserId} myId={myId}>
      <S.ProfileImage src={image} />
      <S.MyMessage>
        <S.Nickname>{nickname}</S.Nickname>
        <S.ChatTimeMessageWrapper>
          <S.ChatTime>{time}</S.ChatTime>
          <S.Chat myId={myId} userId={messageUserId}>
            {text}
          </S.Chat>
        </S.ChatTimeMessageWrapper>
      </S.MyMessage>
    </S.ChatItemWrapper>
  );
}

export default MyMessage;

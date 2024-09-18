import * as S from './ChatItem.styles';
import { myInfo } from '@constants/myInfo';
import { partnerMessageInfo } from '@utils/findPartnerInfo';
import moment from 'moment';

function PartnerMessage({ message }: { message: Chat }) {
  const time = moment(message.timestamp).format('a hh:mm');

  const { userId: messgaeUserId, message: text } = message;
  const { userId: myId } = myInfo;
  const { userId, image, nickname } = partnerMessageInfo(messgaeUserId);
  return (
    <S.ChatItemWrapper myId={myId} userId={userId}>
      <S.ProfileImage src={image} />
      <S.PartnerMessage>
        <S.Nickname>{nickname}</S.Nickname>
        <S.ChatTimeMessageWrapper>
          <S.Chat myId={myId} userId={userId}>
            {text}
          </S.Chat>
          <S.ChatTime>{time}</S.ChatTime>
        </S.ChatTimeMessageWrapper>
      </S.PartnerMessage>
    </S.ChatItemWrapper>
  );
}

export default PartnerMessage;

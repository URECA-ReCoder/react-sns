import * as S from './styles';
import { userId } from '@constants/index';

function PartnerMessage({ id, message, profileImage, nickname }) {
  return (
    <S.ChatItemWrapper userId={userId} id={id}>
      <S.ProfileImage src={profileImage} />
      <S.PartnerMessage>
        {nickname}
        <S.Chat userId={userId} id={id}>
          {message}
        </S.Chat>
      </S.PartnerMessage>
    </S.ChatItemWrapper>
  );
}

export default PartnerMessage;

import * as S from './styles';
import { userInfo } from '@constants/userInfo';

function PartnerMessage({ id, message, profileImage, nickname }) {
  return (
    <S.ChatItemWrapper userId={userInfo.userId} id={id}>
      <S.ProfileImage src={profileImage} />
      <S.PartnerMessage>
        {nickname}
        <S.Chat userId={userInfo.userId} id={id}>
          {message}
        </S.Chat>
      </S.PartnerMessage>
    </S.ChatItemWrapper>
  );
}

export default PartnerMessage;

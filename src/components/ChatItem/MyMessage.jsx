import * as S from './styles';
import { userId } from '@constants/index';

function MyMessage({ id, message, profileImage, nickname }) {
  return (
    <S.ChatItemWrapper id={id} userId={userId}>
      <S.ProfileImage src={profileImage} />
      <S.MyMessage>
        <div>{nickname}</div>
        <S.Chat userId={userId} id={id}>
          {message}
        </S.Chat>
      </S.MyMessage>
    </S.ChatItemWrapper>
  );
}

export default MyMessage;

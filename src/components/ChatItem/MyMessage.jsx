import * as S from './styles';
import { userInfo } from '@constants/userInfo';

function MyMessage({ id, message, profileImage, nickname }) {
  return (
    <S.ChatItemWrapper id={id} userId={userInfo.userId}>
      <S.ProfileImage src={profileImage} />
      <S.MyMessage>
        <div>{nickname}</div>
        <S.Chat userId={userInfo.userId} id={id}>
          {message}
        </S.Chat>
      </S.MyMessage>
    </S.ChatItemWrapper>
  );
}

export default MyMessage;

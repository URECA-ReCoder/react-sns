import { userInfo } from '@constants/userInfo';
import { findPartnerInfo } from '../../utils/findPartnerInfo';
import * as S from './styles';

function Title() {
  const { partnerName, partnerProfileImage, partnerNickname } = findPartnerInfo(
    userInfo.userId
  );
  return (
    <S.ChatPartner>
      <S.ChatPartnerImage src={partnerProfileImage} />
      <S.TitleNameWrapper>
        <S.ChatPartnerName> {partnerName}</S.ChatPartnerName>
        <S.ChatPartnerNickname>{partnerNickname}</S.ChatPartnerNickname>
      </S.TitleNameWrapper>
    </S.ChatPartner>
  );
}

export default Title;

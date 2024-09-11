import * as S from './styles';
import { findPartnerInfo } from './utils/findPartnerInfo';

function Title() {
  const { partnerName, partnerProfileImage, partnerNickname } =
    findPartnerInfo();
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

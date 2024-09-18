import { myInfo } from '@constants/myInfo';
import { findPartnerList } from '../../utils/findPartnerInfo';
import * as S from './Header.styles';

function Title() {
  const partnerList = findPartnerList(myInfo.userId);
  return (
    <S.ChatPartner>
      {partnerList.map((partner) => (
        <>
          <S.ChatPartnerImage src={partner.partnerProfileImage} />
          <S.TitleNameWrapper>
            <S.ChatPartnerName> {partner.partnerName}</S.ChatPartnerName>
            <S.ChatPartnerNickname>
              {partner.partnerNickname}
            </S.ChatPartnerNickname>
          </S.TitleNameWrapper>
        </>
      ))}
    </S.ChatPartner>
  );
}

export default Title;

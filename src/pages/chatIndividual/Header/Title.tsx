import { myInfo } from '@constants/myInfo';
import { findPartnerList } from '../../../utils/findPartnerInfo';
import * as S from './Header.styles';
import { useParams } from 'react-router-dom';

function Title() {
  const { id } = useParams<{ id: string }>();
  const partnerList = findPartnerList(parseInt(id!));

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

import userInfo from '@assets/userInfo.json';
export function findPartnerList(partnerId: number) {
  const partners = userInfo.filter(
    (info: UserInfo) => info.userId === partnerId
  );

  const partnerInfoList = partners.map((partner) => ({
    partnerName: partner.name,
    partnerProfileImage: partner.image,
    partnerNickname: partner.nickname,
  }));
  return partnerInfoList;
}

export function partnerMessageInfo(userId: number) {
  const partnerInfo = userInfo.find(
    (info: UserInfo) => info.userId === userId
  ) as UserInfo;

  return partnerInfo;
}

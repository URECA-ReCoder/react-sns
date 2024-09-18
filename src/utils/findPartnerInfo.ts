import userInfo from '@assets/userInfo.json';
export function findPartnerList(myId: number) {
  const partners = userInfo.filter((info: UserInfo) => info.userId !== myId);

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

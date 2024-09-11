import chat from '@assets/chat.json';

export function findPartnerInfo({ userId }) {
  const partnerName = chat.find((chat) => chat.id !== userId).name;
  const partnerProfileImage = chat.find((chat) => chat.id !== userId).image;
  const partnerNickname = chat.find((chat) => chat.id !== userId).nickname;
  return { partnerName, partnerProfileImage, partnerNickname };
}

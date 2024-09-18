import { userInfo } from '@constants/userInfo';

function createMessageData(message) {
  const { userId, nickname, image } = userInfo;
  return {
    id: userId,
    nickname,
    image,
    message,
    timestamp: new Date().toISOString(),
  };
}

export default createMessageData;

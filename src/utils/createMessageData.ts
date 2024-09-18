import { myInfo } from '@constants/myInfo';

function createMessageData(message: string): Chat {
  const { userId } = myInfo;
  return {
    userId,
    message,
    timestamp: new Date().toISOString(),
  };
}

export default createMessageData;

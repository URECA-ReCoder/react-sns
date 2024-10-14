import { atom } from 'recoil';
import chatData from '../db/chatData.json';
import userData from '../db/userData.json';

export const chatState = atom({
  key: 'chatState',
  default: chatData,
});

export const userState = atom({
  key: 'userState',
  default: userData,
});

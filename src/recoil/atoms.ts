import { atom } from 'recoil';

// 메시지 상태 관리
export const messageState = atom({
  key: 'messageState',
  default: [] as Message[],
});

// 유저 상태 관리
export const userState = atom({
  key: 'userState',
  default: [] as User[], 
});


interface User {
  id: number;
  userImage: string;
  userName: string;
}

interface Message {
  id: number;
  userId: number;
  time: string;
  text: string;
}

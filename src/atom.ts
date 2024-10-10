import { atom } from 'recoil';
import caratImg from '@/assets/carat.png';
import svtImg from '@/assets/seventeen.jpg';
import junImg from '@/assets/jun.jpg';
import hoshiImg from '@/assets/hoshi.jpg';

export interface IUser {
  userId: number;
  userName: string;
  nickName: string;
  profile: string;
}

export interface IMessage {
  userId: number;
  content: string;
  time: string;
}

export interface IRoom {
  roomId: number;
  joinedUsers: number[];
  messages: IMessage[];
}

export const userState = atom<IUser[]>({
  key: 'users',
  default: [
    {
      userId: 0,
      userName: "carat",
      nickName: "캐럿",
      profile: caratImg
    },
    {
      userId: 1,
      userName: "svt",
      nickName: "세븐틴",
      profile: svtImg
    },
    {
      userId: 2,
      userName: "jun",
      nickName: "문준휘",
      profile: junImg
    },
    {
      userId: 3,
      userName: "hoshi",
      nickName: "권순영",
      profile: hoshiImg
    }
  ],
});

export const messageState = atom<IRoom[]>({
  key: 'messages',
  default: [
    {
      roomId: 1,
      joinedUsers: [0, 1],
      messages: [
        {
          userId: 1,
          content: "땅을 보고 계속 올랐지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "정상까지",
          time: "오후 12:00"
        },
        {
          userId: 1,
          content: "많은 시련은 보란 듯이",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "I always Win",
          time: "오후 12:00"
        },
        {
          userId: 1,
          content: "강한 맘이 중요하지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "미래는 도망가지 않아, \n내가 놓기 전까지",
          time: "오후 12:00"
        },
        {
          userId: 1,
          content: "마치 된 것 같아 손오공",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "우리는 쉬지 않아 매일",
          time: "오후 12:00"
        }
      ]
    },
    {
      roomId: 2,
      joinedUsers: [0, 2],
      messages: [
        {
          userId: 2,
          content: "땅을 보고 계속 올랐지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "정상까지",
          time: "오후 12:00"
        },
        {
          userId: 2,
          content: "많은 시련은 보란 듯이",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "I always Win",
          time: "오후 12:00"
        },
        {
          userId: 2,
          content: "강한 맘이 중요하지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "미래는 도망가지 않아, \n내가 놓기 전까지",
          time: "오후 12:00"
        },
        {
          userId: 2,
          content: "마치 된 것 같아 손오공",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "우리는 쉬지 않아 매일",
          time: "오후 12:00"
        },
        {
          userId: 2,
          content: "끝까지 가보자",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "마치 된 것 같아 손오공",
          time: "오후 12:00"
        }
      ]
    },
    {
      roomId: 3,
      joinedUsers: [0, 3],
      messages: [
        {
          userId: 3,
          content: "땅을 보고 계속 올랐지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "정상까지",
          time: "오후 12:00"
        },
        {
          userId: 3,
          content: "많은 시련은 보란 듯이",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "I always Win",
          time: "오후 12:00"
        },
        {
          userId: 3,
          content: "강한 맘이 중요하지",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "미래는 도망가지 않아, \n내가 놓기 전까지",
          time: "오후 12:00"
        },
        {
          userId: 3,
          content: "마치 된 것 같아 손오공",
          time: "오후 12:00"
        },
        {
          userId: 0,
          content: "우리는 쉬지 않아 매일",
          time: "오후 12:00"
        }
      ]
    }
  ]
});
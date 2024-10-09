import { atom } from 'recoil';

interface Message {
  id: number;
  userId: number;
  text: string;
  time: string;
}

interface MessageState {
  [key: number]: Message[];
}

export const doNotDisturbState = atom<boolean>({
  key: 'doNotDisturbState',
  default: false,
});

export const userState = atom({
  key: 'userState', // 고유 키 값
  default: [
    {
      userId: 0,
      userName: '윤정',
      userEngName: 'yoonjeong',
      profile: '/assets/metamong.jpg',
    },
    {
      userId: 1,
      userName: '민지',
      userEngName: 'minji',
      profile: '/assets/minji.jpg',
    },
    {
      userId: 2,
      userName: '하니',
      userEngName: 'hanni',
      profile: '/assets/hanni.jpg',
    },
    {
      userId: 3,
      userName: '다니엘',
      userEngName: 'dani',
      profile: '/assets/dani.jpg',
    },
    {
      userId: 4,
      userName: '해린',
      userEngName: 'hyerin',
      profile: '/assets/hyerin.jpeg',
    },
    {
      userId: 5,
      userName: '혜인',
      userEngName: 'hyein',
      profile: '/assets/hyein.jpg',
    },
  ],
});

export const messageState = atom<MessageState>({
  key: 'messageState',
  default: {
    1: [
      {
        id: 1,
        userId: 1,
        text: 'Attention!!',
        time: '오후 08:48',
      },
      {
        id: 2,
        userId: 1,
        text: 'You and me, 내 맘이 보이지?',
        time: '오후 08:49',
      },
      {
        id: 3,
        userId: 0,
        text: '한참을 쳐다봐, 가까이 다가가',
        time: '오후 08:52',
      },
      {
        id: 4,
        userId: 1,
        text: 'I just want you call my phone right now',
        time: '오후 08:55',
      },
      {
        id: 5,
        userId: 0,
        text: "I just wanna hear, 'You're mine'",
        time: '오후 08:56',
      },
      {
        id: 6,
        userId: 0,
        text: 'Cause I know what you like boy',
        time: '오후 08:56',
      },
      {
        id: 7,
        userId: 0,
        text: "You're my chemical hype boy",
        time: '오후 08:57',
      },
      {
        id: 8,
        userId: 1,
        text: '내 지난날들은 눈 뜨면 잊는 꿈',
        time: '오후 09:00',
      },
      {
        id: 9,
        userId: 1,
        text: 'Hype boy 너만 원해',
        time: '오후 09:01',
      },
      {
        id: 10,
        userId: 1,
        text: 'Hype boy 내가 전해',
        time: '오후 09:01',
      },
    ],
    2: [
      {
        id: 1,
        userId: 2,
        text: '준비 갈 완료~!!',
        time: '오후 10:04',
      },
      {
        id: 2,
        userId: 0,
        text: '보고 싶은 생각에, 들어간 우리 창에\n나는 말을 거는데 보내지는 않을래',
        time: '오후 10:04',
      },
      {
        id: 3,
        userId: 2,
        text: '느린 한마디보다 조용함이 더 좋아\n기다리고 있지만 매일 이런 건 아니야',
        time: '오후 10:05',
      },
      {
        id: 4,
        userId: 0,
        text: "cause I'm not gonna be the one to get hurt❤️‍🩹",
        time: '오후 10:04',
      },
      {
        id: 5,
        userId: 0,
        text: '뜬겁새로',
        time: '오후 10:30',
      },
      {
        id: 6,
        userId: 2,
        text: '?',
        time: '오후 10:42',
      },
    ],
    3: [
      {
        id: 1,
        userId: 3,
        text: '🥕🥕🥕🥕🥕🥕🥕🥕',
        time: '오전 9:03',
      },
      {
        id: 2,
        userId: 3,
        text: '🧡🧡🧡🧡🧡🧡🧡',
        time: '오전 9:04',
      },
      {
        id: 3,
        userId: 0,
        text: '당근 좋아해?',
        time: '오후 12:05',
      },
      {
        id: 4,
        userId: 3,
        text: 'YESSSSSSSSSS!!!🥰🥰',
        time: '오후 12:12',
      },
    ],
    4: [
      {
        id: 1,
        userId: 0,
        text: '뭘 쳐다봐 강해륀',
        time: '오후 1:00',
      },
      {
        id: 2,
        userId: 4,
        text: '👀',
        time: '오후 2:05',
      },
      {
        id: 3,
        userId: 4,
        text: '애옹',
        time: '오후 2:06',
      },
      {
        id: 4,
        userId: 0,
        text: "Yeah, don't you know how sweet it tastes?🍭🍬🍫",
        time: '오후 8:08',
      },
      {
        id: 5,
        userId: 4,
        text: '모든 게 typical',
        time: '오후 8:13',
      },
      {
        id: 6,
        userId: 4,
        text: "so I've been praying so hard for a miracle✨✨",
        time: '오후 8:15',
      },
    ],
    5: [
      {
        id: 1,
        userId: 5,
        text: '안녕? 난 혜인이야!',
        time: '오후 6:23',
      },
      {
        id: 2,
        userId: 5,
        text: '내가 비눗방울 부는 법을 아르켜줄게',
        time: '오후 6:23',
      },
      {
        id: 3,
        userId: 0,
        text: 'You just get my heart pump, pumping💗💗',
        time: '오후 6:45',
      },
      {
        id: 4,
        userId: 0,
        text: "Every time that you're here around me",
        time: '오후 6:46',
      },
      {
        id: 5,
        userId: 5,
        text: '노랫 소리가 또 흘러나와🎵',
        time: '오후 7:00',
      },
      {
        id: 6,
        userId: 5,
        text: 'Oh, my baby, sweet like bubble gum',
        time: '오후 9:08',
      },
      {
        id: 7,
        userId: 0,
        text: 'Bubble🫧, bubble🫧, bubble🫧, bubble🫧, bubble🫧, bubble🫧',
        time: '오후 10:06',
      },
    ],
  },
});

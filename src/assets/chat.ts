import userInfo from '@assets/userInfo.json';

// 전체 채팅 애플리케이션 데이터
export const chatAppData: {
  users: UserInfo[];
  chatRooms: ChatRoom[];
} = {
  users: userInfo,
  chatRooms: [
    {
      roomId: 1,
      roomName: '일반 채팅방',
      messages: [
        { userId: 1, message: '안녕하세요', timestamp: '2024-09-11T09:00:00Z' },
        {
          userId: 0,
          message: '네 안녕하세요',
          timestamp: '2024-09-11T09:05:00Z',
        },
        {
          userId: 1,
          message: '밥 드셨어요 ?',
          timestamp: '2024-09-11T09:07:00Z',
        },
      ],
    },
    {
      roomId: 2,
      roomName: '저녁 메뉴 토론방',
      messages: [
        {
          userId: 2,
          message: '오늘 저녁 뭐 드셨어요 ?',
          timestamp: '2024-09-11T09:10:00Z',
        },
        {
          userId: 0,
          message: '네 저는 치킨을 먹었어요',
          timestamp: '2024-09-11T09:15:00Z',
        },
        {
          userId: 2,
          message: '무슨 치킨이요?',
          timestamp: '2024-09-11T09:20:00Z',
        },
        {
          userId: 0,
          message: '양념 치킨이요',
          timestamp: '2024-09-11T09:20:00Z',
        },
      ],
    },
  ],
};

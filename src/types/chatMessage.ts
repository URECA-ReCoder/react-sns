interface Chat {
  userId: number;
  message: string;
  timestamp: string; // ISO 8601 형식의 날짜와 시간 문자열
}

type ChatArray = Chat[];

interface Message {
  userId: number;
  message: string;
  timestamp: string;
}

// 대화방 정보
interface ChatRoom {
  roomId: number;
  roomName: string;
  messages: Message[];
}

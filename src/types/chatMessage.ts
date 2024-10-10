interface Chat {
  userId: number;
  message: string;
  timestamp: string;
}

type ChatArray = Chat[];

interface Message {
  userId: number;
  message: string;
  timestamp: string;
}

interface ChatRoom {
  roomId: number;
  messages: Message[];
}

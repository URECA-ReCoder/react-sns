interface Chat {
  userId: number;
  message: string;
  timestamp: string; // ISO 8601 형식의 날짜와 시간 문자열
}

type ChatArray = Chat[];

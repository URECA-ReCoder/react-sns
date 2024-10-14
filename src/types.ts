export interface Message {
  id: number;
  userId: string;
  text: string;
  time: string;
}

export interface User {
  userId: string;
  userName: string;
  userImage: string;
}

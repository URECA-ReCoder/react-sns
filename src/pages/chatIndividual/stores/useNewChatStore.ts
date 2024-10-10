import { chatAppData } from '@assets/chat';
import { create } from 'zustand';

interface IChatStore {
  chats: ChatRoom[];
  setNewChats: (roomId: number, newChat: Message) => void;
}

export const useChatStore = create<IChatStore>((set) => ({
  chats: chatAppData,
  setNewChats: (roomId: number, newChat: Message) =>
    set((state) => ({
      chats: state.chats.map((chatRoom) =>
        chatRoom.roomId === roomId
          ? { ...chatRoom, messages: [...chatRoom.messages, newChat] }
          : chatRoom
      ),
    })),
}));

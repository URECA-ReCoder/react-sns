import { create } from 'zustand';
import { chatAppData } from '@assets/chat';
import userInfo from '@assets/userInfo.json';

interface ChatStore {
  filteredChatRooms: any[];
  handleFindChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useFilterChatListStore = create<ChatStore>((set) => ({
  filteredChatRooms: chatAppData,
  handleFindChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredRooms = chatAppData.filter((chat) => {
      const userInfos = userInfo.find((user) => user.userId === chat.roomId);
      return userInfos && userInfos.name.toLowerCase().includes(searchValue);
    });

    set({ filteredChatRooms: filteredRooms });
  },
}));

export default useFilterChatListStore;

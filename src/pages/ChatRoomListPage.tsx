//ChatRoomListPage.tsx
import * as s from './Page.styles';
import ChatRoomListHeader from '../components/chatRoomList/header/ChatRoomListHeader'
import ChatRoomListContent from '../components/chatRoomList/content/ChatRoomListContent'
import ChatRoomListFooter from '../components/chatRoomList/footer/ChatRoomListFooter'

export default function ChatRoomListPage() {
  return (
    <div css={s.pageWrapper}>
      <ChatRoomListHeader />
      <ChatRoomListContent />
      <ChatRoomListFooter />
    </div>
  );
}

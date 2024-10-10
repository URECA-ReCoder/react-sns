import Header from '@pages/chatList/components/Header';
import FindName from '@pages/chatList/components/FindName';
import List from '@pages/chatList/components/List';
import BottomTab from '@pages/chatList/components/BottomTab';
import styled from 'styled-components';

function ChatList() {
  return (
    <ChatListWrapper>
      <Header />
      <FindName />
      <List />
      <BottomTab />
    </ChatListWrapper>
  );
}

export default ChatList;

const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
`;

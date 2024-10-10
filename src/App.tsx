import Header from '@pages/chatList/Header';
import FindName from '@pages/chatList/FindName';
import List from '@pages/chatList/List';
import BottomTab from '@pages/chatList/BottomTab';
import styled from 'styled-components';

function App() {
  return (
    <ChatListWrapper>
      <Header />
      <FindName />
      <List />
      <BottomTab />
    </ChatListWrapper>
  );
}

export default App;

const ChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  height: 100vh;
  width: 100vw;
`;

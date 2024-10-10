import { Home, Plus, Search, Video } from '@assets/svg';
import styled from 'styled-components';
import userInfo from '@assets/userInfo.json';

function BottomTab() {
  const myInfo = userInfo.find((user) => user.userId === 0);
  return (
    <Wrapper>
      <Home width={24} height={24} />
      <Search width={24} height={24} />
      <Plus width={24} height={24} />
      <Video width={24} height={24} />
      <BottomProfile src={myInfo?.image} alt="profile" width={24} height={24} />
    </Wrapper>
  );
}

export default BottomTab;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #e0e0e0;
`;

const BottomProfile = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

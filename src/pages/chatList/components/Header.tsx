import styled from 'styled-components';

function Header() {
  return <Container>채팅방 목록</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  font-size: 2em;
  font-weight: bold;
`;

export default Header;

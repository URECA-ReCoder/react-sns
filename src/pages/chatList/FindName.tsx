import styled from 'styled-components';
import useFilterChatListStore from './stores/useFilterChatListStore';

function FindName() {
  const { handleFindChange } = useFilterChatListStore();

  return (
    <Wrapper>
      <Input
        onChange={handleFindChange}
        type="text"
        placeholder="이름을 입력해주세요"
      />
    </Wrapper>
  );
}

export default FindName;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 0 10px;
`;

import { bell, camera, chevronLeft } from '@assets/png';
import * as S from './styles';
import Title from './Title';
function Header() {
  return (
    <S.Wrapper>
      <S.ActionIcon>
        <S.Icon src={chevronLeft} />
        <Title />
      </S.ActionIcon>
      <S.ActionIcon>
        <S.Icon src={bell} />
        <S.Icon src={camera} />
      </S.ActionIcon>
    </S.Wrapper>
  );
}

export default Header;

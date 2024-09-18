import { bell, bellOff, camera, chevronLeft } from '@assets/png';
import * as S from './Header.styles';
import Title from './Title';

interface HeaderProps {
  alarmOff: boolean;
  setAlarmOff: (alarmOff: boolean) => void;
}

function Header({ alarmOff, setAlarmOff }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.ActionIcon>
        <S.Icon src={chevronLeft} />
        <Title />
      </S.ActionIcon>
      <S.ActionIcon>
        {alarmOff ? (
          <S.Icon src={bellOff} onClick={() => setAlarmOff(!alarmOff)} />
        ) : (
          <S.Icon src={bell} onClick={() => setAlarmOff(!alarmOff)} />
        )}
        <S.Icon src={camera} />
      </S.ActionIcon>
    </S.Wrapper>
  );
}

export default Header;

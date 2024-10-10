import { bell, bellOff, camera, chevronLeft } from '@assets/png';
import * as S from './Header.styles';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { ROUTE } from '@constants';

interface HeaderProps {
  alarmOff: boolean;
  setAlarmOff: (alarmOff: boolean) => void;
}

function Header({ alarmOff, setAlarmOff }: HeaderProps) {
  const navigate = useNavigate();
  const goChatList = () => {
    navigate(ROUTE.CHATLIST);
  };
  return (
    <S.Wrapper onClick={goChatList}>
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

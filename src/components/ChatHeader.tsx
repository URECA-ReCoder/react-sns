import React from 'react';
import styled from '@emotion/styled';
import back from '../../public/images/back.png';
import IU from '../../public/images/IU.png';
import bell from '../../public/images/bell.png';
import video from '../../public/images/video.png';
const Url = `${process.env.PUBLIC_URL}/images/`;

const HeaderContainer = styled.div`
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 12px 16px;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 8px;
`;

const HeaderIcon = styled.img`
  align-self: center;
  width: 23px;
  height: 23px;
  cursor: pointer;
  margin: 0 7px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

interface ChatHeaderProps {
  name: string;
  id: string;
  alertBack?: () => void;
  alertVideo?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  name,
  id,
  alertBack,
  alertVideo,
}) => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderIcon src={back} onClick={alertBack} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img
            src={IU} // Use `${Url}` to reference the image
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              border: '1px solid #dbdbdb',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '500',
                letterSpacing: '-.4px',
              }}
            >
              {name}
            </span>
            <span
              style={{
                color: '#979797',
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '-.4px',
              }}
            >
              {id}
            </span>
          </div>
        </div>
      </HeaderLeft>
      <HeaderRight>
        <HeaderIcon src={bell} />
        <HeaderIcon
          src={video}
          style={{ width: '28px', height: '28px' }}
          onClick={alertVideo}
        />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default ChatHeader;

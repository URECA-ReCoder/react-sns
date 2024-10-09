import * as React from 'react'; // React를 import
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <HeaderStyle>
      <img src="your-image-url-here" alt="Logo" />
      {children}
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 12px 16px;

  img {
    width: 36px;
    height: 35px;
  }
`;

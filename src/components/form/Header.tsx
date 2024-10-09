import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  profileImage?: string;
}

const Header: React.FC<HeaderProps> = ({ title = "corinthionia", profileImage }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <header style={headerStyle}>
      <button style={buttonStyle} onClick={handleBackClick}>
        <img src="/images/back.png" alt="Back" style={iconStyle} />
      </button>
      {profileImage ? (
        <div style={userInfoStyle}>
          <img src={profileImage} alt={title} style={profileImageStyle} />
          <h2 style={userNameStyle}>{title}</h2>
        </div>
      ) : (
        <h2 style={userNameStyle}>{title}</h2>
      )}
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  padding: '20px 12px',
  borderBottom: '1px solid #ddd',
  display: 'flex',
  alignItems: 'center',
  width:'100%',
};

const buttonStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  marginRight: '10px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
};

const iconStyle: React.CSSProperties = {
  width: '80%',
  height: 'auto',
};

const userInfoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const profileImageStyle: React.CSSProperties = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  marginRight: '8px',
};

const userNameStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1.5rem',
};

export default Header;

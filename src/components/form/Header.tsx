// components/form/Header.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  profileImage?: string;
  showIcons?: boolean;
  onBellClick?: () => void; // 벨 아이콘 클릭 핸들러
}

const Header: React.FC<HeaderProps> = ({ title = "corinthionia", profileImage, showIcons = false, onBellClick }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <header style={headerStyle}>
      <div style={leftContainerStyle}>
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
      </div>
      {showIcons && (
        <div style={iconContainerStyle}>
          <button style={buttonStyle} onClick={onBellClick}>
            <img src="/images/bell.png" alt="Notifications" style={iconStyle} />
          </button>
          <button style={buttonStyle}>
            <img src="/images/video.png" alt="Video Call" style={iconStyle} />
          </button>
        </div>
      )}
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  padding: '20px 12px',
  borderBottom: '1px solid #ddd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
};

const leftContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
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
  width: '24px',
  height: '24px',
};

const userInfoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

const iconContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
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

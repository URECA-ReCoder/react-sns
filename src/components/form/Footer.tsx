// components/Footer.tsx
import React from 'react';

interface FooterProps {
  profileImage: string;
}

const Footer: React.FC<FooterProps> = ({ profileImage }) => {
  return (
    <footer style={footerStyle}>
      <div style={iconStyle}>
        <img src="/images/home.png" alt="Home" style={imageStyle} />
      </div>
      <div style={iconStyle}>
        <img src="/images/search.png" alt="Search" style={imageStyle} />
      </div>
      <div style={iconStyle}>
        <img src="/images/add.png" alt="Add" style={imageStyle} />
      </div>
      <div style={iconStyle}>
        <img src="/images/video.png" alt="Notifications" style={imageStyle} />
      </div>
      <div style={iconStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />
      </div>
    </footer>
  );
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px  0 32px',
  borderTop: '1px solid #ddd',
  backgroundColor: '#fff',
  position: 'fixed' as 'fixed',
  bottom: 0,
  width: '100%',
  maxWidth: '428px',
};

const iconStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
};

const imageStyle = {
  width: '24px',
  height: '24px',
};

const profileImageStyle = {
  width: '32px',
  height: '32px',
  borderRadius: '50%',
};

export default Footer;

// components/Header.tsx
import React from 'react';


const Header: React.FC = () => {
  return (
    <header style={{ padding: '16px 12px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
      <button style={{width:'36px',height:'36px', marginRight: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>
        ←
      </button>
      <h2 style={{ margin: 0, fontSize: '1.5rem'}}>corinthionia</h2>
    </header>
  );
};

export default Header;
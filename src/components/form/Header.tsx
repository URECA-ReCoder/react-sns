import React from 'react';

const Header: React.FC = () => {
  return (

    <header style={{ padding: '20px 12px', borderBottom: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
      <button style={{width:'36px', height:'36px', marginRight: '10px', border: 'none', background: 'none', cursor: 'pointer' }}>
        <img src="/images/back.png" alt="Back" style={{ width: '80%', height: 'auto' }}/>
      </button>
      <h2 style={{ margin: 0, fontSize: '1.5rem', height:'36px' }}>corinthionia</h2>
    </header>
  );
};

export default Header;

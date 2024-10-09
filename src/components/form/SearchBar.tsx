// components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div style={{padding:'20px'}}>

    <div className="search-bar" style={{ borderRadius: '10px',display:'flex',alignItems:'center', background:'#f0f0f0', padding: '6px 12px', justifyContent:'center'}}>
      <img src="/images/loupe.png" style={{width:'18px'}}/>
      <input
        type="text"
        placeholder="이름 검색"
        style={{
          width: '100%',
          padding: '6px',
          outline:'none',
          border:'none',
          background:'none'
          
        }}
        />
    </div>
        </div>
  );
};

export default SearchBar;

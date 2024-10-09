// components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar" style={{ padding: '10px' }}>
      <input
        type="text"
        placeholder="이름 검색"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ddd'
        }}
      />
    </div>
  );
};

export default SearchBar;

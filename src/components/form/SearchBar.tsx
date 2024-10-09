// components/SearchBar.tsx
import React from 'react';
interface SearchBarProps {
  onSearchChange: (searchTerm: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearchChange }) => {
  return (
    <div style={{padding:'20px'}}>

    <div className="search-bar" style={{ borderRadius: '10px',display:'flex',alignItems:'center', background:'#f0f0f0', padding: '6px 12px', justifyContent:'center'}}>
      <img src="/images/loupe.png" style={{width:'18px'}}/>
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        onChange={(e) => onSearchChange(e.target.value)}
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

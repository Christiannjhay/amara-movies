import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate(); // Move useNavigate here, outside of any function

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    // Navigate to search results with the search term
    navigate(`/search-results?query=${searchTerm}`);
  };

  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-80 h-8 rounded-2xl px-4 text-black placeholder-black relative"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 ml-2 cursor-pointer"
        onClick={handleSearchClick} 
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();

  return (
    <header className="bg-[#ffd1dc] h-20 md:h-24 py-4 flex flex-col md:flex-row justify-between items-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Logo />
        <div className="flex-grow">
          <SearchBar navigate={navigate} />
        </div>
      </div>
    </header>
  );
}

export default Header;

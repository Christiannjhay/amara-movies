import React from 'react';

function Header() {
  return (
    <header className="bg-[#ffd1dc] py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-black text-2xl font-bold mb-4 md:mb-0">AMARA</h1>
        <div className="flex items-center justify-center w-full md:w-auto relative">
          <input
            type="text"
            placeholder="Search movies..."
            className="pl-10 pr-4 py-2 rounded-3xl mx-9 bg-white bg-opacity-55 text-black w-full placeholder-black focus:outline-none focus:ring focus:border-blue-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 mx-9"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.854 13.146a6 6 0 111.415-1.415l4.792 4.792a1 1 0 01-1.415 1.415l-4.792-4.792zM11 14a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-black text-lg font-extrabold inline-block relative hover:scale-105 transition-all">Profile</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

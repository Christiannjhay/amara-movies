import React from 'react';
import './index.css';
import Header from './components/header/header.jsx';
import Trending from './components/trending/trending.jsx';
import ViewMovie from './components/ViewMovie/viewMovie.jsx';
import SearchResult from './components/searchResult/searchResult.jsx';
import SearchBar from './components/header/searchBar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter> <div className='w-full'>
        <Header />
        <Routes> 
          <Route path="/" element={<Trending />} />
          <Route path="/search-results" element={<SearchResult />} />
          <Route path="/view-movie/:id" element={<ViewMovie />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
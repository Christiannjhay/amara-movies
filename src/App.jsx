import React from 'react';
import './index.css';
import Header from './components/header/header.jsx';
import Trending from './components/trending/trending.jsx';
import ViewMovie from './components/ViewMovie/viewMovie.jsx'; // Import ViewMovie component
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import router components

function App() {
  return (
    <BrowserRouter> <div className='w-full'>
        <Header />
        <Routes>  {/* Define routes here */}
          <Route path="/" element={<Trending />} />  {/* Home route for Trending */}
          <Route path="/view-movie/:id" element={<ViewMovie />} /> {/* Dynamic route for ViewMovie */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
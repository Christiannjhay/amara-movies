import React from 'react';
import './index.css';
import Header from './components/header/header.jsx';
import Trending from './components/trending/trending.jsx';
import ViewMovie from './components/ViewMovie/viewMovie.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter> <div className='w-full'>
        <Header />
        <Routes> 
          <Route path="/" element={<Trending />} />  
          <Route path="/view-movie/:id" element={<ViewMovie />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
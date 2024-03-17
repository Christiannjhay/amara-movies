import React from 'react';
import './index.css';
import Header from './components/header/header.jsx';
import Trending from './components/trending/trending.jsx'; 

function App() {
  return (
    <div>
      <div className='w-full'>
        <Header />
        <Trending/>
      </div>
     
    </div>
  );
}

export default App;
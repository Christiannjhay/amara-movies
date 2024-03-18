import React from 'react';

function HeaderDetails(props) {
  const { movieDetails } = props; 

  return (
    <div className='flex justify-center bg-red-500 w-[800px] h-fit'>
      <div className='text-white'>
        <h1 className='font-bold text-3xl'>{movieDetails.title}</h1>
        <h1 className='font-thin mt-2'>{movieDetails.overview}</h1>
      </div>
    </div>
  );
}

export default HeaderDetails;
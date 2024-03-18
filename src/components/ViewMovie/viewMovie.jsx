import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeaderDetails from './headerDetails';

function ViewMovie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM0NDRkNDQ5ZmRkOGQ4NGUzMDMzNGZhN2U1OTFmOCIsInN1YiI6IjY1ZjY1ZmI1ZTIxMDIzMDE3ZWVlMDJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z1fa1jT_-JUEe0N6UNX-wdvspwCNH0j4hUpE4eg6-VI`,
          },
        };

        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
        const movieData = await response.json();
        setMovieDetails(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;


  return (

    <div className='w-full relative'>

      <div className='flex justify-center content-center bg-cover bg-no-repeat h-[800px]' style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba( 0, 0, 0, 0.92)), url(${backdropUrl})` }}>
      </div>
      {/* Container for iframe */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center">
        {/* Iframe */}
        <iframe
          className='mt-6'
          width="70%"
          height="700"
          src={`https://vidsrc.to/embed/movie/${id}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Movie"
        />
      </div>

      <div className='flex justify-center h-[600px] bg-black mt-8'>
          <HeaderDetails movieDetails={movieDetails}/>
      </div>

    </div>

  );

  /* <h1 className='font-bold text-3xl'>{movieDetails.title}</h1>
    <p>{movieDetails.overview}</p>*/
}


export default ViewMovie;
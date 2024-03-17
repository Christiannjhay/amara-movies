import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ViewMovie() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        const movieData = await response.json();
        setMovieDetails(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ml-5 mr-5 justify-center items-center'>
     <iframe
        width="70%"
        height="700"
        src={`https://vidsrc.to/embed/movie/${id}`}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Movie"
      />
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>

      
    </div>
  );
}

export default ViewMovie;
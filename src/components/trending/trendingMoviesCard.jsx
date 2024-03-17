import React, { useState, useEffect } from "react";

function TrendingMoviesCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmM0NDRkNDQ5ZmRkOGQ4NGUzMDMzNGZhN2U1OTFmOCIsInN1YiI6IjY1ZjY1ZmI1ZTIxMDIzMDE3ZWVlMDJkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z1fa1jT_-JUEe0N6UNX-wdvspwCNH0j4hUpE4eg6-VI'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 my-5 mx-5">
      {movies.map(movie => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg p-2">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
          <h2 className="text-lg font-semibold mb-1">{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default TrendingMoviesCard;

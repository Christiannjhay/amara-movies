import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
function TrendingMoviesCard() {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

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
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1 my-5 mx-10">
            {movies.map(movie => (
                <button
                    key={movie.id}
                    className="text-white bg-transparent rounded-lg p-2 hover:transform hover:scale-105 transition duration-300"
                    onClick={() => {
                        console.log('Clicked movie ID:', movie.id);
                        navigate(`/view-movie/${movie.id}`);
                    }}
                >
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
                    <h2 className="text-sm font-bold font-sans mb-1">{movie.title}</h2>
                </button>
            ))}
        </div>
    );
}

export default TrendingMoviesCard;

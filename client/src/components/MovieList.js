import React, { useEffect, useState } from "react";

export default function MovieList({ searchValue }) {
  const [moviedet, setMoviedet] = useState([]);
  const apiKey = "06d957d483298391d0b324df8b069c4c";

  const fetchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchValue}&page=1`
    );
    const movieDetail = await data.json();
    setMoviedet(movieDetail.results);
  };

  useEffect(() => {
    fetchMovies();
  }, [searchValue]);

  return (
    <div>
      <div>
        <h2>Searched Movies</h2>
      </div>
      {moviedet.map((movie) => (
        <div key={movie.id}>
          <div>
            <a href={`/movie/${movie.id}`}>
              {movie.poster_path === null ? (
                <img scr="https://raw.githubusercontent.com/tushar-2223/BlueBird-Movies/main/src/assets/images/no-image.jpg" />
              ) : (
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt={movie.title}
                />
              )}
            </a>
            <p>{movie.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

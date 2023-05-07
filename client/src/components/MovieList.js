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
      {!searchValue ? (
        ""
      ) : (
        <div>
          <h2>Searched Movies</h2>
        </div>
      )}
      <div className="movie-list-container">
        {moviedet.map((movie) => (
          <div key={movie.id} style={{ margin: "10px" }}>
            <div>
              <a href={`/movie/${movie.id}`}>
                {movie.poster_path ? (
                  <img
                    className="movie-list-image"
                    src={
                      "https://image.tmdb.org/t/p/original/" + movie.poster_path
                    }
                    alt={movie.title}
                  />
                ) : (
                  <img
                    className="movie-list-image"
                    src="https://media.istockphoto.com/id/1208666888/vector/marquee-and-curtain-background.jpg?s=612x612&w=0&k=20&c=VyNG1C6kfoOoH3W7cNNMmyNAlAiLuuqoQWTdDLAvA14="
                    alt={movie.title}
                  />
                )}
              </a>
              <p className='movieListTitle'>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

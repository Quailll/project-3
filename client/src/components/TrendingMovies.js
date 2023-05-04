import React, { useEffect, useState } from "react";

export default function TrendingMovie() {
  const [moviedet, setMoviedet] = useState([]);
  const apiKey = "06d957d483298391d0b324df8b069c4c";
  const fetchTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`
    );
    const movieDetail = await data.json();
    setMoviedet(movieDetail.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <div className="trending-container">
      <div>
        <h2>Trending Movies</h2>
      </div>
      <div className="trending-card">
        {moviedet.map((movie) => (
          <div key={movie.id}>
            <div>
              <a href={`/movie/${movie.id}`}>
                <img
                  className="trending"
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.poster_path
                  }
                  alt={movie.title}
                />
              </a>
              <p>{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

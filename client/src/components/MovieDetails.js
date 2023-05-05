import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const apiKey = "06d957d483298391d0b324df8b069c4c";
  const { id } = useParams();
  const [moviedet, setMoviedet] = useState({});

  const fetchMovie = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    const movieDetail = await data.json();
    setMoviedet(movieDetail);
  };

  const handleAddFavorites = async () => {
    const { id, poster_path, original_title } = moviedet;
    await fetch("/movies", {
      method: "POST",
      body: JSON.stringify({ id, poster_path, original_title }),
      headers: { "Content-Type": "application/json" },
    });
    alert("Movie added to favorites");
  };

  const handleAddWatchList = async () => {
    const { id, poster_path, original_title } = moviedet;
    await fetch("/movies", {
      method: "POST",
      body: JSON.stringify({ id, poster_path, original_title }),
      headers: { "Content-Type": "application/json" },
    });
    alert("Movie added to watch list");
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie-detail-container">
      <div className="movie-detail-img">
        <img
          src={"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path}
          alt={moviedet.original_title}
        />
      </div>
      <div className="movie-detail-content">
        <h2>{moviedet.original_title}</h2>
        <h3>{moviedet.release_date}</h3>
        <button onClick={handleAddFavorites}>Add to Favorites</button>
        <button onClick={handleAddWatchList}>Add to Watch List</button>
      </div>
      <div>
        <p>{moviedet.overview}</p>
      </div>
    </div>
  );
};

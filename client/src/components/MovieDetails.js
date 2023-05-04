import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
  const apiKey = "06d957d483298391d0b324df8b069c4c";
  const { id } = useParams();
  const [moviedet, setMoviedet] = useState({});
  console.log(id);

  const fetchMovie = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    const movieDetail = await data.json();
    setMoviedet(movieDetail);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <div>
        <img
          src={"https://image.tmdb.org/t/p/original/" + moviedet.backdrop_path}
          alt={moviedet.original_title}
        />
      </div>
      <div>
        <h2>{moviedet.original_title}</h2>
        <h3>{moviedet.release_date}</h3>
      </div>
      <div>
        <p>{moviedet.overview}</p>
      </div>
    </div>
  );
};

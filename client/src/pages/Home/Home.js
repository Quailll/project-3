import React, { useState, useEffect } from "react";

export default function Home() {
  const [moviedet, setMoviedet] = useState([]);

  const fetchTrending = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=06d957d483298391d0b324df8b069c4c`
    );
    const movieDetail = await data.json();
    setMoviedet(movieDetail.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <>
      <div>
        <h2>Homepage</h2>
      </div>

      <div>
        <ul>
          {moviedet.map((movie) => (
            <div key={movie.id}>
              <li>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original/" + movie.backdrop_path
                  }
                  alt=""
                />
                <p>{movie.title}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

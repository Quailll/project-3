// import React, { useState, useEffect } from "react";

// export default function Movie() {
//   const [moviedet, setMoviedet] = useState([]);
//   const movieId = useParams();

//   const fetchMovie = async () => {
//     const data = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}?api_key=06d957d483298391d0b324df8b069c4c&language=en-US`
//     );
//     const movieDetail = await data.json();
//     setMoviedet(movieDetail.results);
//   };

//   useEffect(() => {
//     fetchMovie();
//   }, []);
// }

// return (
//   <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}</div>
// );

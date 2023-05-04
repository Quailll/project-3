import React, { useState } from "react";
import TrendingMovie from "../../components/TrendingMovies";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div>
        <h2>Homepage</h2>
      </div>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <TrendingMovie />
      <MovieList searchValue={searchValue} />
    </>
  );
}

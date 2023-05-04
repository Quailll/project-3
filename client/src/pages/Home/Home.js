import React, { useState, useEffect } from "react";
import TrendingMovie from "../../components/TrendingMovies";

export default function Home() {
  return (
    <>
      <div>
        <h2>Homepage</h2>
      </div>
      <TrendingMovie />
    </>
  );
}

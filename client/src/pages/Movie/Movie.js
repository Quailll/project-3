import React from "react";
import { MovieDetails } from "../../components/MovieDetails";
import ReviewForm from "../../components/ReviewForm";

export default function Movie() {
  return (
    <>
      <div>
        <h2>Movie Page</h2>
      </div>
      <MovieDetails />
      <ReviewForm />
    </>
  );
}

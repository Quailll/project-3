import React from "react";
import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../../utils/queries";

const Reviews = () => {
  const { loading, error, data } = useQuery(GET_REVIEWS);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  if (error) {
    return <p>Error retrieving reviews.</p>;
  }

  const { reviews } = data;

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.map((review) => (
        <div key={review._id}>
          <h2>{review.title}</h2>
          <p>{review.body}</p>
          <p>Rating: {review.rating}</p>
          <p>Author: {review.author.name}</p>
          <p>Created at: {review.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;

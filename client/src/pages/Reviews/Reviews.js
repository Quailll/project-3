import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../utils/mutations";

function Reviews() {
  const [reviewData, setReviewData] = useState({
    title: "",
    body: "",
    rating: 0
  });

  const [createReview, { error }] = useMutation(CREATE_REVIEW);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await createReview({
        variables: reviewData
      });
      setReviewData({
        title: "",
        body: "",
        rating: 0
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Review</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={reviewData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={reviewData.body}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={reviewData.rating}
            onChange={handleChange}
            max={5}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Reviews;

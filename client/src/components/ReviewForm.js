import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../utils/mutations";
import { useParams } from "react-router-dom";

function ReviewForm() {
  const { id } = useParams();
  const [reviewData, setReviewData] = useState({
    title: "",
    body: "",
    rating: 0,
  });

  const [createReview, { error }] = useMutation(CREATE_REVIEW);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await createReview({
        variables: {
          ...reviewData,
          rating: parseInt(reviewData.rating),
          tmdb: id
        },
      });
      setReviewData({
        title: "",
        body: "",
        rating: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    //   <div className='card'>
    //     <h2>Review</h2>
    //     <form onSubmit={handleFormSubmit}>
    //       <div>
    //         <label htmlFor="title">Title:</label>
    //         <input
    //           type="text"
    //           id="title"
    //           name="title"
    //           value={reviewData.title}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="body">Body:</label>
    //         <textarea
    //           id="body"
    //           name="body"
    //           value={reviewData.body}
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div>
    //         <label htmlFor="rating">Rating:</label>
    //         <input
    //           type="number"
    //           id="rating"
    //           name="rating"
    //           value={reviewData.rating}
    //           onChange={handleChange}
    //           max={5}
    //         />
    //       </div>
    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>

    <div class="review-form">
      <h2>Write a Review</h2>
      <form onSubmit={handleFormSubmit}>
        <div class="form-field">
          <label for="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={reviewData.title}
            onChange={handleChange}
          />
        </div>
        <div class="form-field">
          <label for="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={reviewData.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="form-field">
          <label for="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={reviewData.rating}
            onChange={handleChange}
            max={5}
          />
        </div>
        <div class="form-actions">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;

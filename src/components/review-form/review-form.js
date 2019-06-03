import React from "react";
import { Rate } from "antd";
// import PropTypes from "prop-types";
import "./review-form.css";

function ReviewForm({ review }) {
  return (
    <form className="review-form">
      <div>
        <input className="review-form__name" type="text" />
        <Rate />
      </div>
      <textarea className="review-form__text" />
      <button className="review-form__submit" type="submit">
        Send
      </button>
    </form>
  );
}

// Review.propTypes = {
//   review: PropTypes.shape({
//     user: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired
//   }).isRequired
// };

export default ReviewForm;

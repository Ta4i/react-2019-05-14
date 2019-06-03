import React, { useState } from "react";
import { Rate } from "antd";
import { connect } from "react-redux";
import { sendReview } from "../../ac";
// import PropTypes from "prop-types";
import "./review-form.css";

function ReviewForm(props) {
  const { id, closeForm, send } = props;

  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [isRatingDefined, setIsRatingDefined] = useState(true);

  return (
    <form className="review-form">
      <div className="review-form__wrapper">
        <input
          onChange={event => setName(event.target.value)}
          className="review-form__name"
          type="text"
          name="name"
          required
        />
        <Rate onChange={handleRatingChange} />
        {isRatingDefined ? null : (
          <span className="review-form__rating-tip">
            Please enter your rating
          </span>
        )}
      </div>
      <textarea
        onChange={event => setText(event.target.value)}
        className="review-form__text"
        name="text"
        required
      />
      <button
        onClick={handleSubmit}
        className="review-form__submit"
        type="submit"
      >
        Send
      </button>
    </form>
  );

  function handleRatingChange(value) {
    setRating(value);
    setIsRatingDefined(true);
  }

  function handleSubmit(evt) {
    // evt.preventDefault();
    if (rating === 0) {
      setIsRatingDefined(false);
      return;
    }
    send(id, name, text, rating);
    closeForm();
  }
}

export default connect(
  () => ({}),
  {
    send: sendReview
  }
)(ReviewForm);

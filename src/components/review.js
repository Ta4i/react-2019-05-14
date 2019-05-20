import React, { Component } from "react";

class Review extends Component {
  render() {
    const { review } = this.props;
    return (
      <div>
        {review.user}: {review.text}
      </div>
    );
  }
}

export default Review;

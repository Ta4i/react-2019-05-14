import React, { Component } from "react";
import { Rate } from "antd";

class RateComponent extends Component {
  render() {
    let sum = 0;
    this.props.reviews.forEach(review => {
      sum = sum + review.rating;
    });

    let rating = sum / this.props.reviews.length;

    return (
      <div>
        <Rate value={rating} />
      </div>
    );
  }
}

export default RateComponent;

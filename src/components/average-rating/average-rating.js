import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";
import Enumerable from "linq";

class AverageRating extends PureComponent {
  state = {
    value: 0
  };

  render() {
    const { reviews } = this.props;
    const rawRating = Enumerable.from(reviews).average(r => r.rating);
    const normalizedRating = Math.floor(rawRating * 2) / 2;

    return <Rate defaultValue={normalizedRating} disabled allowHalf />;
  }
}

AverageRating.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({ rating: PropTypes.number.isRequired }).isRequired
  ).isRequired
};

export default AverageRating;

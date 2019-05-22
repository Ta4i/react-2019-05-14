import React, { PureComponent } from "react";
import { Rate } from "antd";
import PropTypes from "prop-types";

class AverageRating extends PureComponent {
  static propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired
      })
    ).isRequired
  };

  render() {
    const { reviews } = this.props;
    const rawRating =
      reviews.reduce((acc, { rating }) => {
        return acc + rating;
      }, 0) / reviews.length;
    const normalizedRating = Math.floor(rawRating * 2) / 2;

    return <Rate defaultValue={normalizedRating} disabled />;
  }
}

export default AverageRating;

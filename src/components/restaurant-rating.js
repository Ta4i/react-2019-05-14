import React, { Component } from "react";
import { Rate } from "antd";
import { Typography } from "antd";

class RestaurantRating extends Component {
  rateDescription = [
    "Aweful",
    "Could be better",
    "Fine",
    "Damn, I'm good!",
    "10 points to Griffindor!"
  ];

  // Antd's Rate component accepts .5 values only like 3, 3.5, 4, etc.
  adjustRatingValue = value => {
    let fraction = value - (value ^ 0);
    return (value ^ 0) + (fraction >= 0.5 ? 0.5 : 0);
  };

  render() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      return (
        <Rate
          tooltips={this.rateDescription}
          allowHalf
          disabled
          {...this.props}
          defaultValue={this.adjustRatingValue(defaultValue)}
        />
      );
    }

    return (
      <Typography level={4} disabled>
        No rating
      </Typography>
    );
  }
}

export default RestaurantRating;

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

  render() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      return (
        <Rate
          tooltips={this.rateDescription}
          allowHalf
          disabled
          {...this.props}
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

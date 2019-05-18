import React, { Component } from "react";
import { Rate } from "antd";
import { Typography } from "antd";

class RestaurantRate extends Component {
  rateDescription = [
    "Aweful",
    "Could be better",
    "Fine",
    "Damn, I'm good!",
    "10 points to Griffindor!"
  ];

  render() {
    const { defaultValue } = this.props;
    return defaultValue ? (
      <Rate
        tooltips={this.rateDescription}
        allowHalf
        disabled
        {...this.props}
      />
    ) : (
      <Typography level={4} disabled>
        No rating
      </Typography>
    );
  }
}

export default RestaurantRate;

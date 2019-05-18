import React, { Component } from "react";
import { Rate } from "antd";

class RestaurantRate extends Component {
  rateDescription = [
    "Aweful",
    "Could be better",
    "Fine",
    "Damn, I'm good!",
    "10 points to Griffindor!"
  ];

  render() {
    return (
      <Rate
        {...this.props}
        tooltips={this.rateDescription}
        allowHalf
        disabled
      />
    );
  }
}

export default RestaurantRate;

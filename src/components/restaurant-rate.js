import React, { PureComponent } from "react";
import { Rate } from "antd";

class RestaurantRate extends PureComponent {
  rateDescription = [
    "Aweful",
    "Could be better",
    "Fine",
    "Damn, I'm good!",
    "10 points to Griffindor!"
  ];

  render() {
    return <Rate {...this.props} />;
  }
}

export default RestaurantRate;

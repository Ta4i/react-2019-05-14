import React, { Component } from "react";
import { Rate } from "antd";

class RatingSystem extends Component {
  render() {
    const { defaultValue } = this.props;
    if (defaultValue) {
      return (
        <div>
          <Rate disabled {...this.props} />
        </div>
      );
    }
    return <div>no rate</div>;
  }
}

export default RatingSystem;

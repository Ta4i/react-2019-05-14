import React, { Component } from "react";
import { Rate } from "antd";

class RestaurantRating extends Component {
  constructor(props) {
    super(props);

    const { rating } = props;
    console.log(rating);
    this.state = {
      value: rating
    };
  }

  render() {
    const { value } = this.state;
    const desc = ["1", "2", "3", "4", "5"];
    return (
      <div className={"rating"}>
        <Rate
          tooltips={desc}
          onChange={this.handleRatingChange}
          value={value}
        />
        {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
      </div>
    );
  }

  handleRatingChange = value => {
    this.setState({ value });
  };
}

export default RestaurantRating;

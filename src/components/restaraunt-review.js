import React, { Component } from "react";
import { Comment, Typography } from "antd";
import Rate from "./rate";
import PropTypes from "prop-types";

const { Title, Text } = Typography;

class RestaurantReview extends Component {
  state = {
    error: null
  };

  render() {
    const { authorName, text, rating } = this.props;
    return this.state.error ? (
      "Not available"
    ) : (
      <Comment
        author={<Title level={4}>{authorName}</Title>}
        content={
          <div>
            <Rate defaultValue={rating} />
            <br />
            <Text>{text}</Text>
          </div>
        }
      />
    );
  }
}

RestaurantReview.propTypes = {
  authorName: PropTypes.string,
  text: PropTypes.string
};
export default RestaurantReview;

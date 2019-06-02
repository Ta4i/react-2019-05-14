import React, { Component } from "react";
import { Comment, Rate, Input, Button } from "antd";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createReviewSelector } from "../../selectors";
import { createReviewAuthorSelector } from "./../../selectors";

import "./review-form";

class ReviewForm extends Component {
  render() {
    return (
      <Comment
        className={"review-form"}
        content={
          <>
            <Input placeholder="Name" />
            <Rate allowHalf />
            <Input.TextArea placeholder="Enter your review here..." />
          </>
        }
        actions={[<Button type="primary">Send review</Button>]}
      />
    );
  }
}

export default ReviewForm;

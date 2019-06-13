import React, { Component } from "react";
import { Button, Form, Input, Rate } from "antd";
import { toggleVisibility } from "../../decorators/toggleVisibility";
import "./add-review.css";
import { connect } from "react-redux";
import { addReview } from "../../ac";
import LocalizedString from "../../localization/LocalizedString";
import {
  REVIEW_BUTTON_LABEL__ADD_REVIEW,
  REVIEW_BUTTON_LABEL__ADD_REVIEW_CANCEL,
  REVIEW_INPUT_LABEL__RATING,
  REVIEW_INPUT_LABEL__REVIEW_TEXT,
  REVIEW_INPUT_LABEL__USER
} from "../../localization/textKeys";

class AddReview extends Component {
  state = {
    userName: "",
    rating: 0,
    text: ""
  };
  render() {
    const { userName, rating, text } = this.state;
    const { isOpen, toggleVisibility } = this.props;

    return (
      <>
        {isOpen && (
          <Form>
            <Form.Item
              label={<LocalizedString name={REVIEW_INPUT_LABEL__USER} />}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
            >
              <Input value={userName} onChange={this.handleNameChange} />
            </Form.Item>
            <Form.Item
              label={<LocalizedString name={REVIEW_INPUT_LABEL__RATING} />}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
            >
              <Rate
                allowHalf
                defaultValue={rating}
                className="review-rating"
                onChange={this.handleRatingChange}
              />
            </Form.Item>
            <Form.Item
              label={<LocalizedString name={REVIEW_INPUT_LABEL__REVIEW_TEXT} />}
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
            >
              <Input.TextArea value={text} onChange={this.handleTextChange} />
            </Form.Item>
            <Form.Item className="user-form-submit-section">
              <Button type="primary" htmlType="submit" onClick={this.submit}>
                <LocalizedString name={REVIEW_BUTTON_LABEL__ADD_REVIEW} />
              </Button>{" "}
              <Button type="primary" onClick={this.handleCancel}>
                <LocalizedString
                  name={REVIEW_BUTTON_LABEL__ADD_REVIEW_CANCEL}
                />
              </Button>
            </Form.Item>
          </Form>
        )}
        {!isOpen && (
          <Button
            className="add-review-button"
            type="primary"
            onClick={toggleVisibility}
          >
            <LocalizedString name={REVIEW_BUTTON_LABEL__ADD_REVIEW} />
          </Button>
        )}
      </>
    );
  }

  handleNameChange = event => {
    this.setState({
      userName: event.target.value
    });
  };

  handleRatingChange = value => {
    this.setState({
      rating: value
    });
  };

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleCancel = () => {
    this.resetState();
    this.props.toggleVisibility();
  };

  resetState = () => {
    this.setState({
      userName: "",
      rating: 0,
      text: ""
    });
  };

  submit = event => {
    event.preventDefault();
    const { userName, rating, text } = this.state;
    const { restaurantId } = this.props;
    this.props.addReview(userName, rating, text, restaurantId);
    this.resetState();
    this.props.toggleVisibility();
  };
}

export default connect(
  null,
  {
    addReview
  }
)(toggleVisibility(AddReview));

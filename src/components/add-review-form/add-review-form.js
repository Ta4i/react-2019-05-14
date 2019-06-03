import React, { Component } from "react";
import { Form, Input, Button, Rate } from "antd";
import { connect } from "react-redux";
import { addReview } from "../../ac";
import "./add-review-form.css";

class AddReviewForm extends Component {
  state = {
    name: "",
    review: "",
    value: 0,
    restaurantId: this.props.restaurantId
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    let { addReview } = this.props;

    const { name, review, value } = this.state;
    const desc = ["terrible", "bad", "normal", "good", "wonderful"];

    return (
      <Form className="add-review-form">
        <Form.Item label="Name" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label="Review"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Input.TextArea value={review} onChange={this.handleReviewChange} />
        </Form.Item>

        <Form.Item
          label="Rating"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Rate
            defaultValue={1}
            tooltips={desc}
            allowHalf
            onChange={this.handleChange}
            value={value}
          />
          <Button
            type="primary"
            htmlType="submit"
            className="add-review-form-btn"
            onClick={() => {
              addReview(this.state);
              this.setState({
                name: "",
                review: "",
                value: 0
              });
            }}
          >
            Send review
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleReviewChange = e => {
    this.setState({
      review: e.target.value
    });
  };
}

export default connect(
  null,
  {
    addReview
  }
)(AddReviewForm);

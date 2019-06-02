import React, { Component } from "react";
import { Form, Input, Button, Rate } from "antd";
import "./add-review-form.css";

class AddReviewForm extends Component {
  state = {
    name: "",
    review: "",
    value: 0
  };

  handleChange = value => {
    this.setState({ value });
  };

  render() {
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
            onClick={this.submit}
            className="add-review-form-btn"
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

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

export default AddReviewForm;

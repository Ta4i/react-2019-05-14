import React, { PureComponent } from "react";
import { Button, Card, Form, Input, Rate } from "antd";
import { connect } from "react-redux";
import { addReviewToRestaurant } from "../../ac/";
import "./review-form.css";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 3,
      offset: 8
    }
  }
};

class ReviewFrom extends PureComponent {
  state = {
    name: "",
    rating: "",
    text: ""
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addAction({
      ...this.state,
      restaurant: this.props.id
    });
  };

  nameChangeHandler = e => {
    this.setState({
      name: e.target.value
    });
  };
  rateChangeHandler = value => {
    this.setState({
      rating: value
    });
  };

  descriptionChangeHandler = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <Card title={"Add review"} size={"small"} className={"review-form"}>
        <Form {...formItemLayout} onSubmit={this.submitHandler}>
          <Form.Item label={"Name"} {...formItemLayout}>
            <Input name={"name"} onChange={this.nameChangeHandler} />
          </Form.Item>
          <Form.Item label={"Rate"} {...formItemLayout}>
            <Rate name={"rate"} onChange={this.rateChangeHandler} />
          </Form.Item>
          <Form.Item label={"Description"} {...formItemLayout}>
            <Input.TextArea
              rows={2}
              name={"description"}
              onChange={this.descriptionChangeHandler}
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type={"primary"} htmlType={"submit"}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default connect(
  () => {
    return () => {
      return {};
    };
  },
  {
    addAction: addReviewToRestaurant
  }
)(ReviewFrom);

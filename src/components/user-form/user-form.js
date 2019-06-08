import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectAllDishesAndTotalPrice } from "../../selectors/index";
import "./user-form.css";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    const { dishes } = this.props;
    return (
      <Form className="user-form">
        <Form.Item
          label="Name"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={phone} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label="Address"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input.TextArea value={address} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.submit}
            disabled={dishes.length === 0}
          >
            <Link to="/thank-you">Send order</Link>
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

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

export default connect(selectAllDishesAndTotalPrice)(UserForm);

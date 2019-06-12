import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import { orderComplete } from "../../ac";
import { orderSelector } from "../../selectors";
import uuid from "uuid/v4";
import "./user-form.css";
import { sendOrder } from "../../ac";
import { connect } from "react-redux";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <Form className="user-form">
        <Form.Item
          label="Name"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input value={phone} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label="Address"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input.TextArea value={address} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            Send order
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
    this.props.setUser &&
      this.props.setUser({
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
    const { name, address, phone } = this.state;
    const id = uuid();
    e.preventDefault();
    this.props.sendOrder(this.state);
  };
}

export default connect(
  null,
  { sendOrder }
)(UserForm);

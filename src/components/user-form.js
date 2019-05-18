import React, { Component } from "react";
import { Button, Card, Input, Form, TextArea } from "antd";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <Card size="small">
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Form.Item>
            <Input
              placeholder="Name"
              value={name}
              onChange={this.handleNameChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              placeholder="Phone Number"
              value={phone}
              onChange={this.handlePhoneChange}
            />
          </Form.Item>
          <Form.Item>
            <Input.TextArea
              placeholder="Address"
              value={address}
              onChange={this.handleAddressChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              onClick={this.submit}
            >
              Send Order
            </Button>
          </Form.Item>
        </Form>
      </Card>
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

export default UserForm;

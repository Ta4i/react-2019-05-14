import React, { Component } from "react";
import { Button, Card, Input, Form, Icon } from "antd";

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
        <Form layout="vertical" onSubmit={this.handleSubmit}>
          <Input
            placeholder="Name"
            value={name}
            onChange={this.handleNameChange}
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={this.handlePhoneChange}
          />
          <Input.TextArea
            placeholder="Address"
            value={address}
            onChange={this.handleAddressChange}
          />
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={this.submit}
            block
          >
            <Icon type="shop" />
            Send Order
          </Button>
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

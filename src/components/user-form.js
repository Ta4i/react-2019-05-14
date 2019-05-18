import React, { Component } from "react";
import { Form, Input, Icon, Col, Row, Button } from "antd";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <Row gutter={24} style={{ marginTop: "20px" }}>
        <Col span={6}>
          <Form>
            <Input
              style={{ marginTop: "10px" }}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Name"
              value={name}
              onChange={this.handleNameChange}
            />
            <br />
            <Input
              style={{ marginTop: "10px" }}
              prefix={
                <Icon type="phone" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Phone Number"
              value={phone}
              onChange={this.handlePhoneChange}
            />
            <br />
            <Input.TextArea
              style={{ marginTop: "10px" }}
              placeholder="Address"
              value={address}
              onChange={this.handleAddressChange}
            />
            <br />
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.submit}
              style={{ marginTop: "10px" }}
            >
              Send order
            </Button>
          </Form>
        </Col>
      </Row>
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

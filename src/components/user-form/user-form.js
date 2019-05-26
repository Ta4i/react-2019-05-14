import React, { Component } from "react";
import { Form, Input, Button, Row, Col } from "antd";
import "./user-form.css";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <Row>
        <Col span={12} offset={6}>
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
              <Input.TextArea
                value={address}
                onChange={this.handleAddressChange}
              />
            </Form.Item>
            <Form.Item className="user-form-submit-section">
              <Button type="primary" htmlType="submit" onClick={this.submit}>
                Send order
              </Button>
            </Form.Item>
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

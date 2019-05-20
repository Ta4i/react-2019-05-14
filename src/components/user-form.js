import React, { Component } from "react";

import { Button, Input, Form, Row, Col } from "antd";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;

    return (
      <div className="container-form">
        <h2 className="header-form"> Make an order </h2>
        <Row className="row-form">
          <Col span={6} className="form-block">
            <Form>
              <Input
                className="form-input"
                placeholder={"Name"}
                value={name}
                onChange={this.handleNameChange}
              />
              <Input
                className="form-input"
                type="tel"
                placeholder={"Phone Number"}
                value={phone}
                onChange={this.handlePhoneChange}
              />
              <Input.TextArea
                className="form-input"
                placeholder="Address"
                value={address}
                onChange={this.handleAddressChange}
              />

              <Button
                className="button-order"
                type={"primary"}
                onClick={this.submit}
              >
                {" "}
                Send order
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
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

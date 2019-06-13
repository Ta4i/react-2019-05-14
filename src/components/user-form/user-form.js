import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "./user-form.css";
import { sendOrder } from "../../ac";
import { connect } from "react-redux";
import LocalizedString from "../../localization/LocalizedString";
import {
  USER_FORM_INPUT_LABEL__ADDRESS,
  USER_FORM_INPUT_LABEL__PHONE_NUMBER,
  USER_FORM_INPUT_LABEL__SEND_ORDER,
  USER_FORM_INPUT_LABEL__USERNAME
} from "../../localization/textKeys";

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
          label={<LocalizedString name={USER_FORM_INPUT_LABEL__USERNAME} />}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label={<LocalizedString name={USER_FORM_INPUT_LABEL__PHONE_NUMBER} />}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={phone} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label={<LocalizedString name={USER_FORM_INPUT_LABEL__ADDRESS} />}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input.TextArea value={address} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            <LocalizedString name={USER_FORM_INPUT_LABEL__SEND_ORDER} />
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
    e.preventDefault();
    this.props.sendOrder(this.state);
  };
}

export default connect(
  null,
  { sendOrder }
)(UserForm);

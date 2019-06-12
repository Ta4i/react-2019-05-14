import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import "./user-form.css";
import { sendOrder } from "../../ac";
import { I18nContext } from "../../contexts/translate";

class UserForm extends Component {
  static contextType = I18nContext;

  state = {
    name: "",
    phone: "",
    address: ""
  };

  render() {
    const { name, phone, address } = this.state;
    const { t } = this.context;

    return (
      <Form className="user-form">
        <Form.Item
          label={t("name")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label={t("phone_number")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input value={phone} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label={t("address")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          required
        >
          <Input.TextArea value={address} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            {t("send_order")}
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

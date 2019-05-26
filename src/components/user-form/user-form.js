import React, { Component } from 'react';
import { Form, Input } from 'antd/lib/index';

const { TextArea } = Input;

class UserForm extends Component {
  state = {
    name: '',
    phone: '',
    address: ''
  };

  render() {
    const { name, phone, address } = this.state;
    return (
      <Form>
        <Form.Item label="Name">
          <Input placeholder={'Name'} value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            type="tel"
            placeholder={'Phone Number'}
            value={phone}
            onChange={this.handlePhoneChange}
          />
        </Form.Item>
        <Form.Item label="Address">
          <TextArea placeholder={'Address'} value={address} onChange={this.handleAddressChange} />
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
  };
}

export default UserForm;

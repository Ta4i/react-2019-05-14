import React, { Component } from "react";
import { Input } from "antd";
import { Button } from "antd";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    const { TextArea } = Input;
    return (
      <form className="form">
        <Input
          placeholder={"Name"}
          value={name}
          onChange={this.handleNameChange}
        />
        <br />
        <Input
          type="tel"
          placeholder={"Phone Number"}
          value={phone}
          onChange={this.handlePhoneChange}
        />
        <br />
        <TextArea
          rows={4}
          placeholder={"Address"}
          value={address}
          onChange={this.handleAddressChange}
        />
        <br />
        <Button type={"submit"} onClick={this.submit}>
          Send order
        </Button>
      </form>
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

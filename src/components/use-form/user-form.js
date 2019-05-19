import React, { Component } from "react";
import "./use-form.css";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };

  render() {
    const { name, phone, address } = this.state;
    return (
      <form className="use-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={this.handleNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            id="phone"
            className="form-control"
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={this.handlePhoneChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Your address</label>
          <br />
          <textarea
            id="address"
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={this.handleAddressChange}
          />
        </div>

        <button type="submit" onClick={this.submit} className="submit-form">
          Send order
        </button>
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

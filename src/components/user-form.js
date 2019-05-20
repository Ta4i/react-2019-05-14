import React, { Component } from "react";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    return (
      <form>
        <h1>Order:</h1>
        <div className="row mb-3">
          <div className="col">
            <input
              placeholder={"Name"}
              value={name}
              onChange={this.handleNameChange}
              className={"form-control"}
            />
          </div>
          <div className="col">
            <input
              type="tel"
              placeholder={"Phone Number"}
              value={phone}
              onChange={this.handlePhoneChange}
              className={"form-control"}
            />
          </div>
        </div>

        <textarea
          placeholder={"Address"}
          value={address}
          onChange={this.handleAddressChange}
          className={"form-control"}
        />
        <br />
        <button
          type={"submit"}
          onClick={this.submit}
          className={"btn btn-primary"}
        >
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

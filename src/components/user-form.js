import React, { Component } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";

class UserForm extends Component {
    state = {
        name: "",
        phone: "",
        address: "",
    };
    render() {
        const { name, phone, address } = this.state;
        return (
            <Form>
                <Form.Item>
                    <Input placeholder={"Name"} value={name} onChange={this.handleNameChange} />
                </Form.Item>
                <Form.Item>
                    <Input type="tel" placeholder={"Phone Number"} value={phone} onChange={this.handlePhoneChange} />
                </Form.Item>
                <Form.Item>
                    <TextArea placeholder={"Address"} value={address} onChange={this.handleAddressChange} />
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} onClick={this.submit}>
                        Send order
                    </Button>
                </Form.Item>
            </Form>
        );
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value,
        });
    };

    handlePhoneChange = e => {
        this.setState({
            phone: e.target.value,
        });
    };

    handleAddressChange = e => {
        this.setState({
            address: e.target.value,
        });
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);
    };
}

export default UserForm;

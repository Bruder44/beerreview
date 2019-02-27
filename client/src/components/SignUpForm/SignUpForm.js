import React, { Component } from 'react';

class SignUpForm extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleUsername = event => {
        const { username, value } = event.target;
        this.setState({ username: value })
    }
    handleEmail = event => {
        const { email, value } = event.target;
        this.setState({ email: value})
    }
    handlePassword = event => {
        const { password, value } = event.target;
        this.setState({ password: value })
    }
    handleConfirmPassword = event => {
        const { confirmPassword, value } = event.target;
        this.setState({ confirmPassword: value })
    }

    createUser = () => {
        API.createUser({ username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        confirmPassword: this.state.confirmPassword
        })
    }
}
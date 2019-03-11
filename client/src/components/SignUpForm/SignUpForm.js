import React, { Component } from 'react';
import API from '../../utils/API';

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

    createUser = (event) => {
        event.preventDefault();
        API.createUser({ username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        confirmPassword: this.state.confirmPassword
        }).then(res => {
            console.log('making progress');
            this.setState({
            username: ""
            })
        }).catch(err => console.log(err));
    }


    render(){
        return (
            <div className = 'signUpForm'>
                <h5> Username </h5>
                <input type='text' className='form-control' onChange={this.handleUsername} />

                <h5> Email </h5>
                <input type='text' className='form-control' onChange={this.handleEmail} />

                <h5> Password </h5>
                <input type='text' className='form-control' onChange={this.handlePassword} />

                <h5> Confirm Password </h5>
                <input type='text' className='form-control' onChange={this.handleConfirmPassword} />

                <button type='submit' className='btn createUserBtn' onClick={this.createUser}> Create New Account </button>
            </div>
        )
    }
};

export default SignUpForm;
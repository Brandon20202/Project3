import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import { response } from "express";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: '',
            redirect: null
        }

        this.handleUsernameAndPassChange = this.handleUsernameAndPassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleUsernameAndPassChange(event) {
        const target = event.target;
        const value = target.name === 'userName' ? target.value : target.value; 
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleEmailChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        const user = {
            username: this.state.userName,
            password: this.state.password,
            email: this.state.email
        }

        axios.post('/authentication/login', user)
            .then(res => {

                if (res.data.message === "Account not found, please try again") {
                    document.getElementById('username').value = '';
                    document.getElementById('password').value = '';
                    document.getElementById('email').value = '';
                    alert(res.data.message)
                } else if (res.data.email) {
                    this.setState({
                        redirect: "/content"
                    })
                }

            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    };

    render() {

        const loginStyle = {
            color: 'white',
            backgroundColor: '#00a82d',
            width: '30%',
            height: '215px',
            margin: '0 auto'
        };

        const inputStyle = {
            width: '100%'
        };

        const centeringAuth = {
            width: '95%',
            margin: '0 auto'
        };

        if (this.state.redirect) {
            return (
                <Redirect to={this.state.redirect} />
            );
        };

        return(
            <div style={loginStyle}>
                <div style={centeringAuth}>
                    <h2>Log In</h2>
                    <form>
                        <label>
                            User Name
                                <input 
                                    id='username'
                                    style={inputStyle}
                                    name='userName'
                                    type='test'
                                    onChange={this.handleUsernameAndPassChange}
                                />
                        </label>
                        <br />
                        <label>
                            Password
                                <input 
                                    id='password'
                                    style={inputStyle}
                                    name='password'
                                    type='password'
                                    onChange={this.handleUsernameAndPassChange}
                                />
                        </label>
                        <br />
                        <label>
                            Email
                                <input 
                                    id='email'
                                    style={inputStyle}
                                    name='email'
                                    type='email'
                                    onChange={this.handleEmailChange}
                                />
                        </label>
                        <button onClick={this.handleSubmit}>
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Login
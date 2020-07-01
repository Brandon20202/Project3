import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import { response } from "express";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: '',
            redirect: null,
            error: false
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

        console.log(user)

        axios.post('/authentication/signup', user)
            .then(res => {
                this.setState({
                    redirect: "/content"
                })
            })
            .catch(err => {
                this.setState({
                    error: true
                })
            })
    };

    render() {

        const signUpStyle = {
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
            )
        };

        if (this.error) {
            
            return(
                <div style={signUpStyle}>
                    <div style={centeringAuth}>
                        <h2>Sign Up</h2>
                        <p>Sign Up failed. Please try again.</p>
                        <form>
                            <label>
                                User Name
                                    <input 
                                        style={inputStyle}
                                        name='userName'
                                        type='text'
                                        onChange={this.handleUsernameAndPassChange}
                                    />
                            </label>
                            <br />
                            <label>
                                Password
                                    <input 
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
                                        style={inputStyle}
                                        name='email'
                                        type='email'
                                        onChange={this.handleEmailChange}
                                    />
                            </label>
                            <button onClick={this.handleSubmit}>
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            )

        };

        return(
            <div style={signUpStyle}>
                <div style={centeringAuth}>
                    <h2>Sign Up</h2>
                    <form>
                        <label>
                            User Name
                                <input 
                                    style={inputStyle}
                                    name='userName'
                                    type='text'
                                    onChange={this.handleUsernameAndPassChange}
                                />
                        </label>
                        <br />
                        <label>
                            Password
                                <input 
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
                                    style={inputStyle}
                                    name='email'
                                    type='email'
                                    onChange={this.handleEmailChange}
                                />
                        </label>
                        <button onClick={this.handleSubmit}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        );
    };
};

export default SignUp
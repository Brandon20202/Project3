import React from "react";
// import axios from "axios;"
// import { response } from "express";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            email: ''
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
        // axios.post('/user/login', {
        //     username: this.state.userName,
        //     password: this.state.password,
        //     email: this.state.email
        // })
        //     .then(response => {
        //         console.log('login response:')
        //         console.log(response)
        //         if (response.status === 200) {
        //             this.props.updateUser({
        //                 loggedIn: true,
        //                 username: response.data.username
        //             })
        //             this.setState({
        //                 redirectTo: '/'
        //             })
        //         }
        //     })
        //     .catch(error => {
        //         console.log('login error: ')
        //         console.log(error);
        //     });
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
          }

        return(
            <div style={loginStyle}>
                <div style={centeringAuth}>
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
                                    type='text'
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
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
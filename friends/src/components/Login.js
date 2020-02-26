import React from 'react';
// import {Route, Link} from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            console.log(res)
            window.localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log(err))
        window.location.replace('http://localhost:3000/api/friends')
    }

    render() {
        return (
            <div className='login-form area'>
                <h1 className='title'>All your friends, in one place!</h1>
                <form className='login-form' onSubmit={this.login}>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username..'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    <input
                        type='password'
                        name='password'
                        placeholder='Password..'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login;
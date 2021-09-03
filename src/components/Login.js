import React, { useState } from 'react';
import axios from 'axios';
import apiClient from '../services/api';
 
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    ////////******* login doesn't function properly yet *******/////
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('http://localhost:8000/sanctum/csrf-cookie')
        .then(response => {
            if (response.status === 204) {
                props.handleLogin();
                props.handleSetUser(email);
                console.log(response);
                console.log('got the cookie!!!!!');
                alert('Successful Log In');
            }
        });
        setEmail('');
        setPassword('');
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     apiClient.get('/sanctum/csrf-cookie')
    //         .then(response => {
    //             apiClient.post('/login', {
    //                 email: email,
    //                 password: password
    //             }).then(response => {
    //                 if (response.status === 204) {
    //                 props.handleLogin();
    //                 console.log(response)
    //                 }
    //         })
    //     });
    // }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
 
export default Login;
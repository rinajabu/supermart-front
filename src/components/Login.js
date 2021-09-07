import React, { useState } from 'react';
import axios from 'axios';
import apiClient from '../services/api';
 
const Login = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        apiClient.get('/sanctum/csrf-cookie')
        .then(response => {
            apiClient.post('/login', {
                email: email,
                password: password
            }).then(response => {
                if (response.status === 204) {
                    console.log(response)
                    setUser(response.config.data)
                    props.login()
                }
            })
        });
    }

    // const handleRegister = (e) => {
    //     e.preventDefault();
    //     apiClient.get('/sanctum/csrf-cookie')
    //     .then(response => {
    //         apiClient.post('/register', {
    //             name: name,
    //             email: email,
    //             password: password
    //         }).then(response => {
    //             if (response.status === 204) {
    //                 console.log(response)
    //                 setUser(response.config.data)
    //                 props.login()
    //             }
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
            {/* <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
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
                <button type="submit">Register</button>
            </form> */}
            { props.loggedIn ?
                <div>WELCOME {user}!</div>
                : null
            }
        </div>
    );
}
 
export default Login;
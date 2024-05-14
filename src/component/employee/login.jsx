import React, { useState } from 'react';
// import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginSuccess } from '../../redux/login/login.action'
import { useDispatch } from 'react-redux';
import './login.css';

function Login() {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    //   const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleLogin = () => {
        // Simulating login logic, replace with actual authentication logic
        if (username === 'admin' && password === 'password') {
            //setCurrentUser(username);
            dispatch(loginSuccess(username));
            navigate("/");
        } else {
            alert('Invalid username or password');
        }
    };


    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-heading">Login</h1>
                <input type="text"
                    className="login-input"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <input
                    type="password"
                    className="login-input"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}


export default Login;
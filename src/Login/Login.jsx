// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Email:', email);
        console.log('Password:', password);

        navigate('/dashboard');
    };

    return (
        <div className="login">
            <div className="formLogin">
                <Link to="/">
                    <div className="close">
                        <div className="closeInput">x</div>
                    </div>
                </Link>
                <form onSubmit={handleSubmit}>
                    <h2>Sign In</h2>
                    <div className="input-box">
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <FaUser className="iconUser" />
                    </div>
                    <div className="input-box">
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <RiLockPasswordFill className="iconUser" />
                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <Link to="/forgot-password" className="forgotPass">
                            <p>Forgot password?</p>
                        </Link>
                    </div>
                    <button type="submit" className="btn">
                        Sign In
                    </button>
                    <div className="login-register">
                        <p>Don't have an account?</p>
                        <Link to="/register" className="register-link">
                            <h6>Sign Up</h6>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

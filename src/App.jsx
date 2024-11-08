// App.jsx
import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';
import './App.scss';

const App = () => {
    const location = useLocation();

    return (
        <div className="app">
            {location.pathname === '/' && (
                <>
                    <h1>Welcome to our page!</h1>
                    <div className="wrapper">
                        <div className="formboxLogin">
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default App;

// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import ForgotPassword from '../src/components/ForgotPassword/ForgotPassword';
import NewPaswword from '../src/components/NewPassword/NewPassword';
import User from './components/User/UserPage';
import Home from './components/Home/Home';

const App = () => {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="new-password" element={<NewPaswword />} />
                <Route path="profile" element={<User />} />
            </Routes>
        </div>
    );
};

export default App;

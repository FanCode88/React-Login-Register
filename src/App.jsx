// App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../src/components/Login/Login';
import Register from '../src/components/Register/Register';
import ForgotPassword from '../src/components/ForgotPassword/ForgotPassword';
import NewPaswword from '../src/components/NewPassword/NewPassword';
import User from './components/User/UserPage';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Communications from './components/Communications/Communications';
import InspiredDesign from './components/InspiredDesign/InspiredDesign';
import HappyCustomers from './components/HappyCustomers/HappyCustomers';

const App = () => {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/new-password" element={<NewPaswword />} />
                <Route path="/profile" element={<User />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route
                    path="/services/communications"
                    element={<Communications />}
                />
                <Route
                    path="/services/inspired-design"
                    element={<InspiredDesign />}
                />
                <Route
                    path="/services/happy-customers"
                    element={<HappyCustomers />}
                />
            </Routes>
        </div>
    );
};

export default App;

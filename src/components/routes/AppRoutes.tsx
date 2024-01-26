import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Register from '../../pages/register/Register';
import Login from '../../pages/login/Login';
import Logged from '../../pages/logged/Logged';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logged" element={<Logged />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

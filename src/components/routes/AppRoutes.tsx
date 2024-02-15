import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Register from '../../pages/register/Register';
import Login from '../../pages/login/Login';
import Logged from '../../pages/logged/Logged';
import { Provider } from 'react-redux';

const AppRoutes: React.FC = () => {
  return (
    <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logged" element={<Logged />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default AppRoutes;

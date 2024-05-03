import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Registration';
import Login from './components/Login';
import {ToastContainer} from 'react-toastify'
import Home from './components/Home';

const App = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      <ToastContainer position="bottom-right"/>
    </div>
  );
};

export default App;

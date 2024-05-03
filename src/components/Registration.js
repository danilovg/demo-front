import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/authSlice';
import {toast} from 'react-toastify'

const Register = () => {
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [login, setLogin] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')

  const dispatch = useDispatch();

  const handleSubmit = () => {
    try {
      dispatch(registerUser({email, login, password, fullName, phone}))
      setPassword('')
      setEmail('')
      setLogin('')
      setFullName('')
      setPhone('')
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          name="login"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Link 
          to='/login'
          className='flex justify-center items-center text-xs text-white'
        >
          Уже зарегистрированы ?
        </Link>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
};

export default Register;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../redux/auth/authSlice';
import { checkIsAuth } from '../redux/auth/authSlice';
import {toast} from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { status } = useSelector((state) => state.auth)
  const isAuth = useSelector(checkIsAuth)

  const dispatch = useDispatch();

  useEffect(() => {
    if (status) toast(status)
    if (isAuth) navigate('/')
}, [status, isAuth, navigate])

  const handleSubmit = () => {
    try {
        dispatch(loginUser({ email, password }))
    } catch (error) {
        console.log(error)
    }
}

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Login</button>
        <Link
          to='/register'
          className='flex justify-center items-center text-xs text-white'
        >
          Нет аккаунта ?
        </Link>
      </form>
    </div>
  );
};

export default Login;

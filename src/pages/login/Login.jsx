import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('email:', email);
      console.log('Password:', password);

      const response = await axios.post('http://localhost:8080/auth/login', {
        email,
        password,
      });

      setLoginStatus('Login Successfull');

      navigate('/');
    } catch (error) {
      console.error('Error during login: ', error.response ? error.response.data : error.message);
      setLoginStatus('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        type="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        placeholder="email"
      />
      <input
        className="login-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      {loginStatus && <p className="login-feedback">{loginStatus}</p>}
    </div>
  );
}

export default Login;

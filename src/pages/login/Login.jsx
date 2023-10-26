import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      setLoginStatus('Login successful!');

      navigate('/');
    } else {
      setLoginStatus('Invalid User');
    }
  };

  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Login Status:', loginStatus);

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="login-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
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
      <p className="register-link">Don't have an account? <Link to='/register'>Register</Link></p>
      {loginStatus && <p className="login-feedback">{loginStatus}</p>}
    </div>
  );
}

export default Login;

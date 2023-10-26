import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);

        if (password === confirmPassword) {
            setRegistrationStatus('Registration successful!');

            navigate('/login');
        } else {
            setRegistrationStatus('Passwords do not match');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <input
                className="register-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="register-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                className="register-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
            />
            <button className="register-button" onClick={handleRegister}>
                Register
            </button>

            {registrationStatus && <p className="register-feedback">{registrationStatus}</p>}
        </div>
    )
}

export default Register

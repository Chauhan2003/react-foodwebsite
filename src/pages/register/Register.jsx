import React, { useState } from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setaddress] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState('');

    const navigate = useNavigate();

    const handleRegister = async() => {
        try{
            console.log('email:', email);
            console.log('Password:', password);
            console.log('address:', address);

            const response = await axios.post('http://localhost:8080/auth/register', {
                email,
                password,
                address,
            });

            setRegistrationStatus('you are registered');
            navigate('/login');
        } catch(error){
            console.error('Error during registration: ', error.response ? error.response.data : error.message);
            setRegistrationStatus('Error during registration');
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <input
                className="register-input"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="email"
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
                type="text"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="address"
            />
            <button className="register-button" onClick={handleRegister}>
                Register
            </button>

            {registrationStatus && <p className="register-feedback">{registrationStatus}</p>}
        </div>
    )
}

export default Register

import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import ContactUs from './pages/contactus/ContactUs';
import Story from './pages/ourstory/Story';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/story' element={<Story />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App

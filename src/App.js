import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Hero from './section/hero/Hero';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Hero />} />
    </Routes>
  )
}

export default App

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Project from './pages/Project'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

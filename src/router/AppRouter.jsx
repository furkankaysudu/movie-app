import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from "../pages/home/Home"

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default AppRouter
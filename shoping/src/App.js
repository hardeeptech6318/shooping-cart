import React from 'react'
import { Route, Routes } from "react-router-dom"
import Navbar from './conponent/Navbar'
import Home from './conponent/Home'
import Cart from './conponent/Cart'


function App() {
  return (
    <>
    <Navbar/>
    

  <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cart" element={ <Cart/>} />
    
    </Routes>
    
    </>
  )
}

export default App
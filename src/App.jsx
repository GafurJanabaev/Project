import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Login from "./components/Navbar/Login/Login"
import Register from "./components/Navbar/Register/Register"

function App() {

  return (
   <div>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
   </div>
  )
}

export default App

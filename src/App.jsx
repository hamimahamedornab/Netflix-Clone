import React from 'react'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Home/Login/Login';
import Player from './pages/Home/Player/Player';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
        
      </Routes>
    </div>
  )
}

export default App

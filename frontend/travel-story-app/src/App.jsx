import React from 'react'
import { BrowserRouter,Route,Route,Routes,Navigate, Router } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp'

const App = () => {
  return (
    <div>
     <div>
      <Router>
        <Routes>
            <Route path ="/dashboard" exact element ={<Home/>} />
            <Route path ="/" exact element ={<Login/>} />
            <Route path ="/signup" exact element ={<SignUp/>} />
        </Routes>
      </Router>
    </div>
    </div>
  )
}

export default App

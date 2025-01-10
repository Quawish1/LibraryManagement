import React, { useState } from 'react'
import '../assets/Styles/Landingpage.css'
import Admin from './Admin/Admin'
// import {NavLink} from 'react-router-dom'
import UserLogin from './Users/UserLogin'

const LandingPage = () => {
    let[bool, setBool] = useState(true)
    let handlebtn = ()=>{
        setBool(!bool)
    }
  return (
    <>
    <div className="landingpage">
      <div className="heading">Welcome to the Libuno</div>
        <div className="login-container">
            <div className="header">Login Page</div>
            <div className='btn-box'>
            <button onClick={handlebtn} className={bool?"btn1":"btn2"}>{bool?"Admin":"User"}</button>
            </div>
            <div className="form-box">
              {bool?<Admin/>:<UserLogin/>}
        
              
            </div>
        </div>
    </div>
    </>
  )
}

export default LandingPage
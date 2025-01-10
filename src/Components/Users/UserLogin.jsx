import React, { useRef, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserLogin = () => {
    let navigate = useNavigate()

    let formData = useRef()

    let [users, setUsers] =useState([])

    let fetchUser = async () =>{
    let userData = await axios.get(`http://localhost:4000/users`)
    setUsers(userData.data)
  }
  fetchUser()

     let userEmail = users.map((elem)=>{
     return elem.email
     })

 

  let handleLogin = (e) =>{
    e.preventDefault()

    let emailVal = formData.current[0].value
    let passVal = formData.current[1].value
  
    let email = userEmail.includes(emailVal)
    let password = (passVal === "user123")

    if(email && password){
        navigate("/userportal")
    }else{
        alert("invalid entry")
    }
  }
 



  return (
    <>
        <div className="user-login">
            <div className="header">User Login Page</div>
        <form ref={formData} onSubmit={handleLogin}  action="">
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password' />

                <button className='login-btn'>User Login</button>
              </form>
        </div>
    </>
  )
}

export default UserLogin
import React from 'react'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'

const Admin = () => {
    let adminForm = useRef()
    let navigate = useNavigate()
    
    let handleAdmin = (e)=>{
        e.preventDefault()
        
        let adminEmail = adminForm.current[0].value
        let adminPassword = adminForm.current[1].value

        let adminCredential = {
                admin : "admin@gmail.com",
                password : "admin123"
        }
        
        let {admin,password} = adminCredential

        if(adminEmail === admin && adminPassword === password){
           navigate("/adminportal")
        }else{
            alert("invalid entry")
        }
    }
  return (
    <>
        <div className="admin-login">
            <div className="header">Admin Login Page</div>
        <form ref={adminForm} onSubmit={handleAdmin}>
                <input type="email" placeholder='Enter Email'/>
                <input type="password" placeholder='Enter Password' />
                <button className='login-btn'>Admin User</button>
              </form>
        </div>
    </>
  )
}

export default Admin
import React from 'react'
import '../assets/Styles/Navbar.css'
import {NavLink, useLocation} from 'react-router-dom'
import logo from '../assets/images/libraray-logo.webp'

const Navbar = () => {
    let loc = useLocation()
    let bool = loc.pathname.startsWith("/adminportal")
  return (
    <> 
       
        <div className="navbar">
            <div className="logo-container">
                <img src={logo} alt="" />
            </div>
            <div className="links-container">

                {  bool?
                    <ul>
                    <li><NavLink to="/adminportal/" >Home</NavLink></li>
                    <li><NavLink to="/adminportal/books" >Books</NavLink></li>
                    <li><NavLink to="/adminportal/addbooks" >Add Books</NavLink></li>
                    <li><NavLink to="/adminportal/users" >Users</NavLink></li>
                    <li><NavLink to="/adminportal/addusers" >Add Users</NavLink></li>
                    <li><NavLink to="/">Logout</NavLink></li>
                </ul>
                :
                <ul>
                <li><NavLink to="/userportal/" >Home</NavLink></li>
                <li><NavLink to="/userportal/books" >Books</NavLink></li>
                <li><NavLink to="/userportal/users" >Users</NavLink></li>
                <li><NavLink to="/userportal/cartitems" >Cart Items</NavLink></li>
                <li><NavLink to="/">Logout</NavLink></li>
            </ul>
                }
                
            </div>
        </div>
    </>
  )
}

export default Navbar
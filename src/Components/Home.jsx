import React from 'react'
import '../assets/Styles/Home.css'
// import {NavLink} from 'react-router-dom'
import {useNavigate, useLocation} from "react-router-dom"

const Home = () => {
  let loc = useLocation()
  let bool = loc.pathname.startsWith("/adminportal")

  let navigate = useNavigate()
    
    let enterAdminBooks =()=>{
      let redirect = bool? "/adminportal/books" : "/userportal/books"
        navigate(redirect)
    }

    
  return (
    <>  
  
        <div className="home">
            
        <div className="right">
          <h1>Find Your Books <br />  At Our Library📚</h1>
          <button className='home-btn' onClick={enterAdminBooks} >Books</button>
        </div>
        </div>
  
        
        
        
    </>
  )
}

export default Home
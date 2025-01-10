import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from '../Navbar'
import Home from '../Home'
import Books from '../Books'
import Users from '../Users'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import AddUsers from './AddUsers'

const AdminPortal = () => {
  return (
    <>
        <div className="adminportal">
             <Navbar/>
             <Routes>
                <Route exact element={<Home/>} path='/'/>
                <Route element={<Books/>} path='/books'/>
                <Route element={<ReadBooks/>} path='/readbooks/:id'/>
                <Route element={<AddBooks/>} path='/addbooks'/>
                <Route element={<Users/>} path='/users'/>
                <Route element={<AddUsers/>} path='/addusers'/>
             </Routes>
          
            
        </div>
    </>
  )
}

export default AdminPortal
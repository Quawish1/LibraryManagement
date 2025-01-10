import React from 'react'
import Navbar from '../Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import Users from '../Users'
import AddCart from './AddCart'

const UserPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route exact element={<Home/>} path='/'/>
      <Route  element={<Books/>} path='/books'/>
      <Route element={<ReadBooks/>} path='/readbooks/:id'/>
      <Route element={<Users/>} path='/users'/>
      <Route element={<AddCart/>} path='/cartitems'/>
      </Routes>
    </>
  )
}

export default UserPortal
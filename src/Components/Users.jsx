import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../assets/Styles/Users.css'
import {useLocation} from 'react-router-dom'

const Users = () => {
    let loc = useLocation()
    let bool = loc.pathname.startsWith("/adminportal")

    let [users, setUsers] = useState([])

    let fetchUser = async()=>{
        let fetchUserData = await axios.get("http://localhost:4000/users")
        setUsers(fetchUserData.data)
    }     
    fetchUser()

    let deleteUser = async (id,username) => {

        let bool = window.confirm(`Do you want to delete "${username}" user`)
        if(bool){
            await fetch(`http://localhost:4000/users/${id}`, { method: "Delete" });
            alert(`user is deleted`)
        }else{
            alert(`user is not deleted`)
        }}

  return (
    <>
        <div className="users">
            <h1>Users</h1>
            <div className="users-container">
                <table border={1}>
                    <thead className='users-row'>
                        <tr>
                            <th>Sl no</th>
                            <th>User Name</th>
                            <th>Contact</th>
                            {bool && <th>Email</th>}
                            {bool && <th>Password</th>}
                            <th>Date Of Birth</th>
                            <th>Age</th>
                            <th>Place</th>
                            {bool && <th>Delete</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((elem,index)=>{
                                let {id,username,contact,email,password,dob,place} = elem

                                let dateObj = new Date()
                                let age = dateObj.getFullYear() - dob.slice(0,4)
                                return(

                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{username}</td>
                                        <td>{contact}</td>
                                        {bool && <td>{email}</td>}
                                        {bool && <td>{password}</td>}
                                        <td>{dob}</td>
                                        <td>{age}</td>
                                        <td>{place}</td>
                                        {bool && <td><button onClick={()=>{deleteUser(id,username)}}>Delete</button></td>}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Users
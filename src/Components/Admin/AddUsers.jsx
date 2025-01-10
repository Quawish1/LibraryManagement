import React from 'react'
import '../../assets/Styles/AddUsers.css'
import { useRef } from 'react'

const AddUsers = () => {
    let UserFormData = useRef()
    

    let handleSubmit =(e)=>{
            e.preventDefault()
            
            let newUser = {
        
                username: UserFormData.current[0].value,
                contact :UserFormData.current[1].value,
                email: UserFormData.current[2].value,
                password:"user123",
                dob:UserFormData.current[4].value,
                place:UserFormData.current[5].value,
               
            }
            fetch(`http://localhost:4000/users`, {
                method :'POST',
                header : {"Content-Type" : "application/json"},
                body :JSON.stringify(newUser)
            })
            .then(() => {alert("User added successfully!")
                formData.current.reset()
            })
            .catch((error) => {
                console.error('Error adding User:', error);
            });

    }
  return (
    <>
    <div className="addusers">
        <h2>Add Users</h2>
        <div className="addusers-box">
        <div className="addusers-container">
            <form ref={UserFormData} onSubmit={handleSubmit} action="">
                <input required type="text" placeholder='Enter User Name' />
                <input required type="number" placeholder='Enter Contact No'/>
                <input required type="email" placeholder='Enter Email'/>
                <input required type="password" placeholder='Enter Password' disabled/>
                <input required type="date" placeholder='Enter DOB'/>
                <input required type="text" placeholder='Enter Place'/>
                <button>Add Users</button>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default AddUsers
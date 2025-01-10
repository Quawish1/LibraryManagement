import React from 'react'
import '../../assets/Styles/Addbooks.css'
import { useRef } from 'react'

const AddBooks = () => {
    let formData = useRef()
    
    let handleSubmit =(e)=>{
            e.preventDefault()
            
            let newBook = {
                id: Date.now().toString(),
                title :formData.current[0].value,
                isbn: formData.current[1].value,
                pageCount:formData.current[2].value,
                thumbnailUrl:formData.current[3].value,
                shortDescription:formData.current[4].value,
                longDescription:formData.current[5].value,
                status:formData.current[6].value,
                authors:formData.current[7].value,
                categories:formData.current[8].value
            }
            fetch(`http://localhost:4000/books`, {
                method :'POST',
                header : {"Content-Type" : "application/json"},
                body :JSON.stringify(newBook)
            })
            .then(() => {alert("Book added successfully!")
                formData.current.reset()
            })
            .catch((error) => {
                console.error('Error adding book:', error);
            });

    }
  return (
    <>
    <div className="addbooks">
        <h2>Add Books</h2>
        <div className="addbooks-box">
        <div className="addbooks-container">
            <form ref={formData} onSubmit={handleSubmit} action="">
                <input required type="text" placeholder='Enter Title' />
                <input required type="text" placeholder='Enter Reg No'/>
                <input required type="text" placeholder='Enter PageCount'/>
                <input required type="text" placeholder='Enter Image URL'/>
                <input required type="text" placeholder='Enter Short Desc'/>
                <input required type="text" placeholder='Enter Long Desc'/>
                <input required type="text" placeholder='Enter Status'/>
                <input required type="text" placeholder='Enter Author'/>
                <input required type="text" placeholder='Enter Categoris'/>
                <button>Add Books</button>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default AddBooks
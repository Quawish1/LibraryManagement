import React, { useRef } from 'react'
// import {useParams} from 'react-router-dom'
import '../../assets/Styles/Books.css'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'

const AddCart = () => {

    
    let [books, setBooks] = useState([])

    useEffect(() => {
        const fetchapi = async () => {
          try {
            const response = await fetch("http://localhost:4000/CartItems");
            const data = await response.json();
            setBooks(data);
          } catch (err) {
            console.error("Error fetching data:", err);
          }
        };
        fetchapi();
      }, []);

     let navigate = useNavigate()
      let adminReadmore =(id)=>{
        navigate(`/userportal/readbooks/${id}`)
    }

    let addBooks = ()=>{
        navigate(`/userportal/books`)
    }

      let deleteBook = async (id,title) => {
        let bool = window.confirm(`Do you want to delete "${title}" book`)
        if(bool){
            await fetch(`http://localhost:4000/CartItems/${id}`, { method: "Delete" });
            alert(`Book is deleted`)
            let updatedBooks = books.filter((book,index) => book.id!== id);
            setBooks(updatedBooks);
            if(updatedBooks.length === 0){
             alert("No book left, Please add your Books")
               
            }
        }
        else{
            alert(`Book is not deleted`)
        }
    }

  return (
    <>
    {books.length!==0? 
            <div className="books">
            <div className="heading"><h1>Cart Books</h1></div>
            <div className="container">
                {
                    books.map((elem)=>{
                    let {id, title,pageCount,thumbnailUrl,status,authors,categories} = elem

                    return(
                        
                        <div className="card">
                            <div className="card-inside">
                            <div className="left">
                            <div className="thumbnail">
                                <img src={thumbnailUrl} alt="" />
                            </div>
                            <div className='title'>{title}</div>
                            </div>

                            <div className="right">
                                <table className='books-table' style={{color:"white"}} border={1} >
                                    <thead >
                                        <tr>
                                            <th style={{fontSize:"10px", textAlign:"center"}} colSpan={2}>{title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>Categories :</th>
                                            <td>{categories}</td>
                                        </tr>
                                        <tr>
                                            <th>Author :</th>
                                            <td>{authors}</td>
                                        </tr>
                                        <tr>
                                            <th>Status :</th>
                                            <td>{status}</td>
                                        </tr>
                                        <tr>
                                            <th>Page Count :</th>
                                            <td>{pageCount}</td>
                                        </tr>

                                    </tbody>
                         
                                </table>
                                </div>
                            </div>

                            <div className="buttons">
                                        <button onClick={()=>{adminReadmore(id)}} className='books-btn1'>Read More</button>
                                                                            
                                          
                                         <button className='books-btn2' onClick={()=>{deleteBook(id,title)}} >Delete</button>
                                            
                                        
                                    
                                    </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    :

    <div className="books">
            <div className="heading"><h1>No Books</h1></div>
            <div className="container"> 
                        <div className="card1">
                            <div className="buttons1">
                                        <button onClick={addBooks} className='books-btn3'>Add Books</button>            
                        </div>
                        </div>
            </div>
        </div>
    }
     
    </>
  )
}

export default AddCart
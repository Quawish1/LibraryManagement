import React, { useState } from 'react'
import {useParams,useLocation} from 'react-router-dom'
import axios from 'axios'
import '../assets/Styles/readbook.css'

const ReadBooks = () => {
    // let loc = useLocation()
    // loc.pathname.startsWith("/adminportal/books/")

    let [bookData,  setBookData] = useState({})

    let params = useParams()
    let bookId = params.id
    // console.log(bookId);
    
    let fetchBookId = async()=>{
       let fetchBookById = await axios.get(`http://localhost:4000/books/${bookId}`)
       setBookData(fetchBookById.data);
       
    }
    fetchBookId()  
    
      let {title, isbn, pageCount, thumbnailUrl, shortDescription,longDescription,status, authors, categories} = bookData
  return (
    <>
     <div className="readbooks">
        <div className="readbooks-card">
            <div className="readbooks-card-inside">

                <div className="readbooks-left">
                    <div className="readbooks-image">
                        <img src={thumbnailUrl} alt="" />
                    </div>
                    
                    <div className="readbooks-title">{title}</div>
                </div>

                <div className="readbooks-right">
                    <div className="readbooks-top-title">{title}</div>
                    <div className="readbooks-regno">Reg No :{isbn}, Page Count:{pageCount}</div> <br />
                    <h1>Short Description</h1> <br />
                    <div className="readbooks-shortdescription">{shortDescription}</div> <br />
                    <h1>long Description</h1> <br />
                    <div className="readbooks-longdescription">{longDescription}</div> <br />

                    <div className="readbooks-footer">
                        <div className="readbooks-status"><h1> <b style={{textDecoration:"underline", color:"black", fontSize:"35px"}}>Status</b><br />{status}</h1></div>
                        <div className="readbooks-authors"><h1> <b style={{textDecoration:"underline", color:"black",fontSize:"35px"}}>Author</b><br />{authors}</h1></div>
                        <div className="readbooks-categories"><h1> <b style={{textDecoration:"underline", color:"black",fontSize:"35px"}}>Categories</b><br />{categories}</h1></div>
                    </div>
                </div>
            </div>
        
     </div>
     </div>
    </>
  )
}

export default ReadBooks
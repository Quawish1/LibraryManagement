import React, { useState, useEffect } from 'react';
import '../assets/Styles/Books.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Books = () => {
    let loc = useLocation();
    let bool = loc.pathname.startsWith("/adminportal");

    let [books, setBooks] = useState([]);
    let [filteredBooks, setFilteredBooks] = useState("");
    let [suggestions, setSuggestions] = useState([]);


    useEffect(() => {
        const fetchApi = async () => {
            try {
                let response = await fetch("http://localhost:4000/books");
                let apidata = await response.json();
                setBooks(apidata);
            } catch (err) {
                console.log("Error fetching the data:", err);
            }
        };
        fetchApi();
    }, []);

    let navigate = useNavigate();
    let adminReadmore = (id) => {
        bool
            ? navigate(`/adminportal/readbooks/${id}`)
            : navigate(`/userportal/readbooks/${id}`);
    };

    let deleteBook = async (id, title) => {
        let confirmDelete = window.confirm(`Do you want to delete "${title}" book?`);
        if (confirmDelete) {
            await fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" });
            alert(`Book "${title}" is deleted`);
            setBooks(books.filter(book => book.id !== id));
        } else {
            alert("Book is not deleted");
        }
    };

    let handleSubmit = (e) => {
        let newBook = {
            id: e.id,
            title: e.title,
            pageCount: e.pageCount,
            thumbnailUrl: e.thumbnailUrl,
            status: e.status,
            authors: e.authors,
            categories: e.categories,
        };

        fetch(`http://localhost:4000/CartItems`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBook),
        })
        .then(() => alert("Book added successfully!"))
        .catch((error) => console.error('Error adding book:', error));
    };

    let handleSearchChange = (e) => {
        let query = e.target.value;
        setFilteredBooks(query);

        if (query.trim() === "") {
            setSuggestions([]);
        } else {
            let filteredSuggestions = books.filter((book) =>
                book.title.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    };

    let filtered = books.filter((book) =>
        book.title.toLowerCase().includes(filteredBooks.toLowerCase())
    );

    return (
        <>
            <div className="books">
                <div className="heading"><h1>Books</h1></div>
                <div className="search-container">
                    <input type="text" placeholder="Search by title..." className="search-bar" value={filteredBooks}
                     onChange={handleSearchChange}/>
                    {suggestions.length > 0 && (
                        <ul className="suggestions-dropdown">
                            {suggestions.map((book, index) => (
                                <li key={index}  onClick={() => {setFilteredBooks(book.title) ; setSuggestions([])}}>
                                    {book.title}
                                </li>
                            ))}
                        </ul>
                    )
                    }
                </div>
                <div className="container">
                    {filtered.map((elem) => {
                        let { id, title, isbn, pageCount, thumbnailUrl, status, authors, categories } = elem;

                        return (
                            <div className="card" key={id}>
                                <div className="card-inside">
                                    <div className="left">
                                        <div className="thumbnail">
                                            <img src={thumbnailUrl} alt={title} />
                                        </div>
                                        <div className="title">{title}</div>
                                    </div>
                                    <div className="right">
                                        <table className="books-table" style={{ color: "white" }} border={1}>
                                            <thead>
                                                <tr>
                                                    <th style={{ fontSize: "10px", textAlign: "center" }} colSpan={2}>{title}</th>
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
                                                    <th>Reg No :</th>
                                                    <td>{isbn}</td>
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
                                    <button onClick={() => adminReadmore(id)} className="books-btn1">Read More</button>
                                    {bool ? (
                                        <button className="books-btn2" onClick={() => deleteBook(id, title)}>Delete</button>
                                    ) : (
                                        <button className="books-btn2" onClick={() => handleSubmit(elem)}>Add Cart</button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Books;

// // File: src/pages/BookDetails.jsx
// import React from 'react'
// import { useParams, Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'

// const BookDetails = () => {
//   const { id } = useParams()
//   const book = useSelector(state =>
//     state.books.books.find(b => b.id === id)
//   )

//   if (!book) return <p>Book not found</p>

//   return (
//     <div>
//       <h2>{book.title}</h2>
//       <p>Author: {book.author}</p>
//       <p>Description: {book.description}</p>
//       <p>Rating: {book.rating}</p>
//       <Link to='/books'>Back to Browse</Link>
//     </div>
//   )
// }
// export default BookDetails

// src/pages/BookDetails.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/BookDetails.css';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const book = books.find(book => book.id === id);

  if (!book) {
    return <div className="book-details-container">Book not found.</div>;
  }

  return (
    <div className="book-details-container">
      <img src={book.coverImage} alt={`${book.title} cover`} className="book-cover" />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <button onClick={() => navigate('/browse')} className="back-button">
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;

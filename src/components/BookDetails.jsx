
// src/pages/BookDetails.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/BookDetails.css';
import defaultCover from '../assets/default-cover.jpg'; // ✅ Step 1: import fallback image

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(state => state.books.books);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <div className="book-details-container">Book not found.</div>;
  }

   const coverImage = book.coverImage ? book.coverImage : defaultCover;
  
   return (
    <div className="book-details-container">
      {/* <img src={book.coverImage} alt={`${book.title} cover`} className="book-cover" /> */}
      <img src={coverImage} alt={`${book.title} cover`} className="book-cover" />
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Description:</strong> {book.description}
      </p>
      <p>
        <strong>Rating:</strong> {book.rating}
      </p>
      <button onClick={() => navigate("/")} className="back-button">
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;

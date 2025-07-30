// src/pages/BrowseBooks.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../data/books";
import "../styles/BrowseBooks.css";
// import booksData from "../data/books";

const BrowseBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    ...new Set(booksData.map((book) => book.category))
  ];

  return (
    <div className="browse-container">
      <h2>Browse Books</h2>
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="category-filters">
        {categories.map((cat, i) => (
          <Link key={i} to={`/Books/${cat}`} className="category-link">
            {cat}
          </Link>
        ))}
      </div>

      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>by {book.author}</p>
            <p>Category: {book.category}</p>
            <Link to={`/book/${book.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
        {filteredBooks.length === 0 && <p>No books found.</p>}
      </div>
    </div>
  );
};

export default BrowseBooks;

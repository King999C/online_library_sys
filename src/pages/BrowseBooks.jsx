// src/pages/BrowseBooks.jsx
import { Link } from "react-router-dom";
import booksData from "../data/books";
import "../styles/BrowseBooks.css";

const BrowseBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const filteredBooks = booksData.filter((book) => {
  const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        book.author.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;

  return matchesSearch && matchesCategory;
});

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
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`category-link ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
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

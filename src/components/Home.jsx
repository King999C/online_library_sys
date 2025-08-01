// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import defaultCover from "../assets/default-cover.jpg";

const categories = ["Fiction", "Non-Fiction", "Sci-fi"];

const popularBooks = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-fi",
    description: "A desert planet, a prophecy, and a young hero shaping the fate of the universe.",
    rating: 4.8,
    coverImage: defaultCover
  },
  {
    id: 2,
    title: "Neuromancer",
    author: "William Gibson",
    category: "Sci-fi",
    description: "A hacker is hired for one last job in a cyberpunk world of AIs and megacorporations.",
    rating: 4.4,
    coverImage: defaultCover
  },
  {
    id: 3,
    title: "Foundation",
    author: "Isaac Asimov",
    category: "Sci-fi",
    description: "A mathematician develops psychohistory to save a crumbling Galactic Empire.",
    rating: 4.6,
    coverImage: defaultCover
  },
  {
    id: 4,
    title: "Snow Crash",
    author: "Neal Stephenson",
    category: "Sci-fi",
    description: "Pizza delivery, sword fights, and virtual reality collide in this dystopian satire.",
    rating: 4.2,
    coverImage: defaultCover
  },
  {
    id: 5,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-fi",
    description: "An astronaut is stranded on Mars and must use science to survive.",
    rating: 4.7,
    coverImage: defaultCover
  },
  {
    id: 6,
    title: "Ender's Game",
    author: "Orson Scott Card",
    category: "Sci-fi",
    description: "A child genius is trained to lead Earth's defense against alien invaders.",
    rating: 4.6,
    coverImage: defaultCover
  },
  {
    id: 7,
    title: "Hyperion",
    author: "Dan Simmons",
    category: "Sci-fi",
    description: "Seven pilgrims travel to the distant world of Hyperion to face a deadly mystery.",
    rating: 4.5,
    coverImage: defaultCover
  },
  {
    id: 8,
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    category: "Sci-fi",
    description: "An envoy explores a planet where gender is fluid, challenging his worldview.",
    rating: 4.4,
    coverImage: defaultCover
  },
  {
    id: 9,
    title: "Ready Player One",
    author: "Ernest Cline",
    category: "Sci-fi",
    description: "A teen hunts for an Easter egg in a VR world filled with 80s nostalgia.",
    rating: 4.3,
    coverImage: defaultCover
  },
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Online Library</h1>
      <section className="categories">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
              <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id} className="book-card">
              <img src={book.coverImage} alt={`${book.title} cover`} className="book-thumbnail" />
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Rating: {book.rating}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

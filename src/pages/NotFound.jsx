// src/pages/PageNotFound.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/PageNotFound.css";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="home-link">Go Back Home</Link>
    </div>
  );
};

export default PageNotFound;

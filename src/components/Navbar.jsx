// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">📚 Online Library</div>
//       <ul className="navbar-links">
//         <li>
//           <NavLink to="/" exact="true" activeclassname="active">
//             Home
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/browse" activeclassname="active">
//             Browse Books
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/add" activeclassname="active">
//             Add Book
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">📚 Online Library</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact="true" activeclassname="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" activeclassname="active-link">
            Browse Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-book" activeclassname="active-link">
            Add Book
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

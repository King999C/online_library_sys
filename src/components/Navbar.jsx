// export default Navbar;
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Online Library</div>
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

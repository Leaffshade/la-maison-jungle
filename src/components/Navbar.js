import React from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
import "../App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="lmj-banner">
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
      </div>

      <ul className="navbar_links">
        <li className="navbar_item slideInDown-1">
          <a href="/" className="navbar_link">
            Home
          </a>
        </li>
        <li className="navbar_item slideInDown-2">
          <a href="/" className="navbar_link">
            Booking
          </a>
        </li>
        <li className="navbar_item slideInDown-3">
          <a href="/" className="navbar_link">
            My Account
          </a>
        </li>
        <li className="navbar_item slideInDown-4">
          <a href="/" className="navbar_link">
            Admin
          </a>
        </li>
        <li className="navbar_item slideInDown-5">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>

      {
        <div className="search">
          <input type="text" id="input_search" placeholder="Search..." />
          {<button>Search</button>}
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      }

      <button className="navbar_burger" onClick={handleShowLinks}>
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger-menu">
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {isOpen && (
        <ul className="menu-list">
          <li>
            <Link to="/">Fresh Start</Link>
          </li>
          <li>
            <Link to="/login">Login Page</Link>
          </li>
          <li>
            <Link to="/home">Home Page (if logged in)</Link>
          </li>{" "}
          {/* Updated this line */}
          <li
            className="logout"
            onClick={() => {
              setIsOpen(false);
              window.location.href = "/login";
            }}
          >
            Log Out
          </li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;

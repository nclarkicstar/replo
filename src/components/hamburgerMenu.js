import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="logo-image">
      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzUiIHZpZXdCb3g9IjAgMCA3NSA3NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTc1IDBIMFY3NUg3NVYwWiIgZmlsbD0iIzAwNTJDQyIvPgo8cGF0aCBkPSJNMzQuNDA5NiA0Mi45MTY3TDI5LjU0ODUgNjcuMjkxN0w0MC42MjQ5IDQyLjkxNjdIMzQuNDA5NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02Ny44NDczIDI4Ljg4ODlMNDUuNzY0IDI0LjM0MDNMNDguMTU5OCA3LjcwODMxTDM5LjU0ODcgMjQuMzQwM0wxMS4wNzY1IDI4Ljg4ODlINjcuODQ3M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xMS4wNDE2IDMxLjc3MDhIMTQuNzIyMkwxMy4zNjggMzcuNTM0N0wxNy41IDMxLjc3MDhIMjEuMTgwNUwxNy4xMTggNDAuMjc3OEgxNC44OTU4TDE4LjQwMjcgMzMuMTU5N0wxMi45ODYxIDQwLjI3NzhIMTAuODY4TDEyLjM5NTggMzMuMDkwM0w4Ljk5MzAxIDQwLjI3NzhINi45NDQ0TDExLjA0MTYgMzEuNzcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMi44NDcyIDMxLjgwNTVIMjkuMjAxM0wyOC40Mzc0IDMzLjQzNzVIMjQuNDA5N0wyMy41NDE2IDM1LjIwODNIMjcuMzYxMUwyNi41NjI0IDM2LjgwNTVIMjIuNzc3N0wyMS45MDk3IDM4LjYxMTFIMjYuMDQxNkwyNS4yNDMgNDAuMjc3OEgxOC43ODQ3TDIyLjg0NzIgMzEuODA1NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOS43NTcgMzguNjQ1OEgzMC44NjgxQzMyLjQzMDYgMzguNjQ1OCAzNC4wNjI2IDM4LjAyMDggMzUuMDY5NSAzNi4wNDE2QzM2LjU2MjYgMzMuMDkwMyAzNC42MTgxIDMzLjQwMjggMzMuMzMzNCAzMy4zNjhIMzIuMjkxN0wyOS43NTcgMzguNjQ1OFpNMzAuNzI5MiAzMS43NzA4SDM0LjMwNTZDMzUuMzEyNiAzMS43NzA4IDM2LjU5NzMgMzEuODc1IDM3LjE4NzYgMzIuNDY1M0MzOC4wMjA5IDMzLjMzMzMgMzcuNzA4NCAzNC43MjIyIDM3LjA4MzQgMzUuOTcyMkMzNi4xODA2IDM3Ljg0NzIgMzQuOTMwNiAzOS4yMzYxIDMyLjg4MiAzOS44OTU4QzMxLjg0MDQgNDAuMjA4MyAzMC44MzM0IDQwLjIwODMgMzAuMjQzMSA0MC4yMDgzSDI2LjY2NjdMMzAuNzI5MiAzMS43NzA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQwLjQ1MTUgMzEuNzcwOEg0Mi44NDczTDM5LjU4MzQgMzguNjExMUg0Mi45NTE1TDQyLjE1MjkgNDAuMjc3OEgzNi4zODlMNDAuNDUxNSAzMS43NzA4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTQ3LjU2OTQgMzEuNzcwOEg1MEw0NS45MDI3IDQwLjI3NzhINDMuNDcyMkw0Ny41Njk0IDMxLjc3MDhaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNTEuNTYyNiAzMS43NzA4SDU0Ljc5MTdMNTQuNjE4MSAzOC4xMjVMNTcuNjM4OSAzMS43NzA4SDU5LjY4NzVMNTUuNjI1MSA0MC4yNzc4SDUyLjQ2NTNMNTIuNzA4NCAzMy42ODA1TDQ5LjU0ODcgNDAuMjc3OEg0Ny40NjUzTDUxLjU2MjYgMzEuNzcwOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik02MS4zNTQyIDMxLjgwNTVINjcuNzQzMUw2Ni45NDQ1IDMzLjQzNzVINjIuOTE2N0w2Mi4wNDg3IDM1LjIwODNINjUuODY4MUw2NS4xMDQyIDM2LjgwNTVINjEuMjg0OEw2MC40MTY3IDM4LjYxMTFINjQuNTQ4N0w2My43NTAxIDQwLjI3NzhINTcuMjkxN0w2MS4zNTQyIDMxLjgwNTVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K">

      </img>
    <div className="hamburger-menu">
      <button className="hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰ Menu
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
    </div>
  );
};

export default HamburgerMenu;

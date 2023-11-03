// welcomepage.js
import React from "react";
import HamburgerMenu from "./hamburgerMenu";
import "./loginBox.css"; // Reuse the CSS for the button styling

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <button
          className="login-button"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
        <HamburgerMenu />
      </header>
      <h1>Welcome to our tool!</h1>
      <p>This tool is made in React by TechBridge.</p>
    </div>
  );
};

export default WelcomePage;

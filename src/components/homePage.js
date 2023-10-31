import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import "./homePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>TechBridge</h1>
        <HamburgerMenu />
      </header>

      <main className="home-content">
        <h2>Welcome to Our HomePage</h2>
        <p>
          This is our homepage! Here you'll find the option to audit and create
          templates for scorecards
        </p>
        <div className="home-buttons">
          <Link to="/createTemplate" className="home-button">
            Create Template
          </Link>
          <Link to="/fillScorecard" className="home-button">
            Fill Scorecard
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

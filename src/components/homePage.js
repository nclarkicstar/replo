import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./hamburgerMenu";
import "./homePage.css";

const HomePage = () => {
  return (
    <div>
      <HamburgerMenu />
    <div className="home-page">
      {/* <header className="home-header">
        <h1>ScoreCard</h1>
        
      </header> */}

      <main className="home-content">
        <h2>Medline ScoreCard Tool</h2>
        <div className="home-page-image">
          <img className="image-style" src="https://www.medline.com/wp-content/uploads/2023/05/home-banner-may-2023.webp"/>
        </div>
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
    </div>
  );
};

export default HomePage;

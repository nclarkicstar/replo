// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LoginPage from "./components/loginPage";
import WelcomePage from "./components/welcomePage";
import HomePage from "./components/homePage"; // Import HomePage

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/login"
              element={
                isLoggedIn ? (
                  <Navigate to="/home" />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              }
            />
            <Route
              path="/home"
              element={
                isLoggedIn ? (
                  <HomePage /> // Point to HomePage here
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

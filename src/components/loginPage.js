import React from "react";
import HamburgerMenu from "./hamburgerMenu";
import LoginBox from "./loginBox";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      <HamburgerMenu />
      <LoginBox onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;

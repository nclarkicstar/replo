import React, { useState } from "react";
import "./loginBox.css";

const LoginBox = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    // You can perform validation here before calling onLogin
    onLogin({ username, password });
  };

  return (
    <div className="login-box-main-div">
      
    <div className="login-box">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
    </div>
  );
};

export default LoginBox;

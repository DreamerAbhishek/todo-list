import React, { useState, useContext } from "react";
import { AuthContext } from "../Middleware/Auth";
import "../scss/Login.scss";

const LoginForm = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
    onClose();
  };

  return (
    <div className={isOpen ? "loginForm" : "login"}>
      <>
        {" "}
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </>
    </div>
  );
};

export default LoginForm;

import React, { useContext } from "react";
import { AuthContext } from "../Middleware/Auth";
import "../scss/Header.scss";

const Header = ({ onOpen, loginForm }) => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <div>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={loginForm}>Login</button>
        )}
        <button onClick={onOpen}>Add</button>
      </div>
    </header>
  );
};

export default Header;

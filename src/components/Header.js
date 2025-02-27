import React from "react";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <header className="app-header">
      <div className="container">
        <h1 className="app-title">
          <FaTasks />
          Task Manager
        </h1>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="container">
        <p>© {currentYear} Task Manager. Created by Ankit Kumar Gupta.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <img src="/images/logo.svg" alt="Logo" />
      </div>

      <div className="navbar-link">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;

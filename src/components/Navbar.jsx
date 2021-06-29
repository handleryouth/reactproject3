import React, { useState } from "react";
import Media from "react-media";

function Navbar() {
  const [state, setState] = useState(false);

  function addMenu() {
    setState((prevState) => !prevState);
  }

  return (
    <div className="navbar">
      <div className="navbar-image">
        <img src="/images/logo.svg" alt="Logo" />
      </div>

      <Media query="(max-width: 554px)">
        {(matches) => {
          return matches ? (
            <div>
              <i onClick={addMenu} class="fas fa-bars burger-icon"></i>
            </div>
          ) : (
            <div className="navbar-link">
              <a href="">About</a>
              <a href="">Services</a>
              <a href="">Projects</a>
              <button>Contact</button>
            </div>
          );
        }}
      </Media>

      <div
        className={`additionmenu navbaradd ${
          state ? "slide-in-top " : "slide-out-top"
        }`}
      >
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <button>Contact</button>
      </div>
    </div>
  );
}

export default Navbar;

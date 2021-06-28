import React, { useState } from "react";
import Media from "react-media";

function Navbar() {
  const [state, setState] = useState(false);

  const navbaradd = {
    position: "absolute",
    top: "200%",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
    padding: "2rem 0",
  };

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
        className="additionmenu"
        style={state ? navbaradd : { display: "none" }}
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

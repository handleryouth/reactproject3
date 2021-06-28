import React from "react";

function SidebySide(props) {
  return (
    <div className={props.class}>
      <div className="description-container">
        <div className="description">
          <h1>{props.header}</h1>
          <p>{props.paragraph}</p>
          <div className="underline-link">
          <a href="">Learn More</a>
          </div>
          
        </div>
      </div>

      <div className="image-container">
        <img className="image" src={props.background} alt="Illustration" />
      </div>
    </div>
  );
}

export default SidebySide;

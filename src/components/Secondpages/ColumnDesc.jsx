import React from "react";

function ColumnDesc(props) {
  return (
    <div className={`${props.addclass ? props.addclass : ""} column`}>
      <img class="column-image"src={props.background} alt="Background Illustration" />
      <div className="column-description">
        <h1>{props.header}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}


export default ColumnDesc;

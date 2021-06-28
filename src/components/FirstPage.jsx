import React from "react";
import Media from "react-media";

function FirstPage() {
  return (
    <div className="firstpage-container">
      <Media query="(max-width: 533px)">
        {(matches) => {
          return matches ? (
            <img
              className="first-image"
              src="/images/mobile/image-header.jpg"
              alt="Background Header"
            />
          ) : (
            <img
              className="first-image"
              src="/images/desktop/image-header.jpg"
              alt="Background Header"
            />
          );
        }}
      </Media>

      <h1 className="first-header">We are creatives</h1>
    </div>
  );
}

export default FirstPage;

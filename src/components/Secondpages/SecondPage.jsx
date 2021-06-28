import React, { useState, useEffect } from "react";
import SidebySide from "./SidebySide";
import ColumnDesc from "./ColumnDesc";

function SecondPage() {
  const [condition, setCondition] = useState(false);

  var screenwidth;

  window.addEventListener("resize", function () {
    screenwidth = window.innerWidth;
    if (screenwidth <= 553) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  });

  useEffect(() => {
    if (window.innerWidth <= 553) {
      setCondition(true);
    } else {
      setCondition(false);
    }
  });

  return (
    <div>
      <div>
        <SidebySide
          header="Transform your brand"
          paragraph="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
          background={
            condition
              ? "/images/mobile/image-transform.jpg"
              : "/images/desktop/image-transform.jpg"
          }
          class="container"
        />

        <SidebySide
          header="Stand out to the right audience"
          paragraph="Using a collaborative formula of designers, researchers, photographers, 
        videographers, and copywriters, we’ll build and extend your brand in digital places. "
          background={
            condition
              ? "/images/mobile/image-stand-out.jpg"
              : "/images/desktop/image-stand-out.jpg"
          }
          class="reverse-container"
        />
      </div>

      <div className="column-container">
        <ColumnDesc
          header="Graphic design"
          paragraph="Great design makes you memorable. We deliver artwork that underscores 
        your brand message and captures potential clients’ attention."
          background={
            condition
              ? "/images/mobile/image-graphic-design.jpg"
              : "/images/desktop/image-graphic-design.jpg"
          }
        />

        <ColumnDesc
          header="Photography"
          paragraph="Increase your credibility by getting the most stunning, 
        high-quality photos that improve your business image."
          background={
            condition
              ? "/images/mobile/image-photography.jpg"
              : "/images/desktop/image-photography.jpg"
          }
        />
      </div>
    </div>
  );
}

export default SecondPage;

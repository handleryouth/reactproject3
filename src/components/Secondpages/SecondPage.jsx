import React from "react";
import SidebySide from "./SidebySide";
import ColumnDesc from "./ColumnDesc";

function SecondPage() {
  return (
    <div>
      <div>
        <SidebySide
          header="Transform your brand"
          paragraph="We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you."
          background="/images/desktop/image-transform.jpg"
          class="container"
        />

        <SidebySide
          header="Stand out to the right audience"
          paragraph="Using a collaborative formula of designers, researchers, photographers, 
        videographers, and copywriters, we’ll build and extend your brand in digital places. "
          background="/images/desktop/image-stand-out.jpg"
          class="reverse-container"
        />
      </div>

      <div className="column-container">
        <ColumnDesc
          header="Graphic design"
          paragraph="Great design makes you memorable. We deliver artwork that underscores 
        your brand message and captures potential clients’ attention."
          background="/images/desktop/image-graphic-design.jpg"
        />

        <ColumnDesc
          header="Photography"
          paragraph="Increase your credibility by getting the most stunning, 
        high-quality photos that improve your business image."
          background="/images/desktop/image-photography.jpg"
        />
      </div>
    </div>
  );
}

export default SecondPage;

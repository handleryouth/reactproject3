import React from "react";
import Content from "./Content";

function Testimonial() {
  return (
    <div className="testimonial">
      <h1>Client testimonials</h1>
      <div className="testimonial-content">
        <Content
          avatar="/images/image-emily.jpg"
          paragraph="We put our trust in Sunnyside and they delivered, 
                making sure our needs were met and deadlines were always hit."
          name="Emily R."
          job="Marketing Director"
        />

        <Content
          avatar="/images/image-thomas.jpg"
          paragraph="Sunnyside’s enthusiasm coupled with their keen 
        interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />

        <Content
          avatar="/images/image-jennie.jpg"
          paragraph="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          job="Business Owner"
        />
      </div>
    </div>
  );
}

export default Testimonial;

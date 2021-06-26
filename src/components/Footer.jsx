import React from "react";

function Footer() {
  return (
    <div className="footer">
      <img src="/images/logo.svg" alt="Logo" />
      <div className="footer-link">
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
      </div>

      <div className="social-media">
        <i class="fab fa-facebook-square fa-lg"></i>
        <i class="fab fa-instagram fa-lg"></i>
        <i class="fab fa-twitter fa-lg"></i>
        <i class="fab fa-pinterest fa-lg"></i>
      </div>
    </div>
  );
}

export default Footer;

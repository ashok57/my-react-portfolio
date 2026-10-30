import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="greeting">HELLO, I'M</p>

        <h1>Ashok Kumar</h1>

        <h2>React Developer (Software Developer)</h2>

        <p>
          I build modern, responsive and user-friendly
          web applications using React, JavaScript and CSS.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
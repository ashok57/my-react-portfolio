
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact-section" id="contact">


      <h2>Contact Me</h2>

      <div className="contact-container">

        <a
          href="mailto:ashokumar7000@gmail.com"
          className="contact-card"
        > 
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>ashokumar7000@gmail.com</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/ashok-kumar-4603a1207/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <div>
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </div>
        </a>

        <a
          href="https://github.com/ashok57"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <div>
            <h3>GitHub</h3>
            <p>Explore my projects</p>
          </div>
        </a>

      </div>

    </section>
  );
}

export default Contact;

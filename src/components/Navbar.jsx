
import React, { useState, useEffect } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    setActive(id);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">

      <h2 className="logo"></h2>

      <ul>
        {sections.map((item) => (
          <li key={item}>
            <button
              className={`nav-link ${
                active === item ? "active" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="nav-btn"
        onClick={() => setActive("contact")}
      >
        Hire Me
      </a>

    </nav>
  );
}

export default Navbar;

import React from "react";

function Projects() {
  const projects = [
    {
      name: "Employee Management System",
      description: "React application to manage employee details."
    },
    {
      name: "Notes Application",
      description: "Application to create and manage personal notes."
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio built using React."
    }
  ];

  return (
    <section className="section" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href="#contact">Know More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
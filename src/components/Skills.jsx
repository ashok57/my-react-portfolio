
import React from "react";

import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs
} from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" }
  ];

  return (
    <section className="section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div className="skill-card" key={skill.name}>
              <Icon
                className="skill-icon"
                style={{ color: skill.color }}
                aria-label={skill.name}
              />
              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;

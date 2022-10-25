import React from "react";
import Project from "./Ui/project";

export default function projects({ portfolioProjects }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="green">projects</span>
          </h1>
          <li className="projects">
            {portfolioProjects.map((project) => (
              <Project
                key={project.id}
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                paragraph={project.paragraph}
                id={project.id}
                github={project.github}
                url={project.url}
              />
            ))}
          </li>
        </div>
      </div>
    </section>
  );
}

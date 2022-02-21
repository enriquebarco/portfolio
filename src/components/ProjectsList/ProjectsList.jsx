import React from 'react';
import data from "../../data/projects";
import Project from "../Project/Project";

export default function ProjectsList() {
  return (
    <section className="project-list">
        {data.map(project => {
            return <Project 
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                image={project.image}
                stack={project.stack}
                link={project.link}
            />
        })}
    </section>
  )
}

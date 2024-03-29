import React from 'react';
import { projects } from "../../data/projects";
import Project from "../Project/Project";
import "./ProjectsList.scss";

export default function ProjectsList() {
  return (
    <section className="project-list">
        {projects.map(project => {
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

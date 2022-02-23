import React from 'react';
import "./ProjectsIntro.scss";

export default function ProjectsIntro() {
  return (
    <div className="projects-intro">
        <h3 className="projects-intro__title">My Recent Work</h3>
        <p className="projects-intro__text">Here are a few of the projects I have worked on. Curious to learn more? 
            <a href="mailto:enrique.barco96@hotmail.com" className="project-intro__link"> Email me.</a>
        </p>
    </div>
  )
}

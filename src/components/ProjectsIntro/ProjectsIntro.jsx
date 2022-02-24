import React from 'react';
import "./ProjectsIntro.scss";

export default function ProjectsIntro() {
  return (
    <div className="projects-intro">
        <h3 className="projects-intro__title">My Recent Work</h3>
        <p className="projects-intro__text"><span className="break">Here are a few of the projects I have worked on, ranging from passion projects to startup ideas to full on businesses. Curious to learn more?</span> 
            <a href="mailto:enrique.barco96@hotmail.com" className="projects-intro__link">Email me</a>
        </p>
    </div>
  )
}

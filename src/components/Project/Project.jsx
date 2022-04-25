import React from 'react';
import uniqid from "uniqid";
import "./Project.scss";

export default function Project( { image, name, description, stack, link } ) {
  return (
    <div className="project">
        <img src={image} className="project__image" />
        <h4 className="project__name">{name}</h4>
        <h5 className="project__description">{description}</h5>
        <div className="project__stack-container">
          {stack.map(stack => {
            return <img key={uniqid()} src={stack} alt="tech-stack icon" className="project__stack-icon" />
          })}
        </div>
        <a target="_blank" href={link} className="project__link">Learn More</a>
    </div>
  )
}

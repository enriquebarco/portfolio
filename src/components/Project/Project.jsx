import React from 'react';
import "./Project.scss";

export default function Project( { image, name, description } ) {
  return (
    <div className="project">
        <img src={image} className="project__image" />
        <h4 className="project-name">{name}</h4>
        <h5 className="project-description">{description}</h5>
    </div>
  )
}

import React from 'react'

export default function Project( { image, name, description } ) {
  return (
    <div className="project">
        <img src={image} className="project-image" />
        <h4 className="project-name">{name}</h4>
        <h5 className="project-description">{description}</h5>
    </div>
  )
}

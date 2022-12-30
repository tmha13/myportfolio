import React from 'react'
import './ProjectBox.css'

export default function ProjectBox({icon, title, text, link}) {
  return (
    <div className="project-box">
      <img className='logo' src={icon} alt="react-logo" width="50px" height="50px"></img>
      <h3>{title}</h3>
      <p>{text} <a href={link} target="_blank" rel="noopener noreferrer">here.</a></p>
    </div>
  )
}

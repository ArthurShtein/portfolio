import React from "react";
import './Project.css'



function Project({ project }) {
  const { title, desc } = project;
  return (
    <div className='project'>
      <h1> {title} </h1>
      <p> {desc}</p>
    </div>
  );
}

export default Project;

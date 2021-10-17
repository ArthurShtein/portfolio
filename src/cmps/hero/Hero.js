import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <main>
      <div className='main-container'>
        <h1 className="hero-header"> Hi, I'm Arthur Shtein </h1>
        <p className='hero-p'>
          Specializing in developing beautiful single-page-applications using
          the latest web technologies and I love what I do. After finishing Full
          Stack Developers bootcamp in Coding Academy i'm continuously learning
          and developing my skills.
        </p>
        <button className='resume-btn'> Download Resume </button>
      </div>
    </main>
  );
}

export default Hero;

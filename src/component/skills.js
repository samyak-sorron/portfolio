import React from 'react';
import './skills.css'

const Skills = () => {
  return (
    <div name="skills" className="bg-my text-white d-flex justify-content-center">
      {/* Container */}
      <div className="container  text-center mt-5">
        <span className="d-inline-flex font-weight-semibold border-bottom border-3 border-primary">Skills</span>

        <div className="mb-7">
          
          <p className="mt-3 fs-5 text-center ">I enjoy diving into and learning new things. Here's a list of technologies I've worked with :</p>
        </div>
        <div className="row mb-5 attribute">
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black ">HTML</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">CSS</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">JavaScript</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">React</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">GitHub</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">Node.js</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">MongoDB</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">Python</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">Django</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">Next.js</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black ">MongoDB</p>
          </div>
          <div className="col-md-3">
            <p className="shadow-lg fs-5 rounded text-success bg-black">GraphQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

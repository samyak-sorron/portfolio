import React from 'react';
import './skills.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt,FaReact,FaNodeJs, FaPython } from "react-icons/fa";
import { BiLogoTailwindCss,BiLogoMongodb } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import { SiExpress,SiDjango } from "react-icons/si";
import { DiMysql } from "react-icons/di";

const Skills = () => {
  return (
    <div name="skills" className="mx-md-5 text-white d-flex justify-content-center">
      {/* Container */}
      <div className="text-center mt-5">
        <span className="d-inline-flex font-weight-semibold border-bottom border-3 border-primary">Skills</span>

        <div className="mb-7">
          
          <p className="mt-3 fs-5 text-center ">I enjoy diving into and learning new things. Here's a list of technologies I've worked with :</p>
        </div>
        <div className="row mb-5 gap-5 ms-md-5">
          <div className="col-md-3 description"><FaPython className='fs-1'/> Python
          </div>
          <div className="col-md-3 description"><TbBrandCpp className='fs-1'/>
          </div>
          <div className="col-md-3 description"><AiOutlineHtml5 className='fs-1'/> Java
          </div>
          <div className="col-md-3 description"><AiOutlineHtml5 className='fs-1'/>HTML
          </div>
          <div className="col-md-3 description"><FaCss3Alt className='fs-1'/>CSS
          </div>
          <div className="col-md-3 description"><BiLogoTailwindCss className='fs-1'/> TailwindCss
          </div>
          <div className="col-md-3 description"><BsBootstrap className='fs-1'/> BootStrap
          </div>
          <div className="col-md-3 description"><RiJavascriptLine className='fs-1'/> JavaScript
          </div>
          <div className="col-md-3 description"><FaReact className='fs-1'/> React
          </div>
          <div className="col-md-3 description"><FaNodeJs className='fs-1'/> Node.js
          </div>
          <div className="col-md-3 description"><SiExpress className='fs-1'/> Express.js
          </div>
          <div className="col-md-3 description"><SiDjango className='fs-1'/> Django
          </div>
          <div className="col-md-3 description"><BiLogoMongodb className='fs-1'/> MongoDB
          </div>
          <div className="col-md-3 description"><DiMysql className='fs-1'/> MySQL
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;

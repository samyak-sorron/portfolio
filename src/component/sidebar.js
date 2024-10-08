import React from 'react';
import './sidebar.css'
import {FaGithub,FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi'

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Content */}
      <div className="">
        {/* Social Handles */}
        <ul className="list-unstyled">
          <li>
            <a className='text-primary text-opacity-75' href="https://www.linkedin.com/in/samyak-sharma-9130ab1bb" title='LinkedIn'><FaLinkedin size={40}/></a>
          </li>
          <li>
            <a className='text-dark-emphasis' href="https://github.com/samyak-sorron" title='github'><FaGithub size={40}/></a>
          </li>
          <li>
            <a className='text-danger text-opacity-75' href="mailto:samyak.sharma.758@gmail.com" title="mail"><HiOutlineMail size={40}/></a>
          </li>
          <li>
            <a className='text-opacity-75' href="https://drive.google.com/file/d/1QmolzCNq_7wqSTdG-n2VLllM93RJ5cg7/view?usp=sharing" title="resume"><BsFillPersonLinesFill size={40}/></a>
          </li>
          
          {/* Add more social handles here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

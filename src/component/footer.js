import React from 'react'
import {FiLinkedin,FiGithub,FiInstagram,FiFileText} from 'react-icons/fi'
import {TbBrandLeetcode} from 'react-icons/tb'
import {SiCodechef} from 'react-icons/si'
import '../App.css'

const Footer = () => {
  return (
    <div className=' mt-5'>
    <hr/>
        <div className='container text-light d-flex justify-content-center mt-5'>
          {/* <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-5'>social handles</p> */}
        </div>
        <ul className='container text-light d-flex justify-content-around mb-5 list-unstyled' >
            <li className=''><a href="" className='text-light'><FiLinkedin/></a></li>
            <li><a href="" className='text-light'><FiGithub/></a></li>
            <li><a href="" className='text-light'><FiInstagram/></a></li>
            <li><a href="" className='text-light'><TbBrandLeetcode/></a></li>
            <li><a href="" className='text-light'><FiFileText/></a></li>
            <li><a href="" className='text-light'><SiCodechef/></a></li>
        </ul>
        <p className='text-light d-flex justify-content-center fs-6'> Living Learning and Upgrading</p>
        <i className='text-light d-flex justify-content-end fs-6'> @ 2023 Samyak Kr Sharma</i>
    </div>
  )
}

export default Footer
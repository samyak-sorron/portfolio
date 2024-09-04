import React from 'react'
// import { useState } from 'react';
import { FiExternalLink } from "react-icons/fi";import './work.css';

const Work = () => {

  return (
    <div className='bg-my'>
        <hr/>
        <div className='container text-light d-flex justify-content-center'>
          <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-5'>Projects</p>
        </div>  
        <div className='d-md-flex justify-content-evenly gap-3' >
          <div className="card sk mb-4" style={{"width": "18rem"}}>
            <img src={"https://www.techasoft.com/blog/2021/01/1609606508.png"} className="rounded-top " alt="lms"/>
            <p className='fs-6 text-center text-dark align-item-center'><h2 className='text-center'>Learning Management System</h2>Web-based application that operates as a comprehensive platform for creating, organizing, delivering, and managing educational content and training programs</p>
            <div className='layer rounded align-content-center text-center rounded-6'><a className='text-dark bg-light rounded-5 p-2 fs-6 fw-lighter ' href='https://github.com/samyak-sorron/Career-Developer-LMS'><FiExternalLink/></a>  </div>
          </div>
          <div className="card sk mb-4" style={{"width": "18rem"}}>
            
            <img src={"https://cre.org/wp-content/uploads/2023/03/shutterstock_1098044021-scaled.jpg"} className="rounded top" alt="hrms"/>
            <p className='fs-6 text-center text-dark '><h2 className='text-center'>House Rental Management System</h2>Web application that aims to create a seamless rental and purchasing experience for both property owners and tenants, enhancing overall operational efficiency in the housing industry.</p>
            <div className='layer rounded align-content-center text-center rounded-6'><a className='text-dark bg-light rounded-5 p-2 fs-6 fw-lighter ' href='https://github.com/samyak-sorron/Homestead'><FiExternalLink/></a>  </div>
          </div>
          </div>
          <div className='d-md-flex justify-content-evenly mt-3 mb-3' >
          <div className="card sk mb-4" style={{"width": "18rem"}}>
            <img src={"https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2022/08/Shutterstock_1040049118.png"} className="rounded-top mb-3" alt="finance"/>
            <p className='fs-6 text-center text-dark'><h2 className='text-center'>Finance Folio</h2>Collection of investments and holdings that encompass the assets like real estate, gold, stocks, etc., aiming to reduce risk and increase return.</p>
            <div className='layer rounded align-content-center text-center rounded-6'><a className='text-dark bg-light rounded-5 p-2 fs-6 fw-lighter ' href='https://github.com/samyak-sorron/FinanceFolio'><FiExternalLink/></a>  </div>
          </div>
          
        </div>
        <hr/>
        
    </div>
  )
}

export default Work
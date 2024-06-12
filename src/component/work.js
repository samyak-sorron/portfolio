import React from 'react'
// import { useState } from 'react';
import './work.css';

const Work = () => {

  return (
    <div className='bg-my'>
        <hr/>
        <div className='container text-light d-flex justify-content-center'>
          <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-5'>Projects</p>
        </div>  
        <div className='d-flex justify-content-evenly mb-3' >
          <div className="card sk" style={{"width": "18rem"}}>
            <img src={"https://www.techasoft.com/blog/2021/01/1609606508.png"} className="rounded-top " alt="lms"/>
            <p className='fs-6 text-center text-dark'><h2 className='text-center'>LMS</h2>Web-based application that operates as a comprehensive platform for creating, organizing, delivering, and managing educational content and training programs</p>
            {/* {h1 && <a className='btn fs-6 btn-info rounded  position-absolute start-50 top-50 translate-middle' href='https://github.com/samyak-sorron/Career-Developer-LMS'>repository</a>} */}
            <div className='layer rounded align-content-center text-center text-light'> hi </div>
          </div>
          <div className="card sk" style={{"width": "18rem"}}>
            
            <img src={"https://cre.org/wp-content/uploads/2023/03/shutterstock_1098044021-scaled.jpg"} className="rounded top" alt="hrms"/>
            <p className='fs-6 text-center text-dark '><h2 className='text-center'>Homestead</h2>Web-based application that operates as a comprehensive platform for creating, organizing, delivering, and managing educational content and training programs</p>
            {/* {h2 && <a className='btn fs-6 btn-info rounded  position-absolute start-50 top-50 translate-middle' href='https://github.com/samyak-sorron/Career-Developer-LMS'>repository</a>} */}
          </div>
          </div>
          <div className='d-flex justify-content-evenly mt-3 mb-3' >
          <div className="card sk" style={{"width": "18rem"}}>
            <img src={"https://www.techasoft.com/blog/2021/01/1609606508.png"} className="rounded-top " alt="lms"/>
            <p className='fs-6 text-center text-dark'><h2 className='text-center'>LMS</h2>Web-based application that operates as a comprehensive platform for creating, organizing, delivering, and managing educational content and training programs</p>
            {/* {h1 && <a className='btn fs-6 btn-info rounded  position-absolute start-50 top-50 translate-middle' href='https://github.com/samyak-sorron/Career-Developer-LMS'>repository</a>} */}
            {/* <div className='layer rounded align-content-center text-center text-light'> hi </div> */}
          </div>
          
        </div>
        <hr/>
        
    </div>
  )
}

export default Work
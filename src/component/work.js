import React from 'react'
import { useState } from 'react';

const Work = () => {
  let [h1,isHover1]=useState();
  let [h2,isHover2]=useState();
  return (
    <div className='bg-my'>
        <hr/>
        <div className='container text-light d-flex justify-content-center'>
          <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-5'>Projects</p>
        </div>    
        <div className='d-flex justify-content-around' >
          <div className="card shadow-lg" style={{"width": "25rem"}}  onMouseEnter={()=>isHover1(true)} onMouseLeave={()=>isHover1(false)}>
            <img src={"https://www.techasoft.com/blog/2021/01/1609606508.png"} className="card-img-top" alt="lms" style={{"height":"13rem", opacity: h1? '20%':'1'}}/>
            <p className='fs-6 text-center text-dark ' style={{opacity: h1? '20%':'1'}}>Web-based application that operates as a comprehensive platform for creating, organizing, delivering, and managing educational content and training programs</p>
            {h1 && <a className='btn fs-6 btn-info rounded  position-absolute start-50 top-50 translate-middle' href='https://github.com/samyak-sorron/Career-Developer-LMS'>repository</a>}
          </div>
          <div className='card shadow-lg' style={{"width": "25rem"}} onMouseEnter={()=>isHover2(true)} onMouseLeave={()=>isHover2(false)}>
            <img src={"https://yookkan.com/wp-content/uploads/2019/02/todolist-vert.png"} className="card-img-top" alt="Todo" style={{"height":"15rem", opacity: h2? '20%':'1'}}/>
            <p className='fs-6 text-center' style={{opacity: h2? '20%':'1'}}>web-based application to manage day to day task </p>
            {h2 && 
            <div className='fs-6 position-absolute start-50 top-50 translate-middle '>
            <a className='btn rounded bg-info' href='https://github.com/samyak-sorron/To'>repository</a>
            <a href='https://samyak-sorron.github.io/Todo/' className='btn rounded btn-info ml-5'>demo</a>
            </div>
            }
          </div>
          
        </div>
        <hr/>
        
    </div>
  )
}

export default Work
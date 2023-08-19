import React from 'react'

function Desctiption() {
  return (
    <div className="d-flex text-center align-items-center justify-content-center mt-4" style={{ "min-height": "50vh",}}>
      <div className="">
        <div className="container fs-6">
          <h3 className="mb-2 text-break">
            Hello Visitors. I'm <span className="description">Samyak Kumar Sharma</span><br/>
          </h3><hr/>
          An Undergraduate Computer Science and Engineering Student in{" "}<br/>
          <a href="https://juet.ac.in/" className="text-decoration-none description fs-4">
            Jaypee University of Engineering and Technology, M.P., INDIA.{" "}
          </a><br/>
          I have honed my skills as a full-stack web developer,<br/>proficient in front-end technologies as well as back-end frameworks.<br />
          <span className="d-block mt-3 mb-4 fs-3">Nice to have you on the page</span>          
        </div>
      </div>
    </div>
  );
}



export default Desctiption
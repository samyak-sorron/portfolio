import React from 'react'

function Desctiption() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
      <div className="container">
        <div className="content">
          <h1 className="mb-4">
            Hello Visitors. I'm <span className="description">Samyak Kumar Sharma</span>
            <br />
          </h1>
          An Computer Science and Engineering Student of{" "}
          <a href="https://juet.ac.in/" className="text-decoration-none text-black">
            Jaypee University of Engineering and Technology, M.P., INDIA.{" "}
          </a>
          I Design and build web Application,<br /> usually with Django and React.
          I'm also a Programmer, proficient in C++.
          <span className="d-flex justify-content-center mt-2">Nice to have you on the page</span>
          <br />
        </div>
      </div>
    </div>
  );
}



export default Desctiption
import React from 'react'

const Contact = () => {
  return (
    <div className='mt-5'>
        <div className='container text-light d-flex justify-content-center'>
          <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-3'>Contact Me</p>
        </div> 

        <form >
        
        <div className="row g-3 mt-2 my-element">
          <div className="col-md-6">
          <label className='text-light mb-1'>Email</label>
            <div className="">
              <input
                type="email"
                className="form-control rounded-1"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
          <label className='text-light mb-1'>Full Name</label>
            <div className="">
              <input
                type="text"
                className="form-control rounded-1"
                id="fullname"
                placeholder="Full Name"
                required
              />
            </div>
          </div>
          
          <div className="col-12">
          <label className='text-light mb-1'>Message</label>
            <div className="">
              <textarea
                className="form-control rounded-1"
                placeholder="Hey! Leave your message here."
                id="message"
                style={{ height: 100 }}
                required
              />
              
            </div>
          </div>
          <div className="col-3 float-right">
            <button className="btn btn-dark px-3 py-1 rounded-1" type="submit">
              Send 
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
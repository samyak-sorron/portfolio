import React from 'react'

const Contact = () => {
  return (
    <div className='mt-5'>
        <div className='container text-light d-flex justify-content-center'>
          <p className='d-inline-flex font-weight-semibold border-bottom border-3 border-primary mb-3'>Contact Me</p>
        </div> 

        <form className='text-light mb-3 mt-3 '>
            <div className='d-flex justify-content-center mb-2'>
                <div className='mx-3'>
                    <label className='fs-6 mb-2'>Full Name</label>
                    <input type='text' placeholder='John Doe' className='d-block fs-6 p-2 rounded-1 px-3'/>
                </div>
                <div className=''>
                    <label className='fs-6 mb-2'>Email</label>
                    <input type='text' placeholder='johndoe@gmail.com' className='d-block fs-6 p-2 px-3 pe-4 rounded-1'/>
                </div>
            </div>
            
            <div className='d-block' style={{"margin-left":"13.5vw"}}>
                <label className='fs-6 mb-2'>Message</label>
                <textarea className='d-block fs-6 p-2 px-3 rounded-1' placeholder='hello! you can write your message here.' rows={4} cols={56}/>
            </div>
            {/* <table className='justify-content-center'>
                <tr>
                <td>
                    <label className='fs-6 mb-2'>Full Name</label>
                    <input type='text' placeholder='John Doe' className='d-block fs-6 p-2 rounded-1 px-3'/>
                </td>
                <td>
                    <label className='fs-6 mb-2'>Email</label>
                    <input type='text' placeholder='johndoe@gmail.com' className='d-block fs-6 p-2 px-3 rounded-1'/>
                </td>
                </tr>
                <tr className=''>
                    <label className='fs-6 mb-2'>Message</label>
                    <textarea className='d-block fs-6 p-2 px-3 rounded-1' placeholder='hello! you can write your message here.' rows={4} cols={50}/>

                </tr>
            </table> */}
            
        </form>
    </div>
  )
}

export default Contact
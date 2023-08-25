import React from 'react'
import Typewriter from 'typewriter-effect';
import pfp from './1.jpg';
import hero from './hero-devices.svg'

const Header = () => {
  return (
    <header style={{"height":"100vh"}}>
      <div className='d-block'>
        <div className='d-sm-flex justify-content-evenly d-block'>
          <div className='d-inline' style={{"width":"55vh"}}>
            <pre className='mt-3'>
              <span className='text-info'>&lt;b&gt; Hello &lt;/b&gt;</span>
              <br/>
              <h3>My Self </h3>
              <h2 className='text-info'>Samyak kr Sharma</h2>
              <br/>
              <h3>I am a </h3>
              <span className='text-info'>
                <Typewriter options={{
                  loop:true,
                  delay:120,
                  autoStart:true,
                  strings:['Student','Full Stack Web Developer', 'Programmer', 'Problem Solver','Computer Science Student'],
                  }}
                />
              </span>                   
            </pre>
          </div>
          <div className='mt-3 d-none d-sm-inline'>
            <img src={pfp} alt='profile' style={{"maxWidth":"50vh", maxHeight:"50vh"}}/>
          </div>
        </div>
        <div className='row justify-content-center'>
          <img className='position-absolute bottom-0 text-center' src={hero} alt='desktop' style={{"width":"55vw"}}/>
        </div>
      </div>
    </header>
  )
}

export default Header
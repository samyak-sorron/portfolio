import React from 'react'
import Typewriter from 'typewriter-effect';
import pfp from './Capture.PNG';
import hero from './hero-devices.svg'

const Header = () => {
  return (
    <header>
      <div className='d-block'style={{"height":"100vh"}}>
        <div className='d-sm-flex justify-content-evenly d-block'>
          <div className='d-inline' style={{"width":"55vh"}}>
            <pre className=''>
              <span className='text-info'>&lt;b&gt; Hello &lt;/b&gt;</span>
              <br/>
              <h3>I am </h3>
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
          <div className=''>
            <img src={pfp} alt='profile' style={{"max-width":"50vh"}}/>
          </div>
        </div>
        <div className=''>
          <img className='d-sm-flex align-items-end justify-content-center d-none' src={hero} alt='desktop' style={{"width":"100vh"}}/>
        </div>
      </div>
    </header>
  )
}

export default Header
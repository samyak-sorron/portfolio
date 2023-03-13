import React from 'react'
import Typewriter from 'typewriter-effect';
import pfp from './Capture.PNG';
import hero from './hero-devices.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='self mt-5'>
          <div className='col-6 intro'>
            <pre className='disp'>
              <span className='cyan'>&lt;b&gt; Hello &lt;/b&gt;</span>
              <br/>
              <h3>I am </h3>
              <h2 className='cyan'>Samyak kr Sharma</h2>
              <br/>
              <h3>I am a </h3>
              <span className='cyan'>
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
          <div className='col-6 pfp'>
            <img src={pfp} alt='profile'/>
          </div>
        </div>
        <div className='hero'>
          <img className='desk' src={hero} alt='desktop'/>
        </div>
      </div>
    </header>
  )
}

export default Header
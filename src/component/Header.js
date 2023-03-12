import React from 'react'
import Typewriter from 'typewriter-effect';
import pfp from './Capture.PNG';
import hero from './hero-devices.svg'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='self'>
          <div className='col-6 intro'>
            <pre className=''>
              <span className='cyan'>
                &lt;b&gt;
                <Typewriter options={{
                  loop:true,
                  delay:120,
                  autoStart:true,
                  strings:[' Hello',' samyak',' Hi'],
                  }}
                />
                &lt;/b&gt;
              </span>
              <br/>
              <h3>Myself Samyak kr Sharma</h3>      
            </pre>
          </div>
          <div className='col-6 pfp'>
            <img src={pfp} alt='profile'/>
          </div>
        </div>
        <img src={hero} className='hero' alt='desktop'/>
      </div>
    </header>
  )
}

export default Header
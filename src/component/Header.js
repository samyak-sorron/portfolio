import React from 'react'
import Typewriter from 'typewriter-effect';
import pfp from './Capture.PNG';

const Header = () => {
  return (
    <header>
      <div className='container self'>
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
          MySelf Samyak kr Sharma       
        </pre>
        <img src={pfp} alt='hello guys'></img>
      </div>
    </header>
  )
}

export default Header
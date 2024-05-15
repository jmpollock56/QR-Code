import { useState } from 'react'
import "./App.css";



function App() {

  return (
    <div className="qr-container">
      <div className="code-container">
        <img src="/images/image-qr-code.png" alt="" />
      </div>
      <div className="text-container">
        <div className="main-text">Improve your front-end skills by building projects</div>
        <p className='lower-text'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  )
}

export default App

import React from 'react'
import '../styles/Main.css';

export default function Home() {
  return (
    <>
   
    <div className="hero-container">
    <div className="hero-content">
    {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8ivjh3jEgWs6uv7DMzADcxPcFaWP00H1hQ&usqp=CAU' alt="TutorHub Logo" className="app-logo" /> */}
      <div className="title">

      <h2>Welcome to</h2> <h1>Padh-AI</h1>
      </div>
         
      <p>Empowering Teachers. Inspiring Students.</p>
      <div className="cta-buttons">
        <button className="cta-button">Sign Up </button>
        <button className="cta-button">Sign In </button>
      </div>
    </div>
  </div>
  </>
  )
}

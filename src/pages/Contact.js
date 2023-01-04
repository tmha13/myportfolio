import React from 'react'
import Navigation from '../components/Navigation'

export default function Contact() {
  return (
    <div className='w3-row'>
      <Navigation></Navigation>
      <div className="w3-quarter">.</div>
      <form action='mailto:hamanhtrinh@gmail.com' 
            method='post'
            className='w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin w3-half'>
        <h2 className='w3-center'>Contact Me</h2>
        <div className='w3-row w3-section'>
          <div className='w3-rest'>
            <input className='w3-input w3-border' name='name' type='text' placeholder='Name'></input>
          </div>
        </div>

        <div className='w3-row w3-section'>
          <div className='w3-rest'>
            <input className='w3-input w3-border' name='email' type='text' placeholder='Email'></input>
          </div>
        </div>

        <div className='w3-row w3-section'>
          <div className='w3-rest'>
            <input className='w3-input w3-border' name='phone' type='text' placeholder='Phone Number'></input>
          </div>
        </div>

        <div className='w3-row w3-section'>
          <div className='w3-rest'>
            <textarea className='w3-input w3-border' name='message' rows='6' placeholder='Message'></textarea>
          </div>
        </div>
        <button className="w3-button w3-block w3-section w3-teal w3-ripple w3-padding">Send</button>
      </form>
      <div className="w3-quarter">.</div>
      
      <p className='w3-half w3-center w3-large w3-pink w3-margin'>Or do it the traditional way and reach me through: <br></br> hamanhtrinh@gmail.com</p>
    </div>
  )
}

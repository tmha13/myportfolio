import React from 'react'
import Navigation from '../components/Navigation'
import Cryppic from '../images/crypto1.png'

export default function Cryptogram() {
  return (
    <div>
      <Navigation></Navigation>
      <p className="title">Cryptogram</p>
      <div className='w3-content w3-display-container'>
        <img src={Cryppic} alt="Cryptogram" className='w3-image'></img>
        <div className='w3-content w3-text-dark-grey w3-xlarge'>
          <p>Cryptogram is a JavaFX application that lets people play cryptogram.</p>
          <p>The program follows the MVC architecture, with JavaFX taking care of the view and Java for Model and Controller.</p>
          <p>You can find the source code <a href="https://github.com/tmha13/cryptogram/tree/master/csc-335-project-3-tmha13-main">here</a></p>
        </div>   
      </div>
    </div>
  )
}

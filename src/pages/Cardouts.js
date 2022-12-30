import React from 'react'
import Navigation from '../components/Navigation'
import Cardpic from '../images/cardouts.png'

export default function Cardouts() {
  return (
    <div>
      <Navigation></Navigation>
      <p className="title">Cardouts</p>
      <div className='w3-content w3-display-container'>
        <img src={Cardpic} alt="Cardouts" className='w3-image'></img>
        <p>Cardouts is a multiplayer social deduction game where the players work together to find out the betrayer between them, before he/she managed to sabotage their work. You can find the full ruleset as well as the source codes <a href="https://github.com/CSC335-Fall2020/csc335-socialdeduction-hungtr-trinhmanhha-danhpham801-cperez4">here</a></p>
        <p>The interactive features of the game includes a set of cards players can choose to play, a set of voting buttons players can use to vote on potential betrayer, and a chatbar where players can discuss with each other.</p>
        <p>Cardouts is a collaboration project between me and 3 other classmates during Java Programming Class. It was fully developed in Java under MVC architecture. The user interface was implemented with JavaFX, while the multiplayer feature is implemented with Java Network.</p>
        <p>The current version of the game has some limitations. One notable lacking aspect is the actual multiplayer feature between multiple devices, as the course stopped at utilizing Java Network to interact between multiple applications in 1 device.</p>
      </div>
      
    </div>
  )
}

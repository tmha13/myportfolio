import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import v1 from '../images/vanilla1.png'
import v2 from '../images/vanilla2.PNG'
import v3 from '../images/vanilla3.PNG'
import v4 from '../images/vanilla4.png'
import v5 from '../images/vanilla5.PNG'


export default function Vanilla() {
  const images = [v1, v2, v3, v4, v5]
  const [current, setCurrent] = useState((0)) 

  const nextSlide = (offset) => {
    setCurrent((prev) => {
      if (prev + offset >= images.length) return 0
      if (prev + offset < 0) return images.length - 1
      return prev + offset
    })
  }

  return (    
    <div>
      <Navigation></Navigation>
      <p className="title">Vanilla - A TCG Discord Bot</p>
      <div className='w3-content w3-display-container'>
        {
          images.map((image, index) => (
            <img  src={image} 
                  alt={"vanilla" + index} 
                  className="mySlides w3-animate-opacity" 
                  key={index} 
                  style={index === current ? {display: "block", width: "100%"} : {display: "none", width: "100%"}}/>
          ))
        }

        <button className='w3-button w3-teal w3-display-left' onClick={() => nextSlide(-1)}>&#10094;</button>
        <button className='w3-button w3-teal w3-display-right' onClick={() => nextSlide(1)}>&#10095;</button>
      </div>
      <div className='w3-content w3-text-dark-grey w3-xlarge'>
        <p>Currently the biggest project I am a part of, Vanilla is an anime-based TCG discord bot which lets the users play the game by interacting with it from the chatbox, via slash commands.</p>
        <p>The objective of the game is to collect all the cards you like. The core method to do so is through a gacha system, where the users are given 4 chances everyday to roll for a random card from the database.
            There is no definite end to the game, however, as 20-30 new cards are added to the game every week, reaching over 1000 cards total in the database currently. This was made possible by a team behind, controlling and producing the contents of the game, as well as programmers like me who maintains the bot and produces new features as needed.</p>
        <p>The game isn't limited to just collecting either. There are multiple things the users can do with the bot, including checking all owners of a card, trading with another person, recycle a card they dont need for resources, use resources to buy and craft cards from special events, and many more utilities to help the game more user-friendly. </p>
        <p>The bot fully utilizes Discordjs API to interact with messages provided by the user. The code is fully developed in Javascript under Node.js environment, and manage the database using MongoDB through Mongoose.</p>
        <p>The source codes for the project is unfortunately private because the bot, as well as the game, is meant to be kept in one server only.</p>
      </div>
    </div>
      
  )
}

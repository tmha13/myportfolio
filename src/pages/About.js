import React from 'react'
import Navigation from '../components/Navigation'
import pfp from '../images/pfp.jpg'

export default function About() {
  return (
    <>
      <Navigation></Navigation>
      <div className="title">ABOUT ME</div>
      <div className="container">
        <img src={pfp} alt="Profile" className="pfp" />
        <div className="about-me">
          <ul>
            <li>An international student from Vietnam. I graduated from University of Arizona at the end of 2021 with a BS degree</li>
            <li>Currently pursuing a degree of cyber security in Pima Community College to broaden my knowledge</li>
            <li>I'm confident writing codes in Java, Javascript and C++. I have experiences with Nodejs, Expressjs, SQL, Mongoose for MongoDB, and React. 
              I'm currently focusing on self-teaching React to polish my front-end skill.</li>
            <li>I consider myself a minimalist, and I believe this portfolio of mine does a good job showing that.</li>
            <li>Outside of coding, I take great interest in card games, whether it be playing with cards or collecting them!
              I used to spend a lot of time on TCGs like YGO or Pokemon. Nowadays, I work on my own card game along with my group of friends.
              You can find out more about that project on my projects page!</li>
          </ul>
        </div>
        
      </div>
    </>
  )
}

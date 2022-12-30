import React from 'react'

import ProjectBox from '../components/ProjectBox';
import ReactLogo from '../components/React-icon.svg.png';
import NodeLogo from '../components/Node-icon.png'
import HTMLLogo from '../components/html.png'
import JavaLogo from '../components/java.png'
import Navigation from '../components/Navigation';

const magicText = "A simple game made with React. Deployed "
const vanillaText = "A TCG Discord bot made with Nodejs, Discordjs and Mongoose for MongoDB. Find out more "
const solitaireText = "A game designed to make the cards collected from Vanilla playable, purely in HTML and Javascript. Deployed "
const cardoutsText = "A multiplayer social deduction game fully coded in Java. Find out more "
const CryptogramText = "A cryptogram puzzle game coded in Java. Find out more "
const taskText = "A task manager application coded in Javascript, using Mongoose for MongoDB. Lacking a front-end, but is tested to fully work by Postman. Source code "


export default function Projects() {
  return (
    <div className="project">
      <Navigation></Navigation>
      <div className="title">PROJECT</div>
      <div className="row">
        <ProjectBox icon={ReactLogo} title={"Magic Match"} text={magicText} link="https://react-memory-game-lyart.vercel.app/"></ProjectBox>
        <ProjectBox icon={NodeLogo} title={"Vanilla"} text={vanillaText} link="/vanilla"></ProjectBox>
        <ProjectBox icon={HTMLLogo} title={"Solitaire"} text={solitaireText} link="https://isml-solitaire-5eko.vercel.app/"></ProjectBox>
      </div>
      <div className="row">
        <ProjectBox icon={JavaLogo} title={"Cardouts"} text={cardoutsText} link="/cardouts"></ProjectBox>
        <ProjectBox icon={JavaLogo} title={"Cryptogram"} text={CryptogramText}></ProjectBox>
        <ProjectBox icon={NodeLogo} title={"Task-Manager"} text={taskText} link="https://github.com/tmha13/task-manager-api"></ProjectBox>
      </div>
    </div>
  )
}

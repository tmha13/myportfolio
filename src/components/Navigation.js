import React from 'react'
import './Navigation.css'

export default function Navigation() {
  return (
    <nav class="stroke">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
      </ul>
    </nav>
  )
}

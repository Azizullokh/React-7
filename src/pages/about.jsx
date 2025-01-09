import React from 'react'
import item from '../images/rc.jpeg'
import { Link } from 'react-router-dom'
import '../assets/styles/about.css'

function About() {
  return (
    <div>
        <header className='about-header'>
            <img src={item} alt="" />
            <Link className='link6' to={'/home'}>Go Back</Link>
        </header>
      <h6 style={{
        fontSize: 44 , textAlign: 'center' , marginTop:200
      }}>Comming soon...</h6>
      <footer className='about-footer'></footer>
    </div>
  )
}

export default About

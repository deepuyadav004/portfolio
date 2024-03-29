import React from 'react'
import './footer.css'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SNOW79</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='#'><BsTwitter/></a>
        <a href='#'><BsLinkedin/></a>
        <a href='#'><BsInstagram/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; SNOW79 all rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
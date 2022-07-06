import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
      <Link to='/' className="logo"><span>BEST</span><span className='logo__bottom'>SHOWS</span></Link>
      <span className='footer__copy'>&copy; Copyright 2022 All rights reserved</span>
      <span>Made by Szymon M using <a className='footer__link' target='_blank' rel="noreferrer" href="https://www.tvmaze.com/api">TVmaze API</a></span>
    </footer>
  )
}

export default Footer
import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Nav.css'

function Nav() {
  return (
    <nav className='nav'>
      <div className="logo"><span>BEST</span><span className='logo__bottom'>SHOWS</span></div>
      <ul className='nav__list'>
        <li className="nav__item">Home</li>
        <li className="nav__item">Genres</li>
        <li className="nav__item">Trending</li>
        <li className="nav__item">Coming Soon</li>
        <li className="nav__item">Favourites</li>
      </ul>
      <form className="nav__search">
        <input type="text" className="nav__input" placeholder='Search' />
        <AiOutlineSearch size={20}/>
      </form>
    </nav>
  )
}

export default Nav
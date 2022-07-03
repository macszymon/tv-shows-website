import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
import './Nav.css'

function Nav() {
  return (
    <nav className='nav'>
      <div className="logo"><span>BEST</span><span className='logo__bottom'>SHOWS</span></div>
      <ul className='nav__list'>
        <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav__item"><NavLink to='/b'>Genres</NavLink></li>
        <li className="nav__item"><NavLink to='/c'>Trending</NavLink></li>
        <li className="nav__item"><NavLink to='/d'>Coming Soon</NavLink></li>
        <li className="nav__item"><NavLink to='/e'>Bookmarked</NavLink></li>
      </ul>
      <form className="nav__search">
        <input type="text" className="nav__input" placeholder='Search' />
        <AiOutlineSearch size={20}/>
      </form>
    </nav>
  )
}

export default Nav
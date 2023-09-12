import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {Link, NavLink, useNavigate} from 'react-router-dom'
import './Nav.css'

function Nav() {
  const [searchValue, setSearchValue] = useState('')
  const [isGenresOpen, setIsGenresOpen] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/search/' + searchValue)
    setSearchValue('')
  }

  return (
    <nav className='nav'>
      <Link to='/' className="logo"><span>BEST</span><span className='logo__bottom'>SHOWS</span></Link>
      <ul className='nav__list'>
        <li className="nav__item"><NavLink to='/'>Home</NavLink></li>
        <li className="nav__item"><NavLink to='/trending'>Trending</NavLink></li>
      </ul>
      <form className="nav__search" onSubmit={e => handleSubmit(e)}>
        <input type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} className="nav__input" placeholder='Search' />
        <AiOutlineSearch size={20}/>
      </form>
      
    </nav>
  )
}

export default Nav
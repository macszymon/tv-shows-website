import React, { useEffect, useState } from 'react'
import './Trending.css'
import Card from '../Card/Card'

function Genres({shows}) {
  const [genre, setGenre] = useState('')
  const [showsByGenre, setShowsByGenre] = useState([])

  function compare(a, b) {
    return b.weight - a.weight
 }
  
  useEffect(() => {
    async function filterShows() {
      setShowsByGenre(genre !== '' ? shows.filter(item => item.genres.includes(genre)).sort(compare).slice(0,100) : shows.sort(compare).slice(0,100)) 
    }
    filterShows()

  }, [genre])

  return (
    <div className='trending'>
      <ul className='trending__list'>
    <li><button onClick={() => setGenre('')}>All</button></li>
    <li><button onClick={() => setGenre('Action')}>Action</button></li>
    <li><button onClick={() => setGenre('Adult')}>Adult</button></li>
    <li><button onClick={() => setGenre('Adventure')}>Adventure</button></li>
    <li><button onClick={() => setGenre('Anime')}>Anime</button></li>
    <li><button onClick={() => setGenre('Children')}>Children</button></li>
    <li><button onClick={() => setGenre('Comedy')}>Comedy</button></li>
    <li><button onClick={() => setGenre('Crime')}>Crime</button></li>
    <li><button onClick={() => setGenre('DIY')}>DIY</button></li>
    <li><button onClick={() => setGenre('Drama')}>Drama</button></li>
    <li><button onClick={() => setGenre('Family')}>Family</button></li>
    <li><button onClick={() => setGenre('Fantasy')}>Fantasy</button></li>
    <li><button onClick={() => setGenre('Food')}>Food</button></li>
    <li><button onClick={() => setGenre('History')}>History</button></li>
    <li><button onClick={() => setGenre('Horror')}>Horror</button></li>
    <li><button onClick={() => setGenre('Legal')}>Legal</button></li>
    <li><button onClick={() => setGenre('Medical')}>Medical</button></li>
    <li><button onClick={() => setGenre('Music')}>Music</button></li>
    <li><button onClick={() => setGenre('Mystery')}>Mystery</button></li>
    <li><button onClick={() => setGenre('Nature')}>Nature</button></li>
    <li><button onClick={() => setGenre('Romance')}>Romance</button></li>
    <li><button onClick={() => setGenre('Science-Fiction')}>Science-Fiction</button></li>
    <li><button onClick={() => setGenre('Sports')}>Sports</button></li>
    <li><button onClick={() => setGenre('Supernatural')}>Supernatural</button></li>
    <li><button onClick={() => setGenre('Thriller')}>Thriller</button></li>
    <li><button onClick={() => setGenre('Travel')}>Travel</button></li>
    <li><button onClick={() => setGenre('War')}>War</button></li>
    <li><button onClick={() => setGenre('Western')}>Western</button></li>
    </ul>
    <div className="trending__container">
      <h1>Trending {genre} Shows</h1>
     <div className="trending__shows">
      {showsByGenre.map(item => <Card key={item.id} show={item}/>)}
    </div>
    </div>
    </div>
  )
}

export default Genres
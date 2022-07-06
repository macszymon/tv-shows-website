import React, { useEffect, useState } from 'react'
import './ComingSoon.css'
import Card from '../Card/Card'

function ComingSoon({shows}) {
  const [showsByGenre, setShowsByGenre] = useState([])

  function compare(a, b) {
    return b.weight - a.weight
 }
  
  useEffect(() => {
    async function filterShows() {
      setShowsByGenre(shows.filter(item => item.status === 'In Development').sort(compare).slice(0,100)) 
    }
    filterShows()

  }, [])

  return (
    <div className='trending'>
    <div className="trending__container">
      <h1>Coming Soon Shows</h1>
     <div className="trending__shows">
      {showsByGenre.map(item => <Card key={item.id} show={item}/>)}
    </div>
    </div>
    </div>
  )
}

export default ComingSoon
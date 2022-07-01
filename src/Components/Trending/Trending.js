import React from 'react'
import './Trending.css'

function Trending({trendingShows}) {
  return (
    <div>
      <h2>Trending Now</h2>
      {trendingShows.map(item => <img src={item.image.medium} key={item.id}/>)}
    </div>
  )
}

export default Trending
import React from 'react'
import './ComingSoon.css'

function ComingSoon({comingShows}) {
  return (
    <div>
      <h2>Coming Soon</h2>
      {comingShows.map(item => <img src={item.image  ? item.image.medium : 'http://placehold.jp/210x295.png'} key={item.id}/>)}
    </div>
  )
}

export default ComingSoon
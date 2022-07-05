import React, { useState } from 'react'
import {AiFillStar} from 'react-icons/ai'
import './Episodes.css'

function Episodes({seasons, episodes}) {
  const [active, setActive] = useState(seasons[0].number)

  return (
    <section className='episodes'>
      <div className="episodes__seasons">
        {seasons.map(item => {
          return item.episodeOrder && <button key={item.id} onClick={() => setActive(item.number)} className={active === item.number ? 'episodes__season active' : 'episodes__season'}>Season {item.number}</button>
        })}
      </div>
      {episodes.map(episode => {
              return (
                episode.season === active && <div key={episode.id} className="episode">
                  <div className="episode__main">
                  <h3 className="episode__number">{episode.number}</h3>
                  <h3 className="episode__name">{episode.name}</h3>
                  <h3 className="episode__date">{episode.airdate ? episode.airdate.split('-')[2] + '/' + episode.airdate.split('-')[1] + '/' + episode.airdate.split('-')[0] : '-'}</h3>
                  <h3 className="episode__rating"><AiFillStar style={{color: '#FED530'}}/>{episode.rating.average ? episode.rating.average : '-'}</h3>
                  {episode.summary ? <div className='episode__desc' dangerouslySetInnerHTML={{__html: episode.summary}}></div> : <div className='episode__desc'>No description yet</div>}
                  </div>
                </div>
              )
      })}
    </section>
  )
}

export default Episodes
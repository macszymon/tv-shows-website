import React from 'react'
import './Seasons.css'

function Seasons({seasons}) {
  return (
    <section className='seasons'>
      {seasons.map(item => {
        return (
            item.episodeOrder &&
            <div key={item.id} className="season">
            <img className='season__img' src={item.image ? item.image.medium : 'https://placehold.jp/F9F9F9/b7b7b8/150x210.png?text=No%20image%0A(yet)'} alt=''/>
            <div className="season__info">
              <h2 className='season__header'>Season {item.number} {item.premiereDate && <span>{'(' + item.premiereDate.split('-')[0] + ')'}</span>}</h2>
              <h3 className='season__episodes'>{item.episodeOrder ? (item.episodeOrder + ' episodes') : '- episodes'}</h3>
              {item.summary ? <div className='season__desc' dangerouslySetInnerHTML={{__html: item.summary}}></div> : <p className='season__desc'>No description yet</p>}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Seasons
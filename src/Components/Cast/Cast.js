import React from 'react'
import './Cast.css'

function Cast({cast}) {
  return (
    <section className='cast'>
      {cast.map(item => {
        return (
          <div key={item.person.id} className="cast__person">
            <img className='cast__img' src={item.person.image ? item.person.image.medium : 'http://placehold.jp/210x295.png'} alt={item.person.name} />
            <h2 className='cast__name'>{item.person.name}</h2>
            <h2 className='cast__character'> <span>as </span>{item.character.name}</h2>
          </div>
        )
      })}
    </section>
  )
}

export default Cast
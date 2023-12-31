import React from 'react'
import { Link } from 'react-router-dom'
import './Cast.css'

function Cast({cast}) {
  return (
    cast.length > 0 ?
    <section className='cast'>
      {cast.map((item,index) => {
        return (
          <Link to={`/person/${item.person.id}`} key={index} className="cast__person">
            <img className='cast__img' src={item.person.image ? item.person.image.medium : 'https://placehold.jp/F9F9F9/b7b7b8/190x250.png?text=No%20image%0A(yet)'} alt='' />
            <div className="cast__text">
            <h2 className='cast__name'>{item.person.name}</h2>
            <h2 className='cast__character'>{item.character.name}</h2>
            </div>
            </Link>
        )
      })} 

    </section>
    : <h2>No cast info yet</h2>
  )
}

export default Cast
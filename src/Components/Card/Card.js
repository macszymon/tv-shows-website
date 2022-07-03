import React from 'react'
import './Card.css'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Card({show}) {

  return (
    <Link to={`/details/${show.id}`} className='card'>
      <img className='card__img' src={show.image  ? show.image.medium : 'http://placehold.jp/210x295.png'}/>
      <div className="card__text">

        <h4 className='card__network'>{(show.network ? show.network.name : show.webChannel.name)}</h4>
        <h2 className='card__name'>{show.name}</h2>
        <h3 className='card__rating'><AiFillStar style={{color: '#FED530'}}/>{show.rating.average ? show.rating.average  : '-'}</h3>
        <ul className="card__genres">
          {show.genres.map((item,index) => <li key={index} className='card__item'>{item}</li>)}
        </ul>
      </div>
    </Link>
  )
}

export default Card
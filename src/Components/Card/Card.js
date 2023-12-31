import React from 'react'
import './Card.css'
import {AiFillStar} from 'react-icons/ai'
import {Link} from 'react-router-dom'

function Card({show}) {

  return (
    <Link to={`/show/${show.id}`} className='card'>
      <img className='card__img' src={show.image  ? show.image.medium : 'http://placehold.jp/210x295.png'} alt=''/>
      <div className="card__text">

        {show.network && <h4 className='card__network'>{show.network.name}</h4>}
        {show.webChannel && <h4 className='card__network'>{show.webChannel.name}</h4>}
        {(!show.webChannel && !show.network) && <h4 className='card__network'>-</h4>}
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
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import './Details.css'
import Cast from '../../Components/Cast/Cast'

function Details() {
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState({})
  const {id} = useParams()

  async function fetchShowDetails() {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=images&embed[]=crew`)
    const data = await res.json()
    setShow(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchShowDetails()
  }, [])

  return (
    loading ? <h1>Loading...</h1> :
    <main className='details'>
      <div className="details__heading">
        <div className="details__header">
        <h1>{show.name} <span>{'(' + show.premiered.split('-')[0] + ' - ' + (show.ended ? show.ended.split('-')[0] : 'now') + ')'}</span></h1>
        <span>{(show.network ? show.network.name : show.webChannel.name) + ' | ' +  show.language + ' | ' + show.type}</span>
        </div>
        <h3 className='details__rating'>{show.rating.average ? show.rating.average : '-'}<AiFillStar style={{color: '#FED530'}}/></h3>
      </div>
        <div className="details__main">
          <img className='details__img' src={show.image  ? show.image.original : 'http://placehold.jp/210x295.png'}/>
          <div className="details__about">
            <h2>About the show</h2>  
            <div className='details__desc' dangerouslySetInnerHTML={{__html: show.summary}}></div>
            <ul className="details__genres">
              {show.genres.map((item,index) => <li className='details__genre' key={index}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="details__more">
          <button>Cast</button>
          <button>Crew</button>
          <button>Episodes</button>
          <button>Gallery</button>
        </div>
        <Cast cast={show._embedded.cast}/>
    </main>
  )
}

export default Details
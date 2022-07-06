import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {BsPlayCircle} from 'react-icons/bs'
import './Hero.css'

function Hero() {
  const [heroShow, setHeroShow] = useState({})
  const [loading, setLoading] = useState(true)

  async function fetchHeroShow() {
    const res = await fetch('https://api.tvmaze.com/shows/44778?embed=images')
    const data = await res.json();
    setHeroShow(data)
    setLoading(false)
  }
  useEffect(() => {
    fetchHeroShow()
  },[])
  
  
  return (
    !loading &&
    <section className='hero'>
      <img className='hero__img' src={heroShow._embedded.images.find(item => item.id === 1026398).resolutions.original.url}alt='show background'/>
      <div className="hero__text">
      <h2 className='hero__date'>Coming up in <span>August 21</span></h2>
      <h1 className="hero__header">{heroShow.name}</h1>
      <div className='hero__desc' dangerouslySetInnerHTML={{__html: heroShow.summary}}></div>
      <div className="hero__action">
      <Link to='/show/44778' className='hero__btn'>Learn More</Link>
      <a href='https://www.youtube.com/watch?v=Wg86eQkdudI' target='_blank' rel="noreferrer" className='hero__btn-trailer'><BsPlayCircle size={32}/>Watch Trailer</a>
      </div>
      </div>
    </section>
  )
}

export default Hero
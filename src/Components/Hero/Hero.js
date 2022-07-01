import React, { useEffect, useState } from 'react'
import './Hero.css'

function Hero() {
  const [heroShow, setHeroShow] = useState({})
  const [loading, setLoading] = useState(true)

  async function fetchHeroShow() {
    const res = await fetch('https://api.tvmaze.com/shows/2993?embed=images')
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
      <img className='hero__img' src={heroShow._embedded.images.find(item => item.id === 1018063).resolutions.original.url}/>
      <div className="hero__text">
      <h3 className='hero__genres'>{heroShow.genres.map((item, index) => <span key={index}>{`${item}, `} </span>)}</h3>
      <h1 className="hero__header">{heroShow.name}</h1>
      <h2 className='hero__rating'>{heroShow.rating.average} <span>/10</span></h2>
      <div className='hero__desc' dangerouslySetInnerHTML={{__html: heroShow.summary}}></div>
      </div>
    </section>
  )
}

export default Hero
import React, { useEffect, useState } from 'react'
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
      <img className='hero__img' src={heroShow._embedded.images.find(item => item.id === 1024341).resolutions.original.url}/>
      <div className="hero__text">
      <h2 className='hero__date'>Coming up in <span>August 21</span></h2>
      <h1 className="hero__header">{heroShow.name}</h1>
      <div className='hero__desc' dangerouslySetInnerHTML={{__html: heroShow.summary}}></div>
      <button className='hero__btn'>See More</button>
      </div>
    </section>
  )
}

export default Hero
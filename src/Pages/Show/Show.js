import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {AiFillStar, AiOutlineRise, AiOutlineHeart} from 'react-icons/ai'
import {BsBookmarkFill, BsBookmark} from 'react-icons/bs'
import './Show.css'
import Cast from '../../Components/Cast/Cast'
import Crew from '../../Components/Crew/Crew'

function Show() {
  const [activeTab, setActiveTab] = useState('Cast')
  const [loading, setLoading] = useState(true)
  const [isBookmarked, setIsBookmarked] = useState(false)
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

  function handleClick(e) {
    setActiveTab(e.target.textContent);
  }

  return (
    loading ? <h1>Loading...</h1> :
    <main className='show'>
      <div className="show__heading">
        <div className="show__header">
        <h1>{show.name} <span>{'(' + show.premiered.split('-')[0] + ' - ' + (show.ended ? show.ended.split('-')[0] : 'now') + ')'}</span></h1>
        <span>{(show.network ? show.network.name : show.webChannel.name) + ' | ' +  show.language + ' | ' + show.type + (show.runtime ? (' | ' + show.runtime + 'm') : '')}</span>
        </div>
        <div className="show__flex">
        <h3 className='show__rating'><AiFillStar style={{color: '#FED530'}}/>{show.rating.average ? show.rating.average : '-'}</h3>
        <h3 className="show__popularity">
        <AiOutlineRise/>{show.weight}
        </h3>
        {isBookmarked ? <BsBookmarkFill onClick={() => setIsBookmarked(prev => !prev)} className='show__favourite'/> : <BsBookmark onClick={() => setIsBookmarked(prev => !prev)}  className='show__favourite'/>}
        </div>
      </div>
        <div className="show__main">
          <img className='show__img' src={show.image  ? show.image.original : 'http://placehold.jp/210x295.png'}/>
          <div className="show__about">
            <div className='show__desc' dangerouslySetInnerHTML={{__html: show.summary}}></div>
            <div className="show__genres">
              {show.genres.map((item,index) => <Link to={`/genre/${item.toLowerCase()}`} className='show__genre' key={index}>{item}</Link>)}
            </div>
          </div>
        </div>
        <div className="show__more">
          <button className={activeTab === 'Cast' && 'active'} onClick={(e) => handleClick(e)}>Cast</button>
          <button className={activeTab === 'Crew' && 'active'} onClick={(e) => handleClick(e)}>Crew</button>
          <button className={activeTab === 'Episodes' && 'active'} onClick={(e) => handleClick(e)}>Episodes</button>
          <button className={activeTab === 'Gallery' && 'active'} onClick={(e) => handleClick(e)}>Gallery</button>
          <button className={activeTab === 'Details' && 'active'} onClick={(e) => handleClick(e)}>Details</button>
        </div>
        {activeTab === 'Cast' && <Cast cast={show._embedded.cast}/>}
        {activeTab === 'Crew' && <Crew crew={show._embedded.crew}/>}
        {activeTab === 'Episodes' && <Cast cast={show._embedded.cast}/>}
        {activeTab === 'Gallery' && <Cast cast={show._embedded.cast}/>}
        {activeTab === 'Details' && <Cast cast={show._embedded.cast}/>}
    </main>
  )
}

export default Show
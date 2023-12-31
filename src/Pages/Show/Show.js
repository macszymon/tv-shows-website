import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillStar, AiOutlineRise} from 'react-icons/ai'
import './Show.css'
import Cast from '../../Components/Cast/Cast'
import Crew from '../../Components/Crew/Crew'
import Characters from '../../Components/Characters/Characters'
import Seasons from '../../Components/Seasons/Seasons'
import ShowDetails from '../../Components/ShowDetails/ShowDetails'
import Episodes from '../../Components/Episodes/Episodes'
import Gallery from '../../Components/Gallery/Gallery'

function Show() {
  const [activeTab, setActiveTab] = useState('Details')
  const [loading, setLoading] = useState(true)
  const [show, setShow] = useState({})
  const {id} = useParams()

  async function fetchShowDetails() {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast&embed[]=images&embed[]=crew&embed[]=seasons`)
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
    loading ? <h1 className='loading'>Loading...</h1> :
    <main className='show'>
      {show.image && <img className='show__background' src={show.image.original} alt=''/>}
      <div className="show__heading">
        <div className="show__header">
        <h1>{show.name} <span>{show.premiered && '(' + show.premiered.split('-')[0] + ' - ' + (show.ended ? show.ended.split('-')[0] : 'now') + ')'}</span></h1>
        <span>{(show.network ? show.network.name : show.webChannel.name) + ' | ' +  show.language + ' | ' + show.type + (show.runtime ? (' | ' + show.runtime + 'min') : '')}</span>
        </div>
        <div className="show__flex">
        <h3 className='show__rating'><AiFillStar style={{color: '#FED530'}}/>{show.rating.average ? show.rating.average : '-'}</h3>
        <h3 className="show__popularity">
        <AiOutlineRise/>{show.weight + '%'}
        </h3>
        </div>
      </div>
        <div className="show__main">
          <img className='show__img' src={show.image  ? show.image.original : 'http://placehold.jp/210x295.png'} alt='show poster'/>
          <div className="show__about">
            <h2>Overview</h2>
            <div className='show__desc' dangerouslySetInnerHTML={{__html: show.summary}}></div>
            <div className="show__genres">
              {show.genres.map((item,index) => <span className='show__genre' key={index}>{item}</span>)}
            </div>
          </div>
        </div>
        <div className="show__more">
          <button className={activeTab === 'Details' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Details</button>
          <button className={activeTab === 'Cast' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Cast</button>
          <button className={activeTab === 'Characters' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Characters</button>
          <button className={activeTab === 'Crew' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Crew</button>
          <button className={activeTab === 'Seasons' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Seasons</button>
          <button className={activeTab === 'Episodes' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Episodes</button>
          <button className={activeTab === 'Gallery' ? 'active' : undefined} onClick={(e) => handleClick(e)}>Gallery</button>
        </div>
        {activeTab === 'Details' && <ShowDetails show={show}/>}
        {activeTab === 'Cast' && <Cast cast={show._embedded.cast}/>}
        {activeTab === 'Characters' && <Characters characters={show._embedded.cast}/>}
        {activeTab === 'Crew' && <Crew crew={show._embedded.crew}/>}
        {activeTab === 'Seasons' && <Seasons seasons={show._embedded.seasons}/>}
        {activeTab === 'Episodes' && <Episodes seasons={show._embedded.seasons} episodes={show._embedded.episodes}/>}
        {activeTab === 'Gallery' && <Gallery images={show._embedded.images}/>}
    </main>
  )
}

export default Show
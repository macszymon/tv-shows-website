import React from 'react'
import './ShowDetails.css'

function ShowDetails({show}) {
  return (
    <section className='show-details'>
      <h3>Name: <span>{show.name}</span></h3>
      {show.network &&<h3>Network: <span>{show.network.name}</span></h3>}
      {show.webChannel && <h3>Web Channel: <span>{show.webChannel.name}</span></h3>}
      <h3>Type: <span>{show.type}</span></h3>
      <h3>Language: <span>{show.language}</span></h3>
      <h3>Status: <span>{show.status}</span></h3>
      <h3>Genres: {show.genres.map((item, index) => <span key={index}>{item} </span>)}</h3>
      <h3>Runtime: <span>{show.runtime ? show.runtime + 'min' : '-'}</span></h3>
      <h3>Premiere Date: <span>{show.premiered ? + show.premiered.split('-')[2] + '/' + show.premiered.split('-')[1] + '/' + show.premiered.split('-')[0] : '-'}</span></h3>
      <h3>End Date: <span>{show.ended ? + show.ended.split('-')[2] + '/' + show.ended.split('-')[1] + '/' + show.ended.split('-')[0] : '-'}</span></h3>
      <h3>Schedule: <span>{show.schedule.days.length > 0 ? (show.schedule.days + 's' + (show.schedule.time && ' at ' + show.schedule.time)) : '-'}</span></h3>
      <h3>Official site: <span>{show.officialSite ? <a className='show-details__site' href={show.officialSite} target='_blank' >{show.officialSite}</a> : '-'}</span></h3>
    </section>
  )
}

export default ShowDetails
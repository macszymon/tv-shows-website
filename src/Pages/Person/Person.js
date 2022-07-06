import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';

import './Person.css'
import 'swiper/css';
import 'swiper/css/navigation';

function Person() {
  const {id} = useParams()
  const [person, setPerson] = useState({})
  const [personShows, setPersonShows] = useState([])
  const [personWork, setPersonWork] = useState([])
  const [age, setAge] = useState(0)
  const [loading, setLoading] = useState(true)

  async function fetchPerson() {
    const res = await fetch(`https://api.tvmaze.com/people/${id}`)
    const res2 = await fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed[]=show&embed[]=character`)
    const res3 = await fetch(`https://api.tvmaze.com/people/${id}/crewcredits?embed[]=show`)
    const data = await res.json()
    const data2 = await res2.json()
    const data3 = await res3.json()
    setPersonWork(data3)
    setPersonShows(data2)
    setPerson(data)
    setAge(calculateAge(data.birthday))  
    setLoading(false)
  }

  function calculateAge(birthday) {
    const today = new Date();
    const birthDate = new Date(birthday);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age
  }

  useEffect(() => {
    fetchPerson()
  },[])

  return (
    loading ? <h1 className='loading'>Loading...</h1> : 
    <main className='person'>
      <div className="person__heading">
        <img className='person__img' src={person.image ? person.image.original : 'https://placehold.jp/F9F9F9/b7b7b8/300x421.png?text=No%20image%0A(yet)'} alt=''/>
        <div className="person__text">
        <h1 className='person__header'>{person.name}<span>{person.birthday && ('(' + (person.birthday.split('-')[2] + '/' + person.birthday.split('-')[1] + '/' + person.birthday.split('-')[0]) + (person.deathdate ? ' - ' + person.deathdate : '') + ')')}</span></h1>
        <span className='person__info'>{(person.gender ? person.gender : '') + (person.country ? (' | ' +  person.country.name) : '') + (person.birthday ? (' | ' + age + ' years old') : '')}</span>
        </div>
        </div>
        <div className="person__main">
        </div>
        {personShows.length > 0 && <div className="person__slides">
          <h2>Known for</h2>
          <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        >
        {personShows.map((item, index) => <SwiperSlide key={index} style={{width: '210px'}}>
        <Link to={`/show/${item._embedded.show.id}`} className='person__slide'>
            <img src={item._embedded.show.image  ? item._embedded.show.image.medium : 'http://placehold.jp/210x295.png'} alt=''/>
            <div >
            <h3 >{item._embedded.show.name}</h3>
            <h4>as {item._embedded.character.name}</h4>
      </div>
    </Link>
        </SwiperSlide>)}
      </Swiper>
        </div>}
        {personWork.length > 0 && <div className="person__slides">
          <h2>Worked on</h2>
          <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        >
        {personWork.map((item, index) => <SwiperSlide key={index} style={{width: '210px'}}>
        <Link to={`/show/${item._embedded.show.id}`} className='person__slide'>
            <img src={item._embedded.show.image  ? item._embedded.show.image.medium : 'http://placehold.jp/210x295.png'} alt=''/>
            <div >
            <h4>{item.type}</h4>
            <h3 >{item._embedded.show.name}</h3>
      </div>
    </Link>
        </SwiperSlide>)}
      </Swiper>
        </div>}
    </main>
  )
}

export default Person
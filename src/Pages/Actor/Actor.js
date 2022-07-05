import React, { useEffect, useState } from 'react'
import './Actor.css'
import {useParams, Link} from 'react-router-dom'
import Card from '../../Components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

function Person() {
  const {id} = useParams()
  const [person, setPerson] = useState({})
  const [personShows, setPersonShows] = useState([])
  const [age, setAge] = useState(0)
  const [loading, setLoading] = useState(true)

  async function fetchPerson() {
    const res = await fetch(`https://api.tvmaze.com/people/${id}`)
    const res2 = await fetch(`https://api.tvmaze.com/people/${id}/castcredits?embed[]=show&embed[]=character`)
    const data = await res.json()
    const data2 = await res2.json()
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
    <main className='actor'>
      <div className="actor__heading">
        <h1 className='actor__header'>{person.name}<span>{person.birthday && ('(' + (person.birthday.split('-')[2] + '/' + person.birthday.split('-')[1] + '/' + person.birthday.split('-')[0]) + (person.deathdate ? ' - ' + person.deathdate : '') + ')')}</span></h1>
        <span className='actor__info'>{person.gender + (person.country ? (' | ' +  person.country.name) : '') + (person.birthday ? (' | ' + age + ' years old') : '')}</span>
        </div>
        <div className="actor__main">
        <img className='actor__img' src={person.image ? person.image.original : 'https://placehold.jp/F9F9F9/b7b7b8/300x421.png?text=No%20image%0A(yet)'}/>
        <div className="actor__shows">
          <h2>Known for</h2>
          <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={'auto'}
        navigation
        >
        {personShows.map((item, index) => <SwiperSlide key={index} style={{width: '210px'}}>
        <Link to={`/show/${item._embedded.show.id}`} className='actor__show'>
            <img src={item._embedded.show.image  ? item._embedded.show.image.medium : 'http://placehold.jp/210x295.png'}/>
            <div >
            <h3 >{item._embedded.show.name}</h3>
            <h4>as {item._embedded.character.name}</h4>
      </div>
    </Link>
        </SwiperSlide>)}
      </Swiper>
        </div>
        </div>
    </main>
  )
}

export default Person
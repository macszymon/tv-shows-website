import React from 'react'
import './ComingSoonHome.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import {MdArrowForwardIos} from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/navigation';

function ComingSoon({comingShows}) {
  return (
    <section className='coming-soon-home'>
      <div className="coming-soon-home__heading">
        <h2 className='coming-soon-home__header'>Coming Soon</h2>
        <Link className='coming-soon-home__more' to='/comingsoon'>See More <MdArrowForwardIos/></Link>
      </div>
      <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={'auto'}
      navigation
      >
      {comingShows.map(item => <SwiperSlide key={item.id} style={{width: '210px'}}><Card show={item} /></SwiperSlide>)}
    </Swiper>
    </section>
  )
}

export default ComingSoon
import React from 'react'
import './ComingSoon.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import Card from '../Card/Card';
import {MdArrowForwardIos} from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/navigation';

function ComingSoon({comingShows}) {
  return (
    <section className='coming-soon'>
      <div className="coming-soon__heading">
        <h2 className='coming-soon__header'>Coming Soon</h2>
        <a className='coming-soon__more' href="#">See More <MdArrowForwardIos/></a>
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
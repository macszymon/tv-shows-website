import React from 'react'
import './Trending.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import Card from '../Card/Card';
import {MdArrowForwardIos} from 'react-icons/md'

import 'swiper/css';
import 'swiper/css/navigation';

function Trending({trendingShows}) {
  return (
    <section className='trending'>
      <div className="trending__heading">
      <h2 className='trending__header'>Trending Now</h2>
      <a className='trending__more' href="#">See More <MdArrowForwardIos/></a>

      </div>
      <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={'auto'}
      navigation
    >
      {trendingShows.map(item => <SwiperSlide key={item.id} style={{width: 'auto'}}><Card show={item}/></SwiperSlide>)}
    </Swiper>
    </section>
  )
}

export default Trending
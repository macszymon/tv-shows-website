import React from 'react'
import './TrendingHome.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import Card from '../Card/Card';
import {MdArrowForwardIos} from 'react-icons/md'
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

function Trending({trendingShows}) {
  return (
    <section className='trending-home'>
      <div className="trending-home__heading">
      <h2 className='trending-home__header'>Trending Now</h2>
      <Link className='trending-home__more' to='/trending' >See More <MdArrowForwardIos/></Link>

      </div>
      <Swiper
      modules={[Navigation]}
      spaceBetween={16}
      slidesPerView={'auto'}
      navigation
    >
      {trendingShows.map(item => <SwiperSlide key={item.id} style={{width: '210px'}}><Card show={item}/></SwiperSlide>)}
    </Swiper>
    </section>
  )
}

export default Trending
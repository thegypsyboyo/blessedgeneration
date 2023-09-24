"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
// import 'swiper/swiper-bundle.min.css';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from './Layout';
import { SliderData } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const data:SliderData[] = [
    {
      img: "/images/test/gallery-1.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/test/gallery-2.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/test/gallery-3.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
  ]

  // const variants = {
  //   hidden: { opacity: 0, y: 120 },
  //   visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 2 } },
  // };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (

    <Swiper
      className='swiper-container'
      spaceBetween={30}
      slidesPerView={1}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className='swiper-slide'>
          <div className='slide'>
            <img src={item.img} alt={item.title} />
            <div className='content'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Header
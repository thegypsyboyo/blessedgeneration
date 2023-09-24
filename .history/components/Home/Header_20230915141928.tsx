"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from './Layout';
import { IntroSlider, NavbarSocials, SliderData } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';
import urlFor from '@/lib/urlFor';

type  Props = {
  sliderData: IntroSlider[];
}

const Header = ({sliderData}:Props) => {
  
  return (
   
    <Swiper
    className='relative w-full h-full z-[1] flex transition-transform box-content'
    effect={'fade'}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={30}
    loop={true}
    navigation={true}
    modules={[EffectFade ,Autoplay, Navigation]}
    >
      <div className='relative w-full h-full flex box-content transition-transform'>
        {sliderData?.map((item, index) =>(
          <div className="" key={index}>
            {item.sliders?.map((slider, index) => (
            <SwiperSlide 
              className='relative w-full z-[5] min-h-[850px]'
              key={index}
            >
              <div className="absolute w-full h-full left-0 top-0 bg-cover bg-center z-[-1] bg-white transform scale-[1] transition-all duration-700" style={{backgroundImage: `url(${urlFor(slider.image).url()})`}}>
              </div>
              
            </SwiperSlide>
            ))}
          </div>

        ))}
      </div>
    </Swiper>
  )
}

export default Header
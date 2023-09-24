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
          <div className="w-full h-full" key={index}>
            {item.sliders?.map((slider, index) => (
            <SwiperSlide 
              className='relative w-full z-[5] flex items-center h-full lg:min-h-[850px]'
              key={index}
            >
              <div className="absolute w-full h-full left-0 top-0 bg-cover bg-center z-[-1] bg-white transform scale-[1] transition-all duration-700 cover-img" style={{backgroundImage: `url(${urlFor(slider.image).url()})`}}>
                <div className="shadow-slider" />
              </div>
              <Layout className="h-full flex items-center ">
                <div className="flex w-full h-full flex-wrap items-center mt-[120px]">
                  <div className="lg:w-[66.6667%] flex-grow-0 flex-shrink-0 h-full w-full">
                    <div className="w-full h-full pt-[80px] ">
                      <span className='mt-[5px] text-redLight font-bold uppercase text-[16px] text-fade'>[ since from 2000 ]</span>
                      <h1 className="font-man text-fade mb-[30px] font-extrabold uppercase text-[#0b3d2c] lg:text-[90px] xl:text-[100px] md:text-[80px] text-[48px]">make dream gardening</h1>
                    </div>
                  </div>
                </div>
              </Layout>
              
            </SwiperSlide>
            ))}
          </div>

        ))}
      </div>
    </Swiper>
  )
}

export default Header
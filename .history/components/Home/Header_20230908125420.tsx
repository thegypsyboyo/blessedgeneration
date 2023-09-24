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
import { IntroSlider, SliderData } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';
import urlFor from '@/lib/urlFor';

type  Props = {
  sliderData: IntroSlider[];
}


const Header = ({sliderData}:Props) => {
  
  return (
   
    <Swiper
    className='flex items-start  bg-white w-full h-screen mx-[100px]'
    effect={'fade'}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    grabCursor={true}
    centeredSlides={true}
    spaceBetween={30}
    loop={true}
    // pagination={{
    //   clickable: true,
    // }}
    navigation={true}
    modules={[EffectFade ,Autoplay, Navigation]}
    >
      <div className='swiper-container relative w-full h-full z-100 flex transition-transform duration-500 ease-in-out box-content'>
        {sliderData?.map((item, index) =>(
          <div className="" key={index}>
            {item.sliders?.map((slider, index) => (
            <SwiperSlide 
              className='relative w-full h-full'
              key={index}
            >
              {/* {item.sliders?.map((slider, index) => ( */}
              <div className="" >
          
                <div className="w-full h-[120vh] text-center bg-cover bg-center" style={{backgroundImage: `url(${urlFor(slider.image).url()})`}}>
                  <div className='slide-layer'/>
                  <div className="inner">
                    <h1 className="font-bold my-0 mx-auto text-white text-[37px] md:text-[50px] max-w-[840px] lg:text-[64px] ">{slider.title}</h1>
                    <p className="text-light text-[16px] leading-[24px] mt-[20px] my-auto mb-[30px] mx-auto max-w-[640px]">{slider.description}</p>
                    <AnimatedButton className='bg-yellowColor' link='/donate' text={"discover more"} style='!mt-0 !bg-redDark'/>
                  </div>
                </div>
              </div>
              {/* ))} */}

              
            </SwiperSlide>
            ))}
          </div>

        ))}
      </div>
    </Swiper>
  )
}

export default Header
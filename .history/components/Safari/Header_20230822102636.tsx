"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from '../Home/Layout';
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

  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 2 } },
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (

    <section className='py-[120px]'>
        <Layout>
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
            onSlideChange={handleSlideChange}
            // onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
            <div className='swiper-container relative w-full h-full z-100 flex transition-transform duration-500 ease-in-out box-content'>
                {data.map((item, index) =>(
                <SwiperSlide key={index}
                    className=''
                >
                    <div className='w-full overflow-hidden h-screen absolute  right-0 bottom-0 '>
                    </div>
                    <div className='flex items-center ml-auto justify-center h-full mx-auto my-auto '>
                    <div className="row flex flex-wrap mx-auto my-auto  justify-center">

                        <div className="w-full flex-shrink-0 flex-grow-0 flex-auto bg-[#abb8c3]">
                            <p>COntent</p>
                        </div>
                    </div>
                    </div>
                    
                </SwiperSlide>

                ))}
            </div>
            </Swiper>
        </Layout>
    </section>
   
  )
}

export default Header
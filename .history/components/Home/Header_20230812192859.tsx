"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';



// interface SliderData {
//   img: string,
//   title: string,
//   description: string,
//   button: string,
// }

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
      img: "/images/events/image-1.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/events/image-2.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/events/image-4.jpg",
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
            <div className='w-full overflow-hidden h-screen absolute bg-orangeDefault right-0 bottom-0 '>
              <div
              className={`h-screen bg-no-repeat bg-fixed bg-cover bg-center transition-transform duration-5000 ease-in-out animate-zoom cover-img opacity-[1] -z-[1]`} 
              style={{backgroundImage: `url(${item.img})`}}           
              />
            </div>
            <div className='w-[58%] h-screen absolute left-0 bottom-0 opacity-[1] after:content-["*"] after:h-screen after:block bg-no-repeat bg-center -z-[1] bg-cover after:bg-primaryDark after:opacity-50'
             style={{backgroundImage: `url(/images/shape-1.jpg)`}}
            />
            <Layout className='flex items-center ml-auto justify-center h-full mx-auto my-auto '>
              <div className="row flex flex-wrap mx-auto my-auto  justify-center w-full">

                <div className="w-full flex-shrink-0 flex-grow-0 flex-auto lg:w-[66.66666%] xl:w-3/4 ">
                  <div 
                    className="content block relative text-center"
                  >
                    <p 
                    className="text-[40px] text-yellowColor font-[900] leading-[46px] font-cav "
                    
                    ><span className="text-orangeDefault px-[20px] text-[30px] md:text-[35px] lg:text-[40px]">{item.title}</span></p>

                    <h2 
                    className="text-[55px] leading-[55px] lg:text-[70px] lg:leading-[70px] xl:text-[80px] md:text-[60px] relative text-white font-[900] font-nun tracking-[-0.04em] mt-[24px] mb-[26px] xl:leading-[83px] max-w-[700px] mx-auto"
                  >   <span className="text-orangeDefault bg-white ">{item.description}</span></h2>
                  <div
              className={`bt ${
                activeIndex === index ? 'active' : 'inactive'
              }`}
            >
                      <AnimatedButton className='' link='' style='' text={item.button}/>
                    </div>
                  </div>
                </div>
              </div>
            </Layout>
            
          </SwiperSlide>

        ))}
      </div>
    </Swiper>
  )
}

export default Header
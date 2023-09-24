"use client"

import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { SliderData } from '@/typings'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import AnimatedButton from '@/constants/AnimatedButton'

const Volunteer = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const data:SliderData[] = [
        {
            img: "/images/testing/gallery-14.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
            img: "/images/testing/gallery-16.jpg",
            title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
            img: "/images/testing/gallery-2.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/testing/gallery-11.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className="relative block mt-0 pt-[0] pb-[0] bg-white">
        <div className="w-full h-full block">
            <div className="!w-full !h-full flex items-center flex-col">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
            <div className="w-full md:max-w-[50%] flex-shrink-0 flex-grow-0 bg-yellowColor lg:h-[600px] h-[500px]">
                    <div className="md:p-[50px] p-[30px] lg:p-[90px] flex flex-col items-center justify-center w-full h-full text-center">
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-white'>Become a volunteer</h2>
                        <p className="text-white font-[400] text-[16px] leading-[28px]">
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.
                        </p>
                        <AnimatedButton className='' link='/become-volunteer' text='volunteer' style=''/>
                    </div>
                </div>
                <div className="md:max-w-[50%] flex-grow-0 flex-shrink-0 max-w-full h-[500px] lg:h-[600px]">
                    <div className="relative z-[1] w-full h-full">
                        <Swiper
                            className='w-full h-full'
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            }}
                            grabCursor={false}
                            centeredSlides={false}
                            spaceBetween={0}
                            loop={true}
                            modules={[Autoplay, Navigation]} 
                            slidesPerView={1}       
                            >
                                <div className='w-full h-full'>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='h-full w-full relative'>
                                              <Image src={item.img} alt='main-image' width={800} height={800} priority className='w-full h-[500px] lg:h-[600px] object-cover'/>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Volunteer
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
            img: "/images/test/gallery-4.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
            img: "/images/test/gallery-3.jpg",
            title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
            img: "/images/test/gallery-2.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/test/gallery-1.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className="relative block mt-0 pt-[0] pb-[90px] bg-white">
        <div className="w-full h-full block">
            {/* <Layout className="flex items-center flex-col"> */}
            <div className="flex items-start flex-wrap w-full h-full justify-between">
            <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0">
                    <div className="p-[90px] flex flex-col items-center justify-center">
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-redLight'>Become a volunteer</h2>
                        <p>
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.
                        </p>
                    </div>
                </div>
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full mb-8">
                    <div className="relative z-[1]">
                        <Swiper
                            className='w-full h-full'
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            }}
                            grabCursor={false}
                            centeredSlides={false}
                            spaceBetween={20}
                            loop={true}
                            modules={[Autoplay, Navigation]} 
                            slidesPerView={1} 
                            onMouseEnter={() => setIsMouseOver(true)} 
                            onMouseLeave={() => setIsMouseOver(false)}                
                            >
                                <div className='w-full h-full'>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='container h-full w-full relative'>
                                              <Image src={item.img} alt='main-image' width={200} height={200} priority className='w-full h-[500px] lg:h-[500px] object-cover'/>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* </Layout> */}
        </div>
    </section>
  )
}

export default Volunteer
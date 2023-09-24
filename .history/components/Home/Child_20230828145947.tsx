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

const Child = () => {
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
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className="relative block pt-[120px] mb-0  pb-[0] bg-white">
        <div className="w-full h-full block">
            <Layout className="flex items-center flex-col">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full lg:h-[600px] h-[500px]">
                    <div className="relative z-[1]">
                        <Swiper
                            className=''
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: true,
                            }}
                            grabCursor={true}
                            centeredSlides={false}
                            spaceBetween={20}
                            loop={true}
                            modules={[Autoplay, Navigation]} 
                            slidesPerView={1} 
                            onMouseEnter={() => setIsMouseOver(true)} 
                            onMouseLeave={() => setIsMouseOver(false)}                
                            >
                                <div className=''>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='h-full w-full relative'>
                                              <Image src={item.img} alt='main-image' width={200} height={200} priority className='w-full lg:h-[600px] h-[500px] object-cover'/>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                    </div>
                </div>
                <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0 lg:h-[600px] h-[500px]">
                    <div className="flex flex-col items-center justify-center md:p-[50px] p-[30px] lg:p-[90px]">
                        <span className="text-darkRed">How you can help</span>
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-redLight'>Become a child sponsor</h2>
                        <p>
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.

                            </p>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    </section>
  )
}

export default Child
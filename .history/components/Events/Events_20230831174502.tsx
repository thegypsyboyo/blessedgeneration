"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import Link from 'next/link'
import AnimatedButton from '@/constants/AnimatedButton'
import { AnimatedText } from '@/constants/AnimatedText'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderData } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'

const Events = () => {
    const data:SliderData[] = [
        {
          img: "/images/events/image-1.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/events/image-3.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
          img: "/images/events/image-1.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/events/image-3.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    const duplicatedData = [...data, ...data, ...data];

  return (
    <section className="py-[120px] relative block bg-white z-[1] h-full">
        <Layout className="h-full">
            <div className="flex flex-wrap flex-col  w-full">
                <div className="flex-grow-0  flex-shrink-0 m-auto w-full mb-11">
                    <div className='relative z-[3] block w-full text-center'>
                        <div className="relative mb-[28px] block -mt-[4px] w-full text-center">
                        <span className="text-[24px] w-full text-orangeDefault font-normal leading-[24px] mb-[10px] font-cav">Upcoming events</span>
                        <h2 className="m-0 text-redDark text-[50px] leading-[50px] font-[500] -tracking-[0.04em] mt-[6px]">
                        Latest upcoming events
                        </h2>
                        </div>
                        <p className="text-[16px] mr-[33px] text-primaryText">There are many variations of passages of lorem ipsum available but the majority have suffered</p>
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 w-full">
                        <Swiper
                            className='h-full w-full'
                            // effect={'fade'}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                            grabCursor={true}
                            centeredSlides={false}
                            spaceBetween={20}
                            loop={true}

                            modules={[EffectFade ,Autoplay, Navigation]} 
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4
                                },
                                920: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 2
                                }
                            }}                      
                            >
                                <div className='h-full w-full'>
                                    {duplicatedData?.map((item, index) => (
                                        <SwiperSlide key={index}  className='container h-full w-full relative'>
                                            <div className='single w-full h-full mr-[20px] relative block shadow-custom '>
                                                <div className="relative block overflow-hidden  z-[1] h-full">
                                                <Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover   h-[450px] w-full rounded-lg'/>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1]'/>
                                                <div className="absolute top-[20px] right-[20px] bg-orangeDefault rounded-[20px] px-[25px] py-[6px] z-[2]">
                                                    <p className="text-[18px] leading-[18px] text-[700] font-cav text-white">23 May, 2022</p>
                                                </div>
                                                <div className="absolute bottom-[24px] left-[30px] z-[2]">
                                                    <ul className="relative flex items-start space-x-4">
                                                        <li className="relative flex items-center text-[14px] text-white font-[600]">
                                                            <BsClock className="text-yellowColor mr-[5px]"/>
                                                            {item.time}
                                                        </li>
                                                        <li className="relative flex items-center text-[14px] text-white font-[600]">
                                                            <BiSolidLocationPlus className="text-yellowColor mr-[5px]"/>
                                                            {item.location}
                                                        </li>
                                                    </ul>
                                                    <h3 className="text-[24px] font-bold -tracking-[0.04em] leading-[28px] w-full pr-4">
                                                        <Link href={""} className='text-white transition-all duration-700 hover:text-orangeDefault' >{item.title}</Link>
                                                    </h3>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-[70px] right-0 m-0 w-full h-full">
                                                <button className='h-[50px] w-[50px]  rounded-[50%] text-primaryDark border-borderColor border-solid text-[15px] m-0 text-center transition-all duration-700 '>
                                                    <BsArrowLeft />
                                                </button>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Events
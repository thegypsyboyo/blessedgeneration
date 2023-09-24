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
                <div className="w-full h-full mt-5">
                <div className='flex flex-wrap w-full h-full !bg-white '>
                    {duplicatedData?.map((item, index) => (
                        <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] xl:w-[25%] py-[10px] px-[10px] relative !bg-white'>
                            <div className='single w-full h-full relative block group'>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/team/team-details`}>
                                  	<Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-12 h-full md:h-[400px] lg:h-[350px] w-full '/>
                                  </Link>
                                  <div className="absolute flex flex-col top-0 left-0 transition-all duration-500  ">
                                  </div>
                                </div>
                                <div className="w-full bg-white  border border-light py-[22px] px-[15px] pb-0 flex flex-col items-center justify-center">
                               <Link href={``}   className="text-darkBlue font-bold  text-[20px] leading-[25px] pb-[10px]  ">Lewis Meta</Link>
                                  <p className="text-[16px] text-[#8ec135] font-[500] font-nan pb-[22px]">{"Developer"}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
          </div>
            </div>
        </Layout>
    </section>
  )
}

export default Events
"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderData } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock, BsPlus } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import Link from 'next/link';

const Team = () => {

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
    <section className="w-full h-full py-[120px] bg-transparent">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto w-full h-full">
            <div className="flex flex-wrap w-full h-full justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[66.666%]">
                <div className="flex flex-col w-full h-full">
                  <span className='text-redDark font-cav text-[30px] font-semibold'>Our perfect stuff</span>
                  <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Meet Our Specialists</h2>
                </div>
              </div>
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%]">
                <div className="flex items-end w-full justify-end">
                  <AnimatedButton className='bg-yellowColor' link='/team' text='view all' style='bg-redDark !rounded-[0px]'/>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-5">
          <Swiper
            className='h-full w-full bg-white'
            // effect={'fade'}
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
                <div className='h-full w-full !bg-white'>
                    {duplicatedData?.map((item, index) => (
                        <SwiperSlide key={index}  className='container h-full w-full relative !bg-white'>
                            <div className='single w-full h-full relative block shadow-custom '>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full">
                                <Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover   h-[450px] w-full '/>
                                <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1]'/>
                                <div className="absolute flex flex-col top-0 left-0 transition-all duration-500 pointer-events-none">
                                  <span className="text-[12px] transition-all duration-500 relative bg-[#489f10] w-[40px] h-[40px] leading-[40px] text-white text-center pointer-events-auto flex items-center justify-center">
                                  <BsPlus className="text-white block items-center justify-center text-[25px]" />
                                  </span>
                                    <p className="text-[18px] leading-[18px] text-[700] font-cav text-white">23 May, 2022</p>
                                </div>
                                </div>
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

export default Team
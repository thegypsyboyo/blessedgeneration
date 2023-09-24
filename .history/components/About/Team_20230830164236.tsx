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
import { BsArrowLeft, BsClock } from 'react-icons/bs'
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
          <div className="w-full h-full">
          <Swiper
            className='h-full w-full bg-transparent'
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
                      slidesPerView: 3
                  },
                  768: {
                      slidesPerView: 2
                  }
              }}         
            >
                <div className='h-full w-full'>
                    {duplicatedData?.map((item, index) => (
                        <SwiperSlide key={index}  className='container h-full w-full relative bg-transparent'>
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

export default Team
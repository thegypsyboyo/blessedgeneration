"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderData, TeamProps } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock, BsPlus } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';

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
  const duplicatedData = [...data];
  return (
    <section className="w-full h-full py-[120px] pt-[60px] bg-transparent">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto w-full h-full mb-8">
            <div className="flex flex-wrap w-full h-full items-center justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0">
                <div className="flex flex-col w-full h-full text-center">
                  <span className='text-redDark font-cav text-[20px] font-[500]'>upcoming events</span>
                  <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Our Latest Upcoming Events </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full mt-5">
                <div className='flex flex-wrap w-full h-full !bg-white '>
                    {duplicatedData?.map((item, index) => (
                        <div key={index}  className='w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%] sm:max-w-[50%]  md:max-w-[50%] py-[10px] px-[10px] relative !bg-white'>
                            <div className='single w-full h-full relative block group'>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/team/team-details`}>
                                  	<Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-12 h-full md:h-[300px] lg:h-[300px] w-full '/>
                                  </Link>
                                </div>
                                <div className="w-full bg-white  border border-light py-[22px] px-[15px] pb-0 flex flex-col items-center justify-center h-[300px]">
                               <Link href={`/team/team-details}`}   className="text-darkBlue font-bold  text-[20px] leading-[25px] pb-[10px]  ">Lewis Meta</Link>
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
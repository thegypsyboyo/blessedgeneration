"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { EventsProps, SliderData, TeamProps } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsCalendar, BsClock, BsHourglass, BsPlus } from 'react-icons/bs'
import { BiMoney, BiSolidLocationPlus } from 'react-icons/bi'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Events = () => {

    const data:EventsProps[] = [
        {
          img: "/images/events/image-1.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          time: "9.00am",
          location: "Malindi, Kenya",
          slug: "cultural-events-coming-soon"
        },
        {
          img: "/images/events/image-1.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          time: "9.00am",
          location: "Malindi, Kenya",
          slug: "cultural-events-coming-soon"
        },
        {
          img: "/images/events/image-2.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          time: "9.00am",
          location: "Malindi, Kenya",
          slug: "cultural-events-coming-soon"
        },
        {
          img: "/images/events/image-3.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          time: "9.00am",
          location: "Malindi, Kenya",
          slug: "cultural-events-coming-soon"
        },
        {
          img: "/images/events/image-4.jpg",
          title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          time: "9.00am",
          location: "Malindi, Kenya",
          slug: "cultural-events-coming-soon"
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
                            <div className='single w-full h-full relative block group rounded-[5px]'>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/team/team-details`}>
                                  	<Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-1 h-full md:h-[350px] lg:h-[300px] w-full '/>
                                  </Link>
                                </div>
                                <div className="w-full bg-white shadow-custom  border border-[#eaeaea] py-[25px] px-[30px] flex flex-col items-center justify-center">
                                    <div className="w-full text-[18px] leading-[26px] font-bold mb-4">
                                        <Link href={`/events/event-details/${item.slug}`} className='w-full '>Walking down the village mountain</Link>
                                    </div>
                                    <div className="mt-1 my-[-5px] mx-[-10px] w-full flex items-center flex-wrap">
                                        <div className="py-[5px] px-[30px] bg-yellowColor mr-2">
                                            <Link href={`/events/event-details/${item.slug}`} className='text-white font-semibold font-cav'>Funds</Link>
                                        </div>
                                        <div className=" py-[5px] flex items-center">
                                            <BsCalendar className="text-yellowColor"/>
                                            <span className="pl-2 text-[16px] ">March 14, 2023</span>
                                        </div>
                                        <div className="w-full my-[20px] text-[0.9rem] ">Join us for an unforgettable trek through the stunning Village Mountain. Breathtaking views, fresh air, and a fun group await! Hosted by Eventchamp.</div>
                                        <div className="flex flex-wrap  w-full">
                                            <div className="flex items-center">
                                                <BsHourglass className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">Showing</span>
                                            </div>
                                            <div className="flex items-center pl-3 pr-3">
                                                <MdLocationOn className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">Nairobi</span>
                                            </div>
                                            <div className="flex items-center ">
                                                <BiMoney className="text-yellowColor"/>
                                                <span className="text-[14px] text-primaryText pl-1">$200</span>
                                            </div>
                                        </div>
                                    </div>
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
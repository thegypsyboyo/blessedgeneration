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

const Team = () => {

  const data:TeamProps[] = [
      {
        image: "/images/test/gallery-1.jpg",
        name: "Cultural Events coming soon",
        position: "Cultural Events coming soon",
        slug: "Discover more",
        socials: [
          {
            platform: "facebook",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life"
          },
          {
            platform: "instagram",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
          },
          {
            platform: "linkedin",
            url: "https://backpacktraveler.qodeinteractive.com/people-nature-everyday-life/"
          },
        ]
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
                <Link href="/instagram">insta</Link>
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
                            <div className='single w-full h-full relative block '>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full group">
                                <Image src={item.image} alt='image-data' width={400} height={400}  className='object-cover   h-[300px] w-full '/>
                                  <div className="absolute flex flex-col top-0 left-0 transition-all duration-500  ">
                                    <span className="text-[12px] transition-all duration-500 relative bg-[#489f10] w-[40px] h-[40px] leading-[40px] text-white text-center pointer-events-auto flex items-center justify-center">
                                    <BsPlus className="text-white block items-center justify-center text-[25px] font-bold" />
                                    </span>
                                    <ul className="max-w-[40px] flex-col transition-all duration-500 h-full transform translate-x-[-70px] flex justify-center group-hover:translate-x-[0px]">
                                        {item.socials?.map((social, index) => (       
                                        <li key={index} className=" w-[40px] h-[40px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "hover:bg-blue-800":""} ${social.platform === "instagram" ? "hover:bg-red-500":""}  ${social.platform === "linkedin" ? "hover:bg-blue-400":""} bg-[#489f10] hover:bg-redDark text-white cursor-pointer w-full h-full flex items-center justify-center z-[99999]`}>
                                              {social.platform === "facebook" && <FaFacebookF className=""/>}
                                              {social.platform === "instagram" && <FaInstagram/>}
                                              {social.platform === "linkedin" && <FaLinkedinIn/>}
                                              {social.platform === "twitter" && <FaTwitter/>}
                                              {social.platform === "twitch" && <FaTwitch/>}
                                              {social.platform === "youtube" && <FaYoutube/>}
                                          </Link>
                                          </li>
                                        ))}
                                    </ul>
                                       <Link href="/instagram"><FaFacebookF className=""/></Link>
                                      <p className="text-[18px] leading-[18px] text-[700] font-cav text-white">23 May, 2022</p>
                                  </div>
                                </div>
                                <div className="w-full h-full"></div>
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
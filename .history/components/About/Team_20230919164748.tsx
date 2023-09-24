"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Home/Layout'
import AnimatedButton from '@/constants/AnimatedButton'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { SliderData, TeamMember, TeamProps } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock, BsPlus } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import urlFor from '@/lib/urlFor';

type Props = {
  teamMember: TeamMember[]
}

const Team = ({teamMember}:Props) => {

  const duplicatedData = [...teamMember, ...teamMember, ...teamMember];
  return (
    <section className="w-full h-full py-[120px] bg-transparent">
      <Layout >
        <div className="w-full h-full flex flex-wrap">
          <div className="relative flex ml-auto mr-auto w-full h-full">
            <div className="flex flex-wrap w-full h-full items-center justify-between ">
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[66.666%]">
                <div className="flex flex-col w-full h-full">
                  <span className='text-redDark font-cav text-[20px] font-[500]'>Our team</span>
                  <h2 className="text-[33px] leading-[43px] font-nun text-redDark">Meet Our Team</h2>
                </div>
              </div>
              <div className="w-full h-full flex-grow-0 flex-shrink-0 lg:w-[33.333%]">
                <div className="flex items-end w-full justify-end">
                  <AnimatedButton className='bg-yellowColor' link='/team' text='view all' style='!mt-0 bg-redDark !rounded-[0px]'/>
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
                <div className='h-full w-full !bg-white '>
                    {duplicatedData?.map((item, index) => (
                        <SwiperSlide key={index}  className='h-full w-full relative !bg-white'>
                            <div className='single w-full h-full relative block group'>
                                <div className="relative block overflow-hidden !bg-white  z-[1] h-full ">
                                  <Link href={`/team/team-details/${item.slug.current}`}>
                                  	<Image src={urlFor(item.image).url()} alt='image-data' width={400} height={400}  className='object-cover transform scale-110 group-hover:scale-125 transition-all duration-700 group-hover:rotate-12 h-[400px] w-full '/>
                                  </Link>
                                  <div className="absolute flex flex-col top-0 left-0 transition-all duration-500  ">
                                    <span className="text-[12px] transition-all duration-500 relative bg-yellowColor w-[40px] h-[40px] leading-[40px] text-white text-center pointer-events-auto flex items-center justify-center">
                                    <BsPlus className="text-white block items-center justify-center text-[25px] font-bold" />
                                    </span>
                                    <ul className="max-w-[40px] flex-col transition-all duration-500 h-full transform translate-y-[-300px] flex justify-center group-hover:translate-y-[0px]">
                                      {item.socials?.map((social, index) => (       
                                        <li key={index} className=" w-[40px] h-[40px] flex ">
                                          <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "hover:bg-blue-800":""} ${social.platform === "instagram" ? "hover:bg-[#F56040] ":""}  ${social.platform === "linkedin" ? "hover:bg-blue-400":""} ${social.platform === "twitter" ? "hover:bg-blue-600":""}  ${social.platform === "youtube" ? "hover:bg-[#c4302b]":""} ${social.platform === "twitch" ? "hover:[#6441A4]":""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[99999]`}>
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
                                  </div>
                                </div>
                                <div className="w-full bg-white  border border-light py-[22px] px-[15px] pb-0 flex flex-col items-center justify-center">
                               <Link href={`/team/team-details/${item.slug.current}`}   className="text-darkBlue font-bold  text-[20px] leading-[25px] pb-[10px]  ">{item.name}</Link>
                                  <p className="text-[16px] text-[#8ec135] font-[500] font-nan pb-[22px]">{item.position}</p>
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
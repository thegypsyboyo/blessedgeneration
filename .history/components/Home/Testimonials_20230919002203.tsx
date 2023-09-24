"use client"
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
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
import ProjectsData from './ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'

const  Testimonials = () => {
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
    <>
        <section className='overflow-hidden mt-0 pt-[120px] pb-[110px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[2]'>
            <div className='absolute content-[] w-full h-full flex items-center justify-center z-[-1] left-0 top-0 overflow-hidden'>
            </div>
            <Layout className="">
                <div className="flex flex-col justify-center items-center  w-full h-full">
                    <div className="flex-grow-0 flex-shrink-0 w-full mb-10">
                        <div className='relative z-[3] lg:max-w-540 m-auto w-full flex flex-col items-center justify-center text-center'>
                            <div className="relative mb-[28px] block -mt-[4px] w-full">
                            <span className="text-[26px] w-full text-yellowColor font-normal  leading-[24px] mb-[10px] font-man ">Testimonials</span>
                            <h2 className="text-dark text-[30px] leading-[45px] font-semibold">What our customer say about us</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full">
                        <Swiper
                            className='h-full w-full bg-transparent '
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
                            breakpoints={{
                                1200: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 2
                                }
                            }}
                            >
                            {duplicatedData.map((item, index) => (
                                <SwiperSlide key={index}  className='container h-full w-full relative z-[10] bg-transparent'>
                                    <div className='single w-full h-full relative block group '>
                                        <div className="bg-white shadow-lg px-[20px] py-[48px] xl:py-[50px] xl:px-[32px] text-center mb-[45px] relative z-[2] transition-all duration-500 rounded-xl">
                                            <div className="w-[55px] h-[55px] bg-yellowColor  rounded-full text-white text-[18px] leading-[55px] relative ml-auto mr-auto mb-[30px] transition-all duration-500">
                                                <div className="absolute content-[] w-[16px] h-[16px] bg-yellowColor left-[8px] bottom-[-8px] clip" />
                                                <i className="text-redDark">
                                                    <FontAwesomeIcon icon={faQuoteRight}/>
                                                </i>
                                            </div>
                                            <p className="text-[20px] font-[400] uppercase mb-[30px] transition-all duration-500 text-[#94a3b8]" >“ When starting a garden, one of the top pieces of advice is o invest in soil that is nutrient rich &amp; well drained. ”</p>

                                            <div className="mb-[44px]">
                                            <span className="text-[16px] text-white uppercase font-bold block mb-[6px] transition-all duration-500">ceo of halim co.</span>
                                            
                                            </div>
                                            <div className="w-[70px] h-[70px] rounded-full ml-auto relative mb-[-85px] mr-auto z-[2]">
                                                <div className="content-[] absolute h-full right-[-6px] bottom-[-6px] bg-darkBlue transition-all  rounded-full  duration-500 z-[-1]" />
                                                <Image src={"/images/test/gallery-1.jpg"} alt='author' width={100} priority height={100} className='w-full h-full object-cover  rounded-full overflow-hidden'/>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Layout>
        </section>
    </>

  )
}

export default Testimonials
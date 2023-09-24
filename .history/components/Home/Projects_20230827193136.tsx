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

const Projects = () => {
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
    <section className='py-[120px] mt-[90px]  w-full h-full bg-no-repeat bg-cover bg-center relative z-[5] ' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
        <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
        <Layout className="">
            <div className="flex flex-col justify-center items-center  w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 w-full mb-10">
                    <div className='relative z-[3] lg:max-w-540 m-auto w-full flex flex-col items-center justify-center text-center'>
                        <div className="relative mb-[28px] block -mt-[4px] w-full">
                        <span className="text-[24px] w-full text-orangeDefault font-normal  leading-[24px] mb-[10px] font-man uppercase">Featured Works</span>
                        <h2 className="m-0 text-primaryDark text-[50px] leading-[50px] font-[900] -tracking-[0.04em] mt-[6px]">
                            <AnimatedText text={"Our Recent & popular projects"} className={"text-darkBlue"} />
                        </h2>
                        </div>
                        <p className="text-[16px] mr-[33px] text-primaryText">There are many variations of passages of lorem ipsum available but the majority have suffered There are many variations of passages of lorem ipsum available but the majority have suffered</p>
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 w-full ">
                        <Swiper
                            className='h-full w-full'
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
                            }
                            }                    
                            >
                                <div className='h-full w-full'>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='container h-full w-full relative'>
                                            <div className='single w-full h-full mr-[20px] relative block shadow-custom group  '>
                                                <div className="relative block overflow-hidden  z-[1] h-full group transition-all duration-500">
                                                <Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover h-full w-full transform transition-all duration-500 ease-in-out  translate-x-[-50px] scale-125 group-hover:rotate-12  group-hover:translate-x-0'/>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1] group-hover:translate-x-0 hidden group-hover:block transition-all duration-500 ease-in-out'/>
                                                <div className="absolute bottom-[24px] left-[30px] z-[2] hidden group-hover:block group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out">
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
                                                    <h3 className="text-[24px] font-[900] -tracking-[0.04em] leading-[28px]">
                                                        <Link href={""} className='text-white transition-all duration-700 hover:text-orangeDefault' >{item.title}</Link>
                                                    </h3>
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

export default Projects
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
    <section className='mt-[200px] py-[120px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[5]' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
        <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.7] z-[-1] left-0 top-0'/>
        <Layout className="">
            <div className="flex flex-col justify-center items-center  w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 w-full mb-10">
                    <div className='relative z-[3] lg:max-w-540 m-auto w-full flex flex-col items-center justify-center text-center'>
                        <div className="relative mb-[28px] block -mt-[4px] w-full">
                        <span className="text-[24px] w-full text-white font-normal  leading-[24px] mb-[10px] font-man uppercase">[ our work ]</span>
                        <h2 className="m-0 text-primaryDark text-[50px] leading-[50px] font-[900] -tracking-[0.04em] mt-[6px]">
                            <AnimatedText text={"what we provide"} className={"text-white !uppercase font-[800]"} />
                        </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default Projects
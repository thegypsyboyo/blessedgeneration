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

const Events = () => {
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
      const updateSlidesPerView = () => {
        const breakpoints = {
          lg: 1200,
          md: 768,
          // Add more breakpoints as needed
        };
  
        // Update slidesPerView based on window width
        if (window.innerWidth >= breakpoints.lg) {
          setSlidesPerView(3);
        } else if (window.innerWidth >= breakpoints.md) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(1);
        }
      };
  
      // Initial update
      updateSlidesPerView();
  
      // Update slidesPerView whenever the window width changes
      window.addEventListener('resize', updateSlidesPerView);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', updateSlidesPerView);
      };
    }, []);

    const data:SliderData[] = [
        {
          img: "/images/blog/img-1.jpg",
          title: "A Child in need of your help",
          description: "Giving is an act of kindness",
          button: "Discover more"
        },
        {
          img: "/images/blog/img-2.jpg",
          title: "Donating to a child in need",
          description: "Children's home in Kisii Kenya",
          button: "Learn more"
        },
        {
          img: "/images/blog/img-3.jpg",
          title: "A Child in need of your help",
          description: "Giving is an act of kindness",
          button: "Discover more"
        },
        {
          img: "/images/blog/img-4.jpg",
          title: "Donating to a child in need",
          description: "Children's home in Kisii Kenya",
          button: "Learn more"
        },
    ]
  return (
    <section className="py-[120px] relative block bg-borderColor z-[1] h-full">
        <Layout className="">
            <div className="flex flex-wrap  w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 w-full lg:max-w-[33.333333%] mb-[30px]">
                    <div className='relative z-[3] block w-full'>
                        <div className="relative mb-[28px] block -mt-[4px] w-full">
                        <span className="text-[24px] w-full text-primaryBase font-[700] leading-[24px] mb-[10px] font-cav">Upcoming events</span>
                        <h2 className="m-0 text-primaryDark text-[50px] leading-[50px] font-[900] -tracking-[0.04em] mt-[6px]">
                            <AnimatedText text={"Latest upcoming events"} className={""} />
                        </h2>
                        </div>
                        <p className="text-[16px] mr-[33px] text-primaryText">There are many variations of passages of lorem ipsum available but the majority have suffered</p>
                        <AnimatedButton style='' text="discover more" link="/events" className="" />
                    </div>
                </div>
                <div className="flex-shrink-0 flex-grow-0 w-full lg:max-w-[66.66666667%]">
                        <Swiper
                            className='h-full w-full'
                            // effect={'fade'}
                            autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            }}
                            grabCursor={true}
                            centeredSlides={false}
                            spaceBetween={20}
                            loop={true}

                            modules={[EffectFade ,Autoplay, Navigation]} 
                            slidesPerView={slidesPerView}                     
                            >
                                <div className='h-full w-full'>
                                    {data.map((item, index) => (
                                        <SwiperSlide key={index}  className='container h-full w-full relative'>
                                            <div className='single w-full h-full mr-[20px] relative block shadow-custom rounded-[20px]'>
                                                <div className="relative block overflow-hidden rounded-[20px] z-[1] h-full">
                                                <Image src={item.img} alt='image-data' width={400} height={400}  className='object-cover h-full w-full'/>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 content-[] bg-primaryDark bg-custom-gradient z-[1]'/>
                                                <div className="absolute top-[20px] right-[20px] bg-yellowColor rounded-[20px] px-[25px] py-[6px] z-[2]">
                                                    <p className="text-[18px] leading-[18px] text-[700] font-cav ">23 May, 2022</p>
                                                </div>
                                                <div className="absolute bottom-[24px] left-[30px] z-[2]">
                                                    <ul className="relative flex items-start space-x-4">
                                                        <li className="relative flex items-center text-[14px] text-white font-[600]">
                                                            <BsClock className="text-yellowColor mr-[5px]"/>
                                                            8.000pm
                                                        </li>
                                                        <li className="relative flex items-center text-[14px] text-white font-[600]">
                                                            <BiSolidLocationPlus className="text-yellowColor mr-[5px]"/>
                                                            8.000pm
                                                        </li>
                                                    </ul>
                                                    <h3 className="text-[24px] font-[900] -tracking-[0.04em] leading-[28px]">
                                                        <Link href={""} className='text-white transition-all duration-700 hover:text-yellowColor' >{item.title}</Link>
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

export default Events
"use client"

import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { SliderData } from '@/typings'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import AnimatedButton from '@/constants/AnimatedButton'

const Volunteer = () => {
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
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className="relative block pt-[20px] pb-[90px] bg-lightBlue">
        <div className="w-full h-full block">
            <Layout className="flex items-center flex-col">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
            <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0">
                    <div className="">
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-redLight'>Become a volunteer</h2>
                        <p>
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.

                            </p>

                            <ul className='mt-[30px] overflow-hidden ml-0 list-none'>
                                <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] text-darkBlue">
                                    <h5 className='font-bold text-[20px] capitalize'>Highest Success Rates</h5>
                                    <p className='mt-5'>
                                        Resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch
                                    </p>
                                    <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                    </span>
                                </li>
                                <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] mt-8  text-darkBlue">
                                    <h5 className='font-bold text-[20px] capitalize'>Highest Success Rates</h5>
                                    <p className='mt-5'>
                                        Resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch
                                    </p>
                                    <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                    </span>
                                </li>
                            </ul>
                    </div>
                    <AnimatedButton className='' text='join our community' style='' link='/become-volunteer'/>
                </div>
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full mb-8">
                    <div className="lg:pl-[30px] mr-[100px] relative z-[1] w-[100000000000%]">
                        <Swiper
                            className=''
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
                            >
                                <div className=''>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='container h-full w-full relative'>
                                              <Image src={item.img} alt='main-image' width={200} height={200} priority className='w-full h-full object-cover'/>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                        <div className='absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]'/>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    </section>
  )
}

export default Volunteer
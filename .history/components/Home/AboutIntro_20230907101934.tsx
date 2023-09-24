"use client"
import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons'
import { SliderData } from '@/typings'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import AnimatedButton from '@/constants/AnimatedButton'

const AboutIntro = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const data:SliderData[] = [
        {
            img: "/images/testing/gallery-4.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
            img: "/images/testing/gallery-3.jpg",
            title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
        {
            img: "/images/testing/gallery-2.jpg",
            title: "Cultural Events coming soon",
          description: "Cultural Events coming soon",
          button: "Discover more",
          time: "9.00am",
          location: "Malindi, Kenya"
        },
        {
          img: "/images/testing/gallery-1.jpg",
          title: "Thanks giving events coming soon",
          description: "Thanks ",
          button: "Discover more",
          time: "9.00am",
          location: "Nairobi, Kenya"
        },
    ]
    const duplicatedData = [...data, ...data, ...data];
  return (
    <section className='pt-[120px] w-full h-full'>
        <Layout className="h-full">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full mb-8">
                    <div className="mr-[100px] relative z-[1] md:h-[600px] lg:h-[660px] mb-5">
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
                                <div className='w-full h-full'>
                                    {duplicatedData.map((item, index) => (
                                        <SwiperSlide key={index}  className='h-full w-full relative'>
                                              <Image src={item.img} alt='main-image' width={800} height={800} priority className='w-full  md:h-[600px] lg:h-[660px]  object-cover'/>
                                        </SwiperSlide>
                                    ))}
                                </div>
                        </Swiper>
                        <div className='absolute right-[-30px] bottom-[-30px] h-full w-full z-[-1] bg-[#f9f9f9] content-[]'/>
                        <div className="absolute right-[-100px] bottom-[100px]  bg-[#f9f9f9] shadow-custom rounded-[30px] p-[50px] z-[2]">
                            <span className="md:w-[40px] lg:w-[60px] md:h-[40px] w-[35px] h-[35px] lg:h-[60px] leading-[60px] bg-redLight inline-block rounded-full text-darkBlue cursor-pointer text-center relative">
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-redLight play'/>
                                    <i className="text-white">
                                        <FontAwesomeIcon icon={faPlay}/>
                                    </i>
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-redLight play'/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0">
                    <div className="lg:pl-[30px]">
                        <h2 className='font-[800] relative z-[1] mb-[25px] leading-[40px] text-[40px] text-redLight tracking-[0.1px]'>Blessed Generation is a loving charitable institution</h2>
                        <p>
                           Blessed Generation is a Kenya-based Non Governmental Organization (NGO) registered as a Charitable Children&apos;s Institution.
                            </p>

                            <ul className='mt-[30px] overflow-hidden ml-0 list-none'>
                                <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] text-yellowColor">
                                    <h5 className='font-bold text-[18px] capitalize text-yellowColor'>EDUCATION IS KEY</h5>
                                    <p className='mt-5 text-black'>
                                    Education plays an important role in our help. It is the key to the future. Blessed Generation offers children primary and further education and, where possible, supports vocational or university education.
                                    </p>
                                    <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                    </span>
                                </li>
                                <li className="w-full float-left py-0 px-[15px] relative z-[1] pl-[75px] mt-8 text-yellowColor">
                                    <h5 className='font-bold text-[20px] capitalize'>Highest Success Rates</h5>
                                    <p className='mt-5 text-black'>
                                        Resolved entrance together graceful. Mrs assured add private married removed believe did she regret wished an branch
                                    </p>
                                    <span className='absolute left-0  text-center rounded-[50%] font-bold h-[50px] w-[50px]  bg-[#f9f9f9] top-0 flex items-center justify-center'>
                                        <FontAwesomeIcon icon={faCheck} className='absolute '/>
                                    </span>
                                </li>
                            </ul>
                            <div className="">
                                <AnimatedButton  className='' link='/about' text='learn more'/>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default AboutIntro
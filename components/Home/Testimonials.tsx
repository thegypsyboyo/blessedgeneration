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
import { SliderData, TestimonialsProps } from '@/typings'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import { BsArrowLeft, BsClock } from 'react-icons/bs'
import { BiSolidLocationPlus } from 'react-icons/bi'
import ProjectsData from './ProjectsData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeftAlt, faQuoteRight, faStar } from '@fortawesome/free-solid-svg-icons'
import urlFor from '@/lib/urlFor'

type Props = {
    test:TestimonialsProps[]
}
const  Testimonials = ({test}:Props) => {
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
    const duplicatedData = [...test, ...test, ...test];
    console.log("Testimonials: ", test)
  return (
    <>
        <section className='overflow-hidden mt-0 pt-[120px] pb-[60px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[2]'>
            <div className='absolute content-[] w-full h-full flex items-center justify-center z-[-1] left-0 top-0 overflow-hidden'>
            </div>
            {test.map((item, index) => (
            <Layout className="" key={index}>
                <div className="flex flex-col justify-center items-center  w-full h-full">
                    <div className="flex-grow-0 flex-shrink-0 w-full mb-10">
                    <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
                        <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">{item.pageSubtitle}</span>
                        <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">{item.pageTitle}</h2>
                        <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">{item.pageDescription}</p>
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
                            {item.testimonay.map((tax, index) => (
                                <SwiperSlide key={index}  className='h-full w-full relative z-[10] bg-transparent'>
                                    <div className='single w-full h-full relative block group '>
                                        <div className="bg-white shadow-main p-[24px] mb-[20px] relative text-[16px] text-primaryText mt-[8px] mx-[14px] flex flex-col items-center justify-center ">
                                            <div className="absolute content-[] border-[8px] right-[calc(50%-8px)] border-solid border-t-transparent bottom-[-8px]   border-l-transparent border-b-white border-r-white transform rotate-[45deg] shadow-main "/>
                                            <div className="text-redLight text-center">
                                                <FontAwesomeIcon icon={faQuoteLeftAlt} className='text-[47px] leading-[24px]'/>
                                            </div>
                                            <div className="w-full flex items-center justify-center text-center my-3">{tax.quote}</div>
                                            <ul className="leading-[24px] text-[#fbbf24] mb-0 h-full flex items-center space-x-0 text-[16px]">
                                                <li className="flex items-center justify-center  w-full  text-center ">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </li>
                                                <li className="flex items-center justify-center  w-full  text-center ">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </li>
                                                <li className="flex items-center justify-center  w-full  text-center ">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </li>
                                                <li className="flex items-center justify-center  w-full  text-center ">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </li>
                                                <li className="flex items-center justify-center  w-full  text-center ">
                                                    <FontAwesomeIcon icon={faStar}/>
                                                </li>
                                            </ul>
                                           
                                        </div>
                                            <div className="flex flex-col  items-center justify-center">
                                                <Image src={urlFor(tax.image).url()} alt='image-data' width={800} height={800} className='w-[56px] h-[56px] rounded-full mb-3 shadow-main'/>
                                                <div className="text-center">
                                                    <h4 className="etext-dark text-[16px] font-semibold mb-2">{tax.name}</h4>
                                                    <span className="block texxt-[14px] capitalize">{tax.position}</span>
                                                </div>
                                            </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </Layout>

            ))}
        </section>
    </>

  )
}

export default Testimonials
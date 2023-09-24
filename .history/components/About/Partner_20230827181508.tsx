"use client"

import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { ImageInfo } from '@/typings';
import Link from 'next/link';


const Partner = () => {
    const images:ImageInfo[] = [
        {
            image: "/images/partner/1.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/2.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/3.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/4.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/5.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/6.jpg",
            location: "",
            title: ""
        },
        {
            image: "/images/partner/7.jpg",
            location: "",
            title: ""
        },

    ]
    const duplicatedData = [...images, ...images, ...images];

  return (
    <div className='relative z-[6] w-full h-full mb-[90px]'>
        <Layout>
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-full w-full">
                    <div className=" bg-yellowColor shadow-custom -mt-[80px] mb-[-80px] p-[30px] rounded-xl">
                        <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                          }}
                          grabCursor={true}
                          centeredSlides={false}
                          spaceBetween={5}
                          loop={true}
                          slidesPerView={3}
                          modules={[Autoplay, Navigation]}
                          breakpoints={{
                            1200: {
                                slidesPerView: 5
                            },
                            768: {
                                slidesPerView: 3
                            }
                        }}        
                        className="w-full lg:max-w-[80%]  h-full flex items-center justify-center"
                        >
                            <div className="w-full h-full">
                                {duplicatedData.map((item, index) => (
                                <SwiperSlide className="w-full h-full" key={index}>
                                    <div className="w-[300px] bg-white h-[70px]">
                                        <Link href="" className='w-full h-full '>
                                            <Image src={item.image} alt='' width={200} height={200} className='w-[300px] h-full object-contain opacity-[1] hover:opacity-[0.6]'/>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </div>

                        </Swiper>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default Partner
"use client"

import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { ImageInfo } from '@/typings';


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

    ]
  return (
    <div className='relative z-[6] w-full h-full mb-[90px]'>
        <Layout>
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-full w-full">
                    <div className=" bg-white shadow-custom -mt-[80px] mb-[-80px] p-[50px] rounded-xl">
                        <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                          }}
                          grabCursor={true}
                          centeredSlides={false}
                          spaceBetween={20}
                          loop={true}
                          modules={[Autoplay, Navigation]}
                          slidesPerView={3}
                          className="w-full h-full"
                        >
                            <div className="w-full h-full">
                                {images.map((item, index) => (
                                <SwiperSlide className="w-full h-full" key={index}>
                                    <div className="w-full h-full">
                                        <Image src={item.image} alt='' width={200} height={200} className='w-full h-full object-contain'/>
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
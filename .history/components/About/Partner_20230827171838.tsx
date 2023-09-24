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
  return (
    <div className='relative z-[6]'>
        <Layout>
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-full w-full">
                    <div className="mb-[-80px] bg-white shadow-custom p-[50px] mt-[-180px] rounded-s-xl">
                        <Swiper
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
                        
                        >
                            <div className="">
                                <SwiperSlide >
                                    <div className="">
                                        <Image src={"/images/partner/1.jpg"} alt='' width={200} height={200} className=''/>
                                    </div>
                                </SwiperSlide>
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
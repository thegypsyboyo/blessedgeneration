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


interface PartnerProps {
    className?: string;
}

const Partner:React.FC<PartnerProps> = ({className}) => {
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
    <div className='relative z-[6] w-full h-full pb-[90px] py-[120px]'>
        <Layout className="flex flex-col ">
        <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
                <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">our partners</span>
                <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">our partners around the globe</h2>
                <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">Gardenias’ mission is to provide our customers with responsive service and unsurpassed quality at an affordable price.</p>
            </div>
            <div className="flex flex-wrap w-full h-full">
                <div className="flex-grow-0 flex-shrink-0 lg:max-w-full w-full">
                    <div className={`bg-white  rounded-xl ${className}`}>
                        <Swiper
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                          }}
                          grabCursor={true}
                          centeredSlides={false}
                          spaceBetween={20}
                          loop={true}
                          slidesPerView={3}
                          modules={[Autoplay, Navigation]}
                          breakpoints={{
                            1200: {
                                slidesPerView: 5
                            },
                            768: {
                                slidesPerView: 4
                            }
                        }}        
                        className="w-full lg:max-w-[100%]  h-full flex items-center justify-center"
                        >
                            <div className="w-full h-full">
                                {duplicatedData.map((item, index) => (
                                <SwiperSlide className="w-full h-full" key={index}>
                                    <div className="w-full bg-white h-[100px]">
                                        <Link href="" className='w-full h-full relative '>
                                            <Image src={item.image} alt='partners' priority  width={800} height={800} className='w-[300px] h-full object-cover opacity-[1] gray-scale'/>
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
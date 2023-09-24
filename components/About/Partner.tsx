"use client"

import React from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Partners } from '@/typings';
import Link from 'next/link';
import urlFor from '@/lib/urlFor';


interface PartnerProps {
    className?: string;
    partners:Partners[]
}



const Partner:React.FC<PartnerProps> = ({className, partners}) => {

    
    console.log("Our partners", partners)
  return (

    <div className='relative z-[6] w-full h-full pb-[120px] py-[120px]'>
        {partners.map((item, index) => (
        <Layout className="flex flex-col " key={index}>

        <div className="relative -mt-[4px] mb-[46px] text-center flex flex-col items-center">
                <span className="text-primaryBase text-[24px] font-[700] leading-[24px] mb-[10px] font-cav capitalize">{item.subtitle}</span>
                <h2 className="m-0 text-orangeDefault lg:text-[50px] lg:leading-[60px] text-[35px] leading-[40px] -tracking-[0.04em] font-[500] lg:max-w-[650px] sm:max-w-[500px] mt-[6px] capitalize">{item.title}</h2>
                <p className="text-center font-[400] mt-2 text-[16px] lg:max-w-[650px] sm:max-w-[500px]">{item.description}</p>
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
                                {item.image.map((item, index) => (
                                <SwiperSlide className="w-full h-full" key={index}>
                                    <div className="w-full bg-white h-[100px]">
                                        <Link href="" className='w-full h-full relative '>
                                            <Image src={urlFor(item.image).url()} alt='partners' priority  width={800} height={800} className='w-[300px] h-full object-contain opacity-[1] gray-scale'/>
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

        ))}
    </div>
  )
}

export default Partner
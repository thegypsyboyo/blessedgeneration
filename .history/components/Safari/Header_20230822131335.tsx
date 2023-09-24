"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { AnimatedText } from '@/constants/AnimatedText';
import Layout from '../Home/Layout';
import { SliderData } from '@/typings';
import AnimatedButton from '@/constants/AnimatedButton';
import Image from 'next/image';


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const data:SliderData[] = [
    {
      img: "/images/test/gallery-1.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/test/gallery-2.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
    {
      img: "/images/test/gallery-3.jpg",
      title: "A Child in need of your help",
      description: "Giving is an act of kindness",
      button: "Discover more",
      location: "",
      time: ""
    },
  ]

  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: { opacity: 1, y: 0, transition: { delay: 1, duration: 2 } },
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (

    <section className='py-[120px] w-full h-full'>
        <Layout>
            <Swiper
            className='flex items-start  bg-white w-full h-full lg:h-screen'
            effect={'fade'}
            autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[EffectFade ,Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            >
            <div className='relative w-full h-full flex transition-transform duration-500  bg-darkBlue'>
                {data.map((item, index) =>(
                <SwiperSlide key={index}
                    className='w-full h-screen'
                >
                <div className='relative flex h-full flex-wrap w-full bg-dakBlue justify-center items-center'>
                    <div className="content-[] bg-lightBlue absolute w-[70%]  h-full top-0 bottom-0 left-0  "/>
                    <div className="bg-lightBlue w-full h-full flex-shrink-0 flex-grow-0  lg:max-w-[40.8%] z-[2] flex text-center items-center justify-center">
                        <div className="px-[16%] pt-[50px] pb-[85px] w-full h-full flex flex-col items-center">
                            <span className='text-[40px] font-[300] font-cav  text-darkBlue'>Watamu Kenya</span>
                            <h3 className='text-[30px] leading-[43px] font-[400] font-nun text-darkBlue uppercase'>travel nighclubs in watamu kenya</h3>
                            <span className='text-primaryText font-light font-nun text-[20px] uppercase'>wonderlust</span>
                            <p className="text-[16px] text-primaryText leading-[25px] font-[400] font-man mt-[20px] tracking-[0.04em]">
                                Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad, eum ne facete delectus. 
                            </p>

                            <div className="mt-[30px]">
                                <Link href="" className="font-[400] uppercase font-man text-[14px]">read more ...</Link>
                                {/* <AnimatedButton className='' link='' text='read more'/> */}

                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[59.2%] flex-shrink-0 flex-grow-0  w-full h-full  bg-yellow bg-trasparent items-center flex justify-center z-[2]">
                        <Link href="" className="w-full  bg-white">
                            <Image src={item.img} alt="image main" width={500} height={500} className="w-full h-[400px] object-cover"/>
                        </Link>
                    </div>
                </div>
                    
                </SwiperSlide>

                ))}
            </div>
            </Swiper>
        </Layout>
    </section>
   
  )
}

export default Header
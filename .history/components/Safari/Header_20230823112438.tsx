"use client"
import React, {useEffect, useState, useRef }from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import Layout from '../Home/Layout';
import { SliderData, SliderVisit } from '@/typings';
import Image from 'next/image';
import AnimatedIcon from '@/constants/AnimatedIcon';
import { BsArrowLeft, BsArrowRight, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';


const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
 
  const data:SliderVisit[] = [
    {
      img: "/images/test/gallery-1.jpg",
      title: "A Child in need of your help",
      description: "Lorem ipsum dolor sit amet, no elitr tation delicata cum, mei in causae deseruisse. Has eruditi singulis principes ad, eam fuisset voluptua ea, pro ceteros adipisci in. Sed tempor adversarium ad, eum ne facete delectus",
      location: "Malindi Kenya",
      category: "Visit Kenya",
      link: "blessed-generation-malindi"
    },
    {
      img: "/images/test/gallery-4.jpg",
      title: "A Child in need of your help",
      description: "",
      location: "Malindi Kenya",
      category: "Visit Kenya",
      link: "blessed-generation-malindi"
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
            navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
            modules={[EffectFade ,Autoplay, Navigation]}
            onSlideChange={handleSlideChange}
            >
            <div className='relative w-full h-full flex transition-transform duration-500  bg-darkBlue'>
                {data.map((item, index) =>(
                <SwiperSlide key={index}
                    className='w-full h-screen'
                >
                <div className='relative flex h-full flex-wrap w-full bg-transparent justify-center items-center lg:px-5'>
                    <div className="content-[] bg-lightBlue absolute w-[70%]  h-full top-0 bottom-0 left-0  "/>
                    <div className="bg-lightBlue w-full h-full flex-shrink-0 flex-grow-0  lg:max-w-[40.8%] z-[2] flex text-center items-center justify-center">
                        <div className="px-[16%] pt-[50px] pb-[85px] w-full h-full flex flex-col items-center">
                            <span className='text-[40px] font-[300] font-cav  text-white'>{item.location}</span>
                            <h3 className='text-[30px] leading-[43px] font-[400] font-nun text-white uppercase'>{item.title}</h3>
                            <span className='text-primaryText font-light font-nun text-[20px] uppercase'>{item.category}</span>
                            <p className="text-[16px] text-white leading-[25px] font-[400] font-man mt-[20px] tracking-[0.04em]">
                               {item.description}
                            </p>

                            <div className="mt-[30px]">
                                <Link href={item.link} className="font-[400] uppercase font-man text-[14px] text-white">read more ...</Link>
                            </div>
                            <div className="flex mt-5 space-x-2">
                                <AnimatedIcon href='' icon={<BsInstagram/>}/>
                                <AnimatedIcon href='' icon={<BsTwitter/>}/>
                                <AnimatedIcon href='' icon={<BsFacebook/>}/>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-[59.2%] flex-shrink-0 flex-grow-0  w-full h-full  bg-yellow bg-trasparent items-center flex justify-center z-[2]">
                        <Link href="" className="w-full  bg-white overflow-hidden h-[400px] lg:h-[80%]">
                            <Image src={item.img} alt="image main" width={500} height={500} className="w-full h-full  object-cover"/>
                        </Link>
                    </div>
                    <div className="custom-prev z-[2] absolute left-0 top-[50%] px-2 py-3 bg-lightBlue">
                     <BsArrowLeft/>
                    </div>
                    <div className="custom-next z-[2] absolute right-0 top-[50%] px-2 py-3 bg-lightBlue ">
                        <BsArrowRight/>
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
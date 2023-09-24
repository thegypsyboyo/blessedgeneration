"use client"

import React, { useState } from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'
import Image from 'next/image'
import DonateNow from '../Donate/DonateNow'
import AnimatedButton from '@/constants/AnimatedButton'
import { EventsProps, ImageInfo } from '@/typings'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Events from './Events'


type Props = {
    eventdata:EventsProps[]
  }
const HowToHelp = () => {
  
  return (
    <>
    <section className='w-full h-full relative py-[0px] pb-0'>

        <div className="relative w-full flex  flex-wrap bg-redDark ">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-full h-full transform scale-[1.18] bg-center bg-norepeat bg-cover" style={{backgroundImage: `url(/images/testing/gallery-8.jpg)`}} />
            </div>
            <div className="bg-darkBlue  opacity-[.7] h-full w-full top-0 left-0 absolute " />

            <div className=" w-full py-[90px] !bg-redDark">
                <Layout >
                <div className="w-full p-4 items-center flex flex-wrap  relative">
                    <div className="mb-[30px] flex-grow-0 flex-shrink-0 lg:w-[50%] w-full">
                            <h3 className="w-full text-[#fe0] text-[16px] font-bold  uppercase leading-[28px] mb-[20px]">Mission is Give for People</h3>
                            <h2 className="!ml-0 lg:w-[525px] flex items-start justify-start text-white text-[40px] font-bold leading-[55px] mb-[20px] ">Some People Need Help And We Give It! </h2>
                            <p className='text-[18px] font-normal leading-[33px] text-white max-w-[525px]'>Alienum phaedrum torquatos nec eu, vis detrax culis ex, nihis in mei. Mei an periculaeuripidis.</p>
                    </div>
                    <div className="flex-shrink-0 flex-grow-0 lg:w-[50%] w-full items-center lg:justify-end">
                        <div className="w-full flex lg:justify-end items-end">
                        <AnimatedButton className='!bg-yellowColor' link='/donate' text='make an impact' style='!mt-0 !ml-0 !rounded-[8px]'/>
                        </div>
                    </div>

                        </div>
                </Layout>
            </div>
        </div>
    </section>

    </>
  )
}

export default HowToHelp
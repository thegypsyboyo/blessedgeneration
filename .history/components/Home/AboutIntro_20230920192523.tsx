"use client"
import React, { useState } from 'react'
import Layout from '../Home/Layout'
import Image from 'next/image'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { SliderData } from '@/typings'

import 'swiper/css';
import VideoPlayer from '@/constants/VideoPlayer'

const AboutIntro = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }



  return (
    <section className='pt-[120px] w-full h-full'>
        <Layout className="h-full">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
                <div className="lg:max-w-[50%] flex-grow-0 flex-shrink-0 w-full mb-8 pr-[15px] h-full">

                    <div className="w-full h-full">
                        <div className='max-w-full'>
                            <Image src="/images/logo.jpg" alt="logo" width={800} height={800} className="w-[40px]"/>
                        </div>
                        <div className='mb-[20px]'>
                        <h6 className='mb-[16px] text-yellowColor  text-[18px] font-medium leading-[28px]'>
                            We are a very dedicated team
                        </h6>
                        <h2 className="text-redDark lg:text-[48px] font-bold leading-[60px]">We are a full-service digital agency</h2>

                        <p className="mt-[25px] mb-[20px] text-[#94a3b8] text-[18px] font-normal leading-[28px] ">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.						
                        </p>
                        <div className="max-w-full mt-[25px]">
                            <div className="inline-flex justify-center items-center bounded-full">
                                <div className="w-[36px] h-[36px] text-white bg-redDark rounded-full text-[16px] flex items-center justify-center cursor-pointer" onClick={openModal}>
                                    <FontAwesomeIcon icon={faVideoCamera}/>
                                </div>
                                <div className="pl-3 text-dark text-[18px] font-bold">Watch now</div>
                            </div>
                        </div>
                        <VideoPlayer
                            videoId="5Fzmm7PF6BA"
                            className="my-custom-video-class"
                            isOpen={isModalOpen}
                            onClose={closeModal}
                        />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-[50%] flex-shrink-0 flex-grow-0 pl-[15px] ">
                   
                    <div className="w-full h-full  flex flex-row items-center justify-center">
                        <div className=" w-[41.667%]  h-full flex flex-col items-end p-0 pr-[10px]">
                            <div className="max-w-full mb-[10px] h-full">
                                <Image src="/images/testing/gallery-1.jpg" alt='gallery-1' width={800} height={800} className='object-cover rounded-[8px] h-[250px]'/>
                            </div>
                            <div className="max-w-full h-full">
                                <div className="bg-redDark rounded-[8px] w-[150px] h-[150px]"></div>
                            </div>
                        </div>
                        <div className="w-[58.333%] h-full  pl-[10px]">
                            <div className="w-full h-[500px]">
                                <Image src="/images/testing/gallery-1.jpg" alt="gallery-1" width={800} height={800} className="w-full h-full object-cover rounded-[8px]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
  )
}

export default AboutIntro
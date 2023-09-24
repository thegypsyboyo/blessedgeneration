"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import VideoPlayer from '@/constants/VideoPlayer'

const Video = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

  return (
    <>
        <section className="flex flex-col w-full items-center justify-center h-full mt-0 mr-0 mb-[-230px]">
                <Layout className="flex items-center justify-center">
                <div className="mx-auto w-full md:w-[83.333%] flex items-center justify-center p-0 flex-col h-[400px] relative">
                    <Image src={"/images/testing/gallery-3.jpg"} alt='gallery-3' width={800} height={800} className="w-full h-full object-cover "/>
                    <div className="max-w-full mt-[25px]">
                    <span className="w-[120px] h-[120px] leading-[120px] bg-white inline-block rounded-full text-darkBlue cursor-pointer text-center absolute top-[40%] left-[40%]">
                                {/* <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/> */}
                                <button onClick={openModal} className="w-full h-full">
                                <FontAwesomeIcon icon={faPlay}/>
                                </button>
                                {/* <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/> */}
                            </span>
                        </div>
                        <VideoPlayer
                            videoId="5Fzmm7PF6BA"
                            className="my-custom-video-class"
                            isOpen={isModalOpen}
                            onClose={closeModal}
                        />
                </div>
                </Layout>
        </section>
        <section className="w-full h-[550px] bg-redDark">
            <Layout>
                <div className="w-full h-full mx-auto md:w-[83.333%] pt-[290px]">
                    <div className='w-full h-full flex flex-wrap items-center justify-center'>
                        <div className="md:w-[50%] w-full h-full md:pr-[10px]">
                            <div className="w-full h-full">
                                <h5 className="mb-3 text-[#FFFFFF80] text-[18px] font-bold leading-[28px]"><span>Techwind Agency</span></h5>
                                <h2 className="text-white text-[30px] font-semibold leading-[45px]">We are a full-service digital company</h2>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full h-full md:pl-[10px]">
                            <div className="w-full h-full text-[#FFFFFF80] text-[16px] font-normal leading-[26px] ">                                
							Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.

                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    </>
  )
}

export default Video
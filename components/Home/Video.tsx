"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Layout from './Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faPlay, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import VideoPlayer from '@/constants/VideoPlayer'
import Link from 'next/link'
import { MyStory } from '@/typings'
import urlFor from '@/lib/urlFor'
import AnimatedButton from '@/constants/AnimatedButton'

type Props = {
    mystories:MyStory[]
}
const Video = ({mystories}:Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    console.log("My Stories:", mystories)

  return (
    <>
    {mystories.map((item, index) =>(
    <div key={index}>
        <section className="flex flex-col w-full items-center justify-center h-full mt-0 mr-0 mb-[-230px]">
                <Layout className="flex items-center justify-center">
                <div className="mx-auto w-full md:w-[83.333%] flex items-center justify-center p-0 flex-col h-[400px] relative">
                    <Image src={urlFor(item.image).url()} alt='gallery-3' width={800} height={800} className="w-full h-full object-cover "/>
                    <div className="max-w-full mt-[25px]">
                    <span className="w-[120px] h-[120px] leading-[120px] bg-white inline-block rounded-full text-darkBlue cursor-pointer text-center absolute top-[40%] left-[40%] group">
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play z-[1] group-hover:hidden'/>
                                <button onClick={openModal} className="w-full h-full !z-[500]">
                                <FontAwesomeIcon icon={faPlay}/>
                                </button>
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play !z-[1] group-hover:hidden'/>
                            </span>
                        </div>
                        <VideoPlayer
                            videoId={item.videoId}
                            className="my-custom-video-class"
                            isOpen={isModalOpen}
                            onClose={closeModal}
                        />
                </div>
                </Layout>
        </section>
        <section className="w-full h-full bg-redDark">
            <Layout>
                <div className="w-full h-full mx-auto md:w-[83.333%] pt-[290px] pb-[100px]">
                    <div className='w-full h-full flex flex-wrap items-center justify-center'>
                        <div className="md:w-[50%] w-full h-full md:pr-[10px]">
                            <div className="w-full h-full">
                                <h5 className="mb-3 text-light  text-[18px] font-bold leading-[28px]"><span>{item.subtitle} </span></h5>
                                <h2 className="text-white text-[30px] font-semibold leading-[45px] lg:max-w-[470px] ml-0 flex items-start justify-start mb-3">{item.title} </h2>
                            </div>
                        </div>
                        <div className="md:w-[50%] w-full h-full md:pl-[10px]">
                            <div className="w-full h-full text-white  text-[16px] font-normal leading-[26px] ">                                
							{item.description}

                            </div>
                            <div className="mt-3 text-white  relative flex flex-col  items-center justify-start text-[16px] font-semibold">
                                <Link href={item.slug} className='w-full h-full outline-none '>
                                Read more
                                <FontAwesomeIcon icon={faAngleRight} className="ml-2"/>
                                </Link>
                            </div>
                            <AnimatedButton className='' text='view all stories' style='rounded-[5px] bg-yellowColor' link='#'/>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    </div>
    ))}
    </>
  )
}

export default Video
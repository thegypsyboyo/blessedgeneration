"use client"
import Image from "next/image"
import {FaPlay} from "react-icons/fa"
import React, { useState, useEffect } from "react"

import ModalVideo from "react-modal-video"
import { AboutVideo } from "@/typings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import Layout from "@/components/Home/Layout"



const VideoComponent:React.FC<AboutVideo> = ({ channel, videoId, bgImage, description})=> {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "visible";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);


  return (
    <>
    <section className='py-[120px] mt-[90px]  w-full h-full bg-no-repeat bg-cover bg-center relative z-[5] ' style={{backgroundImage: `url(${bgImage})`}}>
        <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
        <Layout >
            <div className="flex flex-wrap w-full h-full items-center justify-center">
                <div className="lg:max-w-full w-full  flex-grow-0 flex-shrink-0 ">
                    <ModalVideo 
                        channel={channel} 
                        isOpen={isOpen}                            videoId={videoId}
                        onClose={() => setIsOpen(false)}
                    />
                    <div className="text-center">
                        <div className="mb-[45px] ">
                            <span className="w-[120px] h-[120px] leading-[120px] bg-white inline-block rounded-full text-darkBlue cursor-pointer text-center relative">
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/>
                                <button onClick={() => setIsOpen(true)} className="w-full h-full">
                                <FontAwesomeIcon icon={faPlay}/>
                                </button>
                                <span className='absolute left-0 top-0 content-[] rounded-full w-full h-full border border-[#eaeaea] play'/>
                            </span>
                        </div>
                        <div className="relative z-[2] w-full">
                            <h2 className="xl:text-[60px] font-bold text-white tracking-tighter uppercase lg:text-[50px] md:text-[40px] text-[28px] w-full ">{description}</h2>
                            {/* <h2 className="xl:text-[60px] font-bold text-white tracking-tighter uppercase lg:text-[50px] md:text-[40px] text-[28px] w-full ">With Design &amp; Conceptual Decisions We Create Value for the Object</h2> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    </section>
    </>

    

  )
}

export default VideoComponent

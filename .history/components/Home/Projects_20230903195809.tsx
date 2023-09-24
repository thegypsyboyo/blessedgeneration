"use client"
import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { AnimatedText } from '@/constants/AnimatedText'
import ProjectsData from './ProjectsData'
import Partner from '../About/Partner'

const Projects = () => {

  return (
    <>
        {/* <Partner className='mt-[200px] !bg-white'/> */}
        <section className='overflow-hidden mt-[160px] pt-[120px] pb-[200px] w-full h-full bg-no-repeat bg-cover bg-center relative z-[1]' style={{backgroundImage: `url(/images/test/gallery-1.jpg)`}}>
            <div className='absolute content-[] w-full h-full bg-redDark opacity-[0.9] z-[-1] left-0 top-0'/>
            <Layout className="">
                <div className="flex flex-col justify-center items-center  w-full h-full">
                    <div className="flex-grow-0 flex-shrink-0 w-full mb-10">
                        <div className='relative z-[3] lg:max-w-540 m-auto w-full flex flex-col items-center justify-center text-center'>
                            <div className="relative mb-[28px] block -mt-[4px] w-full">
                            <span className="text-[24px] w-full text-white font-normal  leading-[24px] mb-[10px] font-man uppercase">[ our work ]</span>
                            <h2 className="m-0 text-primaryDark text-[50px] leading-[50px] font-[900] -tracking-[0.04em] mt-[6px]">
                                <AnimatedText text={"what we provide"} className={"text-white !uppercase font-[800]"} />
                            </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
        <ProjectsData/>
    </>

  )
}

export default Projects
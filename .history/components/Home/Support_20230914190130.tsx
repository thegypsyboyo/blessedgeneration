"use client"

import React, { useState } from 'react'
import Layout from './Layout'
import Image from 'next/image'

import AnimatedButton from '@/constants/AnimatedButton'

const Volunteer = () => {
   
  return (
    <section className="relative block mt-0 pt-[0] pb-[0] bg-white w-full h-full ">
        <div className="w-full h-full block">
            <Layout className="flex items-center flex-col">
            <div className="flex items-start flex-wrap w-full h-full justify-between">
            <div className="w-full md:max-w-[50%] flex-shrink-0 flex-grow-0 bg-yellowColor lg:h-[600px] h-[500px]">
                    <div className="md:p-[50px] p-[30px] lg:p-[90px] flex flex-col items-center justify-center w-full h-full text-center">
                        <h2 className='font-bold relative z-[1] mb-[25px]  text-[36px] text-white'>Become a volunteer</h2>
                        <p className="text-white font-[400] text-[16px] leading-[28px]">
                                Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur.
                        </p>
                        <AnimatedButton className='' link='/become-volunteer' text='volunteer' style=''/>
                    </div>
                </div>
                <div className="md:max-w-[50%] flex-grow-0 flex-shrink-0 max-w-full h-[500px] lg:h-[600px]">
                    <div className="relative z-[1] w-full h-full">
                        <Image src={"/images/testing/gallery-1.jpg"} alt='' width={800} height={800} className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
            </Layout>
        </div>
    </section>
  )
}

export default Volunteer
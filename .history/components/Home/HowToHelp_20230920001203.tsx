import React from 'react'
import Layout from './Layout'
import VideoPlayer from '@/constants/VideoPlayer'
import Image from 'next/image'

interface HelpInfo {
    image: string;
    title: string;
}

const HowToHelp = () => {
    const helpInfo:HelpInfo[] = [
        {
            image: "/images/testing/gallery-1.jpg",
            title: "media",
        },
        {
            image: "/images/testing/gallery-2.jpg",
            title: "mobolization",
        },
        {
            image: "/images/testing/gallery-3.jpg",
            title: "projection",
        },
        {
            image: "/images/testing/gallery-4.jpg",
            title: "support",
        },

    ]
  return (
    <section className='w-full min-h-full mt-11 pt-[120px] py-[90px] bg-redDark'>
        <div className="h-full w-full flex flex-col  items-center" >
             <div className='w-full h-full text-center mb-[30px]'>
                <h4 className="text-white lg:text-6xl text-4xl uppercase font-bold">How can you help ?</h4>
            </div>
            <Layout className="h-full flex items-center !justify-center !overflow-visible mt-[40px]">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    something goes here
                </div>
            </Layout>
        </div>
    </section>
  )
}

export default HowToHelp
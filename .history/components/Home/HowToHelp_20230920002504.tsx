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
    <section className='w-full min-h-full mt-11 pt-[120px] py-[90px] bg-redDark relative '>
        {/* <div className="h-full w-full flex flex-col  items-center" >
             <div className='w-full h-full text-center mb-[30px]'>
                <h4 className="text-white lg:text-6xl text-4xl uppercase font-bold">How can you help ?</h4>
            </div>
            <Layout className="h-full flex items-center !justify-center !overflow-visible mt-[40px]">
                <div className="flex items-center flex-wrap w-full h-full justify-between">
                    something goes here
                </div>
            </Layout>
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="w-full h-full transform scale-[1.18] bg-center bg-norepeat bg-cover" style={{backgroundImage: `url(/images/testing/gallery-8.jpg)`}}></div>
        </div>
    </section>
  )
}

export default HowToHelp
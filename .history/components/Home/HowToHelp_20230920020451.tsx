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
    <section className='w-full min-h-full relative '>
        <div className="relative w-full h-full flex  flex-wrap bg-redDark ">
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="w-full h-full transform scale-[1.18] bg-center bg-norepeat bg-cover" style={{backgroundImage: `url(/images/testing/gallery-8.jpg)`}} />
            </div>
            <div className="bg-[#002886] opacity-[.7] h-full w-full top-0 left-0 absolute " /> */}

            <div className="flex-grow-0 flex-shrink-0 md:w-[61.917%] w-full">
                <Layout>
                <div className="w-full p-4 items-start  flex flex-col relative">
                            <h3 className="w-full text-[#fe0] text-[16px] font-medium  uppercase leading-[28px] mb-[20px]">Mission is Give for People</h3>
                            <h2 className="!ml-0 lg:w-[525px] flex items-start justify-start text-white text-[40px] font-bold leading-[55px] mb-[20px] ">Some People Need Help And We Give It! </h2>
                            <p className='text-[18px] font-normal leading-[33px] text-white max-w-[525px]'>Alienum phaedrum torquatos nec eu, vis detrax culis ex, nihis in mei. Mei an periculaeuripidis.</p>
                        </div>
                </Layout>
            </div>
            <div className="flex-grow-0 flex-shrink-0 md:w-[38.083%] w-full bg-yellowColor">
                <div className="">
                    <Image src="/images/testing/gallery-7.jpg" alt="gallery-7" width={800} height={800} className="h-full w-full object-cover"/>
                </div>
            </div>
{/* 
            <Layout className="">
                <div className="flex w-full h-full  relative mx-auto flex-wrap">
                    <div className="flex-grow-0 flex-shrink-0 md:w-[61.917%] w-full">
                        <div className="w-full p-4 items-start  flex flex-col relative">
                            <h3 className="w-full text-[#fe0] text-[16px] font-medium  uppercase leading-[28px] mb-[20px]">Mission is Give for People</h3>
                            <h2 className="!ml-0 lg:w-[525px] flex items-start justify-start text-white text-[40px] font-bold leading-[55px] mb-[20px] ">Some People Need Help And We Give It! </h2>
                            <p className='text-[18px] font-normal leading-[33px] text-white max-w-[525px]'>Alienum phaedrum torquatos nec eu, vis detrax culis ex, nihis in mei. Mei an periculaeuripidis.</p>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 md:w-[38.083%] w-full bg-yellowColor">
                        <div className=""></div>
                    </div>
                </div>
            </Layout> */}

        </div>
    </section>
  )
}

export default HowToHelp